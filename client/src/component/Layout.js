import React, { useEffect, useState } from "react";

import API from "../api/Api";
import UserCards from "./UserCards";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const Layout = () => {
    const [userList, setUserList] = useState();
    const navigate = useNavigate();

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const handelAddUser = () => {
        navigate('/add-user');
    }
    const getUser = async() => {
        setIsLoading(true);
        const result = await API.get("/all-user");

        if (result.data.users.length === 0) {
            setMessage('Please add user by clicking on ADD User button!!');
        }
        setUserList(result.data.users);
        setIsLoading(false);
        // console.log(result.data.users);
    };
    useEffect(() => {
        getUser();
    }, []);

    return ( <
        > {
            isLoading ? ( < Spinner / > ) : ( < div style = {
                    { padding: "5%" } } >
                <
                div style = {
                    { margin: "0rem 0rem 2rem 0rem" } }
                className = "add-user" >
                <
                Button type = "primary"
                size = "large"
                style = {
                    { display: "block", margin: "auto" } }
                onClick = { handelAddUser } > ADD USER < /Button> <
                /div> <
                Flex wrap gap = "large" > {
                    userList &&
                    userList.map((user) => {
                        return ( <
                            UserCards key = { user._id }
                            id = { user._id }
                            username = { user.username }
                            name = { user.name }
                            email = { user.email }
                            phone = { user.phone }
                            website = { user.website }
                            />
                        );
                    })
                } <
                /Flex> <
                div style = {
                    { textAlign: "center", color: "red", fontSize: "2rem" } } > { message } < /div> <
                /div>
            )
        } <
        />
    );
};

export default Layout;