import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
export const Specific = () => {
    const selector = useSelector((store) => store.id);
    const [details, setDetails] = useState({});
    console.log(selector);
    useEffect(() => {
        getUser();
    }, []);
    const getUser = () => {
        axios
            .get(`http://localhost:2424/flat/flat/specific/${selector}`)
            .then(({ data }) => {
                console.log("data", data), setDetails(data);
            });
    };
    return (
        <div>
            <Navbar></Navbar>
            <div>Block : {details.Block}</div>
            <div>Block Number : {details.Block_no}</div>
            <div>Name : {details.Name}</div>
            <div>Gender : {details.Gender}</div>
            <div>Age : {details.Age}</div>
        </div>
    );
};
