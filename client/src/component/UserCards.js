import React, { useState } from "react";
import {
    DeleteFilled,
    MailOutlined,
    PhoneOutlined,
    GlobalOutlined,
    EditFilled,
    HeartFilled,
    HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";
import API from "../api/Api";
import EditModal from "./EditModal";

const { Meta } = Card;
const UserCards = ({ id, username, name, email, phone, website }) => {
        const imageURL = `https://api.dicebear.com/8.x/pixel-art/svg?seed=${username}`;
        const [liked, setLiked] = useState(false);
        // modal

        const [modalVisible, setModalVisible] = useState(false);

        const showModal = () => {
            setModalVisible(true);
        };

        const handleOk = () => {
            setModalVisible(false);
        };

        const handleCancel = () => {
            console.log("Clicked cancel button");
            setModalVisible(false);
        };

        const handleEdit = () => {
            showModal();
        };

        const handelDelete = async() => {
            // console.log(id);
            try {
                await API.delete(`/delete-user/${id}`);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }

            // console.log(res);
        };
        return ( <
            >
            <
            Card style = {
                {
                    width: 300,
                }
            }
            cover = { < img alt = "example"
                src = { imageURL }
                />}
                actions = {
                    [ <
                        Button
                        onClick = {
                            (e) => {
                                setLiked(!liked);
                            }
                        } >

                        {
                            liked ? ( <
                                HeartFilled style = {
                                    { color: "red" } }
                                />
                            ) : ( <
                                HeartOutlined / >
                            )
                        } <
                        /Button>, <
                        Button onClick = { handleEdit } >

                        <
                        EditFilled / >
                        <
                        /Button>, <
                        Button onClick = { handelDelete } >

                        <
                        DeleteFilled / >
                        <
                        /Button>,
                    ]
                } >
                <
                Meta
                style = {
                    { margin: "0.5rem 0rem" } }
                avatar = { <
                    Avatar
                    style = {
                        { width: "1.5rem" } }
                    src = { `https://api.dicebear.com/7.x/pixel-art/svg?seed=${username}` }
                    />
                }
                title = { name }
                /> <
                Meta
                style = {
                    { margin: "0.5rem 0rem" } }
                avatar = { <
                    MailOutlined style = {
                        { fontWeight: "100", fontSize: "1.5rem" } }
                    />
                }
                title = { email }
                /> <
                Meta
                style = {
                    { margin: "0.5rem 0rem" } }
                avatar = { <
                    PhoneOutlined style = {
                        { fontWeight: "100", fontSize: "1.5rem" } }
                    />
                }
                title = { phone }
                /> <
                Meta
                style = {
                    { margin: "0.5rem 0rem" } }
                avatar = { <
                    GlobalOutlined style = {
                        { fontWeight: "100", fontSize: "1.5rem" } }
                    />
                }
                title = { website }
                /> <
                /Card> { /* MoDal code */ } <
                EditModal
                data = {
                    { id, name, email, phone, website } }
                visible = { modalVisible }
                onOk = { handleOk }
                onCancel = { handleCancel }
                /> <
                />
            );
        };

        export default UserCards;