import "./layout.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
// import { createBrowserHistory } from "history";

import AppRouterComponent from "./routes/app_routes";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MyLayOut = () => {
  // const base = "app/";
  // const history = createBrowserHistory();
  return (
    <Layout style={{ height: "100%" }}>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["2"]}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            // defaultSelectedKeys={["1"]}
            defaultOpenKeys={["container", "image", "group"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="container" icon={<UserOutlined />} title="容器">
              <Menu.Item key="container_create">
                <Link to={`container_create`}>创建容器</Link>
              </Menu.Item>
              <Menu.Item key="container_manage">
                <Link to={`container_manage`}>管理容器</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="image" icon={<LaptopOutlined />} title="镜像">
              <Menu.Item key="image_create">
                <Link to={`image_create`}>创建镜像</Link>
              </Menu.Item>
              <Menu.Item key="image_manage">
                <Link to={`image_manage`}>管理镜像</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="group" icon={<NotificationOutlined />} title="组织">
              <Menu.Item key="group_create">
                <Link to={`group_create`}>创建组织</Link>
              </Menu.Item>
              <Menu.Item key="group_manage">
                <Link to={`group_manage`}>管理组织</Link>
              </Menu.Item>
              <Menu.Item key="group_join">
                <Link to={`group_manage`}>加入组织</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <AppRouterComponent parent={"/app"}></AppRouterComponent>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MyLayOut;
