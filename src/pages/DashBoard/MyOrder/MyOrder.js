import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
const MyOrder = () => {
    const { user } = useFirebase();
    const [orders, setOrder] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [orders])
    const handleDelete = id => {
        var x = window.confirm("Are you sure you want to delete?");
        if (x) {
            fetch(`http://localhost:5000/order/${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert("data delete succesfully")
                        // setDeleteAlert(true);
                        const remaining = orders.filter(product => product._id !== id)
                        setOrder(remaining);
                    }
                })
        }

    }


    const myOrder = orders?.filter(myOrder => myOrder?.orderBy?.email == user?.email)
    return (
        <div>
            <h1>This is my order</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Product Name </TableCell>
                            <TableCell align="center">Order Date</TableCell>
                            <TableCell align="center">Order Status</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrder?.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row?.productInfo?.name}</TableCell>
                                <TableCell align="center">{row?.orderDate}</TableCell>
                                <TableCell align="center">{row?.status}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        onClick={() => handleDelete(row?._id)}
                                        sx={{ m: 2 }}
                                        variant="outlined"
                                        color="error"
                                    >
                                        Cencle Order
                                    </Button></TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrder;