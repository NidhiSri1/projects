import { Input } from "@mui/material";
import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
export const SignUp = () => {
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
    });

    console.log(signup);
    const handleChange = (e) => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitting = (e) => {
        e.preventDefault();
        axios
            .post("http://managinigflats.herokuapp/register", signup)
            .then(({ data }) => {
                alert("User create - Login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form
                onSubmit={onSubmitting}
                action=""
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 200,
                    margin: 10,
                    margin: "auto",
                }}
            >
                <Input
                    placeholder="Enter Name"
                    name="name"
                    onChange={handleChange}
                ></Input>
                <Input
                    placeholder="Enter email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                ></Input>
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                ></Input>
                <br />
                <input type="submit" name="" id="" />
            </form>
            <br />
            <Link to={`/login`}>Login</Link>
        </div>
    );
};
