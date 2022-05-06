import { Input } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
const { token, user } = JSON.parse(localStorage.getItem("userDetails"));
console.log(user);
export const AddFlat = () => {
    const [id, setId] = useState("");
    const [addflat, setAddFlat] = useState({
        Block: "",
        Block_no: "",
        Name: "",
        Gender: "",
        Age: "",
        manager: user._id,
    });

    const handleChange = (e) => {
        setAddFlat({
            ...addflat,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        setId(user._id);
    }, []);

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };

    const onSubmitting = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:2424/flat", addflat, {
                headers: headers,
            })
            .then(({ data }) => {
                alert("resident was added");
                console.log(data);
            })
            .catch((err) => alert("Resident was not added"));
    };

    return (
        <div>
            <Navbar></Navbar>
            <form
                onSubmit={onSubmitting}
                action=""
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 200,
                    // margin: 10,
                    margin: "auto",
                }}
            >
                <Input
                    placeholder="Block"
                    name="Block"
                    onChange={handleChange}
                ></Input>
                <Input
                    placeholder="Block Number"
                    name="Block_no"
                    type="number"
                    onChange={handleChange}
                ></Input>
                <Input
                    placeholder="Name"
                    type="text"
                    name="Name"
                    onChange={handleChange}
                ></Input>

                <Input
                    placeholder="Gender"
                    type="text"
                    name="Gender"
                    onChange={handleChange}
                ></Input>
                <Input
                    placeholder="Age"
                    type="number"
                    name="Age"
                    onChange={handleChange}
                ></Input>

                <br />
                <input type="submit" name="" id="" />
            </form>
            <br />
        </div>
    );
};
