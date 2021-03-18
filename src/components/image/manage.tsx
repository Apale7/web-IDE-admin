import { Table, Space } from "antd";
import { useEffect, useState } from "react";

const { Column } = Table;

let data:any = []

export default function ImageManage() {
  
  return (
    <Table dataSource={data} pagination={{ defaultPageSize: 5 }}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="名称" dataIndex="name" key="name" />
      <Column title="创建时间" dataIndex="created" />
      <Column title="依赖镜像" dataIndex="image" key="image_id" />
      <Column title="状态" dataIndex="status" key="status" />

      <Column
        title="Action"
        key="action"
        render={(text, record: any) => (
          <Space size="middle">
            <a>Invite {record.lastName}</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
}
