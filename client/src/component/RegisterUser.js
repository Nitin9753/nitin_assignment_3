import React from "react";
import { Form, Input, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import API from "../api/Api";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const RegisterUser = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async(values) => {
        try {
            const { data } = await API.post("/create-user", values);
            if (data.success) {
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handelCancel = () => {
        navigate("/");
    };
    return ( <
        Form {...layout }
        form = { form }
        name = "control-hooks"
        onFinish = { onFinish }
        style = {
            {
                display: "block",
                margin: "2rem auto",
                maxWidth: 600,
            }
        } >
        <
        Form.Item name = "name"
        label = "Name"
        rules = {
            [{
                required: true,
            }, ]
        } >
        <
        Input / >
        <
        /Form.Item>{" "} <
        Form.Item name = "email"
        label = "Email"
        rules = {
            [{
                required: true,
            }, ]
        } >
        <
        Input / >
        <
        /Form.Item>{" "} <
        Form.Item name = "username"
        label = "Username"
        rules = {
            [{
                required: true,
            }, ]
        } >
        <
        Input / >
        <
        /Form.Item>{" "} <
        Form.Item name = "phone"
        label = "Phone"
        rules = {
            [{
                required: true,
            }, ]
        } >
        <
        Input / >
        <
        /Form.Item>{" "} <
        Form.Item name = "website"
        label = "Website"
        rules = {
            [{
                required: true,
            }, ]
        } >
        <
        Input / >
        <
        /Form.Item> <
        Form.Item {...tailLayout } >
        <
        Space >
        <
        Button type = "primary"
        htmlType = "submit" >
        Submit { " " } <
        /Button>{" "} <
        Button htmlType = "button"
        onClick = { handelCancel } >
        Cancel { " " } <
        /Button> <
        /Space>{" "} <
        /Form.Item>{" "} <
        /Form>
    );
};

export default RegisterUser;