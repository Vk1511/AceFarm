import React from "react";
import { Form, Input, Button, Checkbox,notification } from 'antd';
import "./LoginForm.css";
import { Link, Outlet } from "react-router-dom";

function LoginForm() {
  const openNotification = () => {
    // const args = {
    //   message: 'Sucess',
    //   description:
    //     'Login Sucessfully!',
    //   duration: 0,
    // };
    // notification.open(args);
  };
  return (
    <div className="login_con">
      <h1 style={{marginBottom:"2rem"}}>Sign In</h1>
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        layout="vertical"
        // wrapperCol={{ span: 16 }}
        // initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          className="form_field"
        >
          <Input className="form_input" placeholder="abc@gmail.com"/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          className="form_field"
        >
          <input type="password" name="" id="" className="form_input" placeholder="Enter Password"/>
          {/* <Input.Password className="form_input" style={{marginTop:"5rem"}}/> */}
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item className="common_flex">
          <Link to="/">
          
          <Button type="primary" htmlType="submit" className="login_btn linear_back" onClick={openNotification}>
            SIGN IN
          </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
