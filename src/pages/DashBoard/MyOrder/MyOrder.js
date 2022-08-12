import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import noOrder from '../../../images/noOrder.gif'
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';
const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrder] = useState();

    useEffect(() => {
        fetch('https://hidden-eyrie-24274.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [orders])
    const handleDelete = id => {
        var x = window.confirm("Are you sure you want to delete?");
        if (x) {
            fetch(`https://hidden-eyrie-24274.herokuapp.com/order/${id}`, { method: "DELETE" })
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

                {myOrder?.length !== 0 ?
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
                    :
                    <Box sx={{
                        textAlign: "center",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography variant="h4" gutterBottom component="div">
                            No Order Found
                        </Typography>
                        <img src={noOrder} alt="No order gif" />
                    </Box>
                }
            </TableContainer>
        </div>
    );
};

export default MyOrder;