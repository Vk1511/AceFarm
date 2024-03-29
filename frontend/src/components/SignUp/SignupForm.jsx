import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import {signUp} from "../../services/auth";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const history = useNavigate();

  const onFinish = (values) => {
    let data = {
      "email": values.username,
      "first_name": values.Name,
      "last_name": values.Name,
      "phone_no": values.mobile,
      "password": values.password
    }
    signUp(data).then((data) => {
      history("/auth/login");
    }).catch((error) => {
      console.log("error",JSON.stringify(error.response.data))
    })
  }

  return (
    <div className="login_con">
      <h1 style={{ marginBottom: "2rem" }}>Sign Up</h1>
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        layout="vertical"
        // wrapperCol={{ span: 16 }}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: "Please input your username!" }]}
          className="form_field"
        >
          <Input className="form_input" placeholder="Enter Name" />
        </Form.Item>

        <Form.Item
          label="Mobile No"
          name="mobile"
          rules={[{ required: true, message: "Please input your username!" }]}
          className="form_field"
        >
          <Input className="form_input" placeholder="9727777015" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          className="form_field"
        >
          <Input className="form_input" placeholder="abc@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          className="form_field"
        >
          <input
            type="password"
            name=""
            id=""
            className="form_input"
            placeholder="Enter Password"
          />
          {/* <Input.Password className="form_input" style={{marginTop:"5rem"}}/> */}
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="cpassword"
          rules={[{ required: true, message: "Please input your password!" }]}
          className="form_field"
        >
          <input
            type="password"
            name=""
            id=""
            className="form_input"
            placeholder="Enter Confirm Password"
          />
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
          <Button
            type="primary"
            htmlType="submit"
            className="login_btn linear_back"
            // onClick={() => dispatch(registerUser())}
          >
            SIGN UP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignupForm;
