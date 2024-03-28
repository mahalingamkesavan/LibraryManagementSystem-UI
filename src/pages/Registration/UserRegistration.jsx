
import { Flip,ToastContainer } from "react-toastify"
import {Button,Form,Input, Select,} from "antd";
import React from "react";
import { UserPostAxios } from "../../service/UserService/UserAxios";



const UserRegistration = ({userRole}) => {
  
  const HandleSubmit = async (values) => {
    console.log("enter")
   await UserPostAxios(values,userRole);
  };
  return (
    <>
    <ToastContainer autoClose={3000} transition={Flip} draggable="false" />
    <div className="login-form">
      <Form autoComplete="off" labelCol={{ span: 12 }} onFinish={(values)=>{HandleSubmit(values)}}>
        <Form.Item label="Name" name="name"
          rules={[
            {
              required: true,
              message: "Please Enter your Name "
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback>
          <Input placeholder="Type your name" />
        </Form.Item>
        <Form.Item label="Email Address" name="email"
          rules={[
            {
              required: true,
              message: "Please Enter your email "
            },
            { type: "email" },
          ]}
          hasFeedback>
          <Input placeholder="Type your Email" />
        </Form.Item>

        <Form.Item label="Password" name="password"
          rules={[
            {
              required: true,
            },
            {min:10}
          ]}
          hasFeedback
          >
          <Input.Password placeholder="Type your Password" />
        </Form.Item>
        <Form.Item label="Confirm Password" name="Confirm Password"
        dependencies={['password']}
        rules={[
          {
            required: true,
          },
          
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve('The two password that you entered does not match')
              }
              return Promise.reject('The two password than you entered does not match')
            }
          }),
        ]}
        hasFeedback>
          <Input.Password placeholder="Type your Confirm Password" />
        </Form.Item>
        <Form.Item label="Phone Number" name="phoneNumber"
         rules={[
          {
            required: true,
          },
          {min:10,
          max:10},
          {
            pattern: new RegExp("^[0-9]*$"),
            message:'Enter only numbers'
        },
        ]}
        hasFeedback
        >
          <Input placeholder="Type your Phone Number" />
        </Form.Item>
        {userRole==='Admin'?<Form.Item 
            name="role" 
            label="Role"
            rules={[
            {
                required:true,
                message:'please select Role',
            }   
            ]}
            hasFeedback>
             
      <Select placeholder='Select Role' >
        <Select.Option key="Admin" label="Admin" >Admin</Select.Option>
        <Select.Option key="User"  label="User" >User</Select.Option>
      </Select>
      </Form.Item>:<div> <Form.Item label="Address" name="address" 
        rules={[
          {
            required: true,
            message: "Please Enter your Address "
          },
          { whitespace: true },
        ]}>
          <Input placeholder="Type your State" />
        </Form.Item>
        <Form.Item label="City" name="city"
        rules={[
          {
            required: true,
            message: "Please Enter your City "
          },
          { whitespace: true },
          { min: 3 },
        ]}>
          <Input placeholder="Type your City" />
        </Form.Item>
        <Form.Item label="State" name="state" 
        rules={[
          {
            required: true,
            message: "Please Enter your City "
          },
          { whitespace: true },
          { min: 3 },
        ]}>
          <Input placeholder="Type your State" />
        </Form.Item>
        </div>}
        
        <Form.Item >
          <Button block type="primary" htmlType="submit">Registration</Button>
        </Form.Item>
      </Form>
    </div>
    </>
  )
};
export default UserRegistration;
