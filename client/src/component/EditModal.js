import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import API from "../api/Api";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const EditModal = ({ data, visible, onOk, onCancel }) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();

    const { id, name, email, phone, website } = data;

    const handleOk = async() => {
        try {
            const values = await form.validateFields();
            console.log(values);
            setConfirmLoading(true);
            await API.put(`/edit-user/${id}`, values);
            //   console.log(res.data);
            setConfirmLoading(false);
            onOk();
            window.location.reload();
        } catch (error) {
            console.error("Validation Failed:", error);
        }
    };

    return ( <
        Modal title = "Edit User"
        open = { visible }
        onOk = { handleOk }
        confirmLoading = { confirmLoading }
        onCancel = { onCancel } >
        <
        Form {...layout }
        form = { form }
        name = "edit-user"
        initialValues = {
            { name, email, phone, website } }
        onFinish = { handleOk }
        style = {
            { maxWidth: 600 } } >
        <
        Form.Item name = "name"
        label = "Name"
        rules = {
            [{ required: true, message: "Please input the name!" }] } >
        <
        Input / >
        <
        /Form.Item>{" "} <
        Form.Item name = "email"
        label = "Email"
        rules = {
            [{ required: true, message: "Please input the email!" }] } >
        <
        Input / >
        <
        /Form.Item>{" "} <
        Form.Item name = "phone"
        label = "Phone"
        rules = {
            [
                { required: true, message: "Please input the phone number!" },
            ]
        } >
        <
        Input / >
        <
        /Form.Item>{" "} <
        Form.Item name = "website"
        label = "Website"
        rules = {
            [{ required: true, message: "Please input the website!" }] } >
        <
        Input / >
        <
        /Form.Item>{" "} <
        /Form>{" "} <
        /Modal>
    );
};

export default EditModal;