
import { useState } from "react";

import {
  Card,
  
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from "@ant-design/icons";


function Home() {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={<h2>My Account</h2>}
        bordered={false}
        style={{
          marginTop: 40,
        }}
      >
        <h3>Full name</h3>
        <p>RIB</p>
        <p>solde</p>
        
      </Card>
    </div>
)
}

export default Home;
