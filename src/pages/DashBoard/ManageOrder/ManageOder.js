import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import axios from 'axios';




const ManageOder = () => {
    const [orders, setOrder] = useState();
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [status])


    const handleDelete = id => {
        var x = window.confirm("Are you sure you want to delete?");
        if (x) {
            fetch(`http://localhost:5000/order/${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert("data delete succesfully")
                        setDeleteAlert(true);
                        const remaining = orders.filter(product => product._id !== id)
                        setOrder(remaining);
                    }
                })
        }

    }
    const handleStatus = id => {
        console.log(id)
        axios.put(`http://localhost:5000/updatestatus/${id}`)
            // .then(res => console.log("Order Approved"))
            .then((data) => setStatus(true))

    }


    // console.log(orders)
    return (
        <div>
            <h1>Manage All Order</h1>
            {deleteAlert && <Stack sx={{ width: '100%', my: 5 }} spacing={2}>
                <Alert variant="filled" severity="error">
                    Order Delete Succesfully
                </Alert>
            </Stack>}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Product Name</TableCell>
                            <TableCell align="left">Address</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            orders?.map(pd => <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                <TableCell align="left">{pd?.productInfo?.name}</TableCell>
                                <TableCell align="left">{pd?.address}</TableCell>
                                <TableCell align="left">{pd?.phone}</TableCell>
                                <TableCell align="left">{pd?.status}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        onClick={() => handleDelete(pd?._id)}
                                        sx={{ m: 2 }}
                                        startIcon={<DeleteIcon />}
                                        variant="outlined"
                                        color="error">
                                        Delete
                                    </Button>
                                    <Button
                                        onClick={() => handleStatus(pd?._id)}
                                        sx={{ m: 2 }}
                                        variant="contained"
                                        color="success">
                                        Approved Order
                                    </Button>
                                </TableCell>


                            </TableRow>)
                        }

                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    );
};

export default ManageOder;