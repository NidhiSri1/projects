import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

export const Navbar = () => {
    const [value, setValue] = React.useState("one");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const logoutUser = () => {
        localStorage.setItem("userDetails", JSON.stringify(""));
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
              
                <Link to="/home">
                    <Tab value="one" label="Home" />
                </Link>
                <Link to="/addFlat">
                    <Tab value="one" label="Add Resident" />
                </Link>
                <Link to="/login">
                    <Tab onClick={logoutUser} value="one" label="Logout" />
                </Link>
            </Tabs>
        </Box>
    );
};
