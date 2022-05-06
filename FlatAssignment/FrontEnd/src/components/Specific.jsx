import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import Typography from "@mui/material/Typography";
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

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: "60px",
    }));
    const lightTheme = createTheme({ palette: { mode: "light" } });
    return (
        <div>
            <Navbar></Navbar>
            {/* <div>Block : {details.Block}</div>
            <div>Block Number : {details.Block_no}</div>
            <div>Name : {details.Name}</div>
            <div>Gender : {details.Gender}</div>
            <div>Age : {details.Age}</div> */}
            <Grid container spacing={2}>
                {[lightTheme].map((theme, index) => (
                    <Grid item xs={6} key={index}>
                        <ThemeProvider theme={theme}>
                            <Box
                                sx={{
                                    bgcolor: "#F0FFC2",
                                    width: 1000,
                                    marginLeft: 20,
                                    p: 2,
                                }}
                            >
                                {[24].map((elevation) => (
                                    <Item
                                        sx={{ height: 500, bgcolor: "#F0FFC2" }}
                                        key={elevation}
                                        elevation={elevation}
                                    >
                                        {
                                            <Typography
                                                variant="p"
                                                component="h2"
                                            >
                                                Block : {details.Block}
                                            </Typography>
                                        }
                                        {
                                            <Typography
                                                variant="p"
                                                component="h2"
                                            >
                                                Block Number :{" "}
                                                {details.Block_no}
                                            </Typography>
                                        }
                                        {
                                            <Typography
                                                variant="p"
                                                component="h2"
                                            >
                                                Name : {details.Name}
                                            </Typography>
                                        }
                                        {
                                            <Typography
                                                variant="p"
                                                component="h2"
                                            >
                                                Gender : {details.Gender}
                                            </Typography>
                                        }
                                        {
                                            <Typography
                                                variant="p"
                                                component="h2"
                                            >
                                                Gender : {details.Gender}
                                            </Typography>
                                        }
                                    </Item>
                                ))}
                            </Box>
                        </ThemeProvider>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
