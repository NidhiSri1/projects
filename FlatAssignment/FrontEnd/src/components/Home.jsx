import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add_flat } from "../Redux/FlatAction";
import { Link } from "react-router-dom";
import { Specific } from "./Specific";
import { add_id } from "../Redux/idAction";
import { Navbar } from "./Navbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Home = () => {
    const [count, setCount] = React.useState(0);
    const [search, setsearch] = React.useState("");
    const dispatch = useDispatch();
    const [searchResult, setSearchResult] = React.useState("");
    const selector = useSelector((store) => store.flat) || [];

    React.useEffect(() => {
        getFlat();
        onSearch();
    }, [search]);
    const { token, user } = JSON.parse(localStorage.getItem("userDetails"));

    const getFlat = () => {
        if (search.length === 0) {
            axios
                .get(
                    `http://localhost:2424/flat/${user._id}`,

                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: token,
                        },
                    }
                )
                .then(({ data }) => {
                    dispatch(add_flat(data));
                    console.log(data);
                })
                .catch((err) => console.log(err));
        } else {
            axios
                .get(
                    `http://localhost:2424/flat/${user._id}/${search}`,

                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: token,
                        },
                    }
                )
                .then(({ data }) => {
                    dispatch(add_flat(data));
                    console.log(data);
                })
                .catch((err) => console.log(err));
        }
    };

    const getid = (id) => {
        dispatch(add_id(id));
    };

    const handleSort = () => {
        const x = selector.sort((a, b) => {
            return b.Block_no - a.Block_no;
        });

        dispatch(add_flat(x));
        setCount(count + 1);
    };
    const handlesort2 = () => {
        const x = selector.sort((a, b) => {
            return a.Block_no - b.Block_no;
        });

        dispatch(add_flat(x));
        setCount(count + 1);
    };

    const searching = (e) => {
        setsearch(e.target.value);
    };

    const onSearch = () => {
        // axios
        //     .get(`http://localhost:2424/flat/${user._id}/${search}`)
        //     .then(({ data }) => setSearchResult(data));
    };

    return (
        <>
            <Navbar></Navbar>
            <TableContainer
                component={Paper}
                sx={{ marginTop: 3, backgroundColor: "#F0FFC2" }}
            >
                <Input
                    placeholder="Search by Block"
                    onChange={searching}
                ></Input>
                <div></div>
                <br />
                <br />
                <br />
                <Stack direction="row" spacing={2}>
                    <Button onClick={() => handleSort()}>
                        Sort high to low
                    </Button>
                    <Button onClick={() => handlesort2()}>
                        Sort low to high
                    </Button>
                </Stack>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Block</TableCell>
                            <TableCell align="right">Block Num</TableCell>
                            <TableCell align="right">Resident Name</TableCell>
                            <TableCell align="right">Resident Gender</TableCell>
                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {selector.map((row, i) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row" key={i}>
                                    {row.Block}
                                </TableCell>
                                <TableCell align="right" key={i + 1}>
                                    {row.Block_no}
                                </TableCell>
                                <TableCell align="right" key={i + 2}>
                                    {row.Name}
                                </TableCell>
                                <TableCell align="right" key={i + 3}>
                                    {row.Gender}
                                </TableCell>
                                <TableCell
                                    key={i + 4}
                                    align="right"
                                    onClick={() => getid(row._id)}
                                >
                                    <Link key={i + 5} to="/specific">
                                        View
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button variant="contained" startIcon={<ArrowBackIosIcon />}>
                    Pre
                </Button>

                <Button variant="contained"endIcon={<ArrowForwardIosIcon />}>Next</Button>
            </TableContainer>
        </>
    );
};
