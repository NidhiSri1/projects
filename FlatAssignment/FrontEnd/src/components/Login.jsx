import { Input } from "@mui/material";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
const { token, user } = JSON.parse(localStorage.getItem("userDetails"));
console.log(user);

import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
    const [signup, setSignup] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

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
            .post("http://localhost:2424/login", signup)
            .then(({ data }) => {
                localStorage.setItem("userDetails", JSON.stringify(data));
                navigate("/Home");
            })
            .catch((err) => alert("Invalid crediantiles"));
    };

    return (
        <div>
            <h1>Please Login </h1>
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
            <p>Dont Have an account?</p>
            <Link to="/">SignUp</Link>
        </div>
    );
};
