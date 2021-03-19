import { Form, Input, Button, Select, Checkbox } from "antd";
import { useForm } from "antd/lib/form/Form";
import { createImage } from "../../api/image";
import { getUserID } from "../../cache/cache";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function ImageCreate() {
  const onFinish = async (values: any) => {
    const success = await createImage({ ...values, user_id: getUserID() });
    alert(success ? "success" : "failed");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = useForm();

  return (
    <Form
      {...layout}
      name="createContainer"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      style={{
        maxWidth: "1200px",
        transform: "translate(-50%, -50%) scale(1.0, 1.0)",
        left: "35%",
        top: "50%",
        position: "relative",
      }}
    >
      <Form.Item
        label="dockerfile"
        name="dockerfile"
        rules={[
          { required: true, message: "用于初始化docker镜像，必须填写！" },
        ]}
      >
        <TextArea style={{ height: "500px" }} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          创建
        </Button>
      </Form.Item>
    </Form>
  );
}
