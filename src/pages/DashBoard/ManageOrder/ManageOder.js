import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const ManageOder = () => {
    const [orders, setOrder] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div>
            <h1>This is manage order</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            orders?.map(pd => <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                <TableCell align="left">{pd?.productInfo?.name}</TableCell>
                                <TableCell align="left">{pd?.address}</TableCell>
                                <TableCell align="left">{pd?.phone}</TableCell>
                                <TableCell align="left">{pd?.status}</TableCell>

                            </TableRow>)
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOder;