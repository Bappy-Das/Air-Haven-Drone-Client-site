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
import { Button, Typography } from '@mui/material';

import { Box } from '@mui/system';
import noOrder from '../../../images/noOrder.gif';
import Avatar from '@mui/material/Avatar';




const ManageProduct = () => {

    const [deleteAlert, setDeleteAlert] = useState(false);

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://hidden-eyrie-24274.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    const handleDelete = id => {
        var x = window.confirm("Are you sure you want to delete?");
        if (x) {
            fetch(`https://hidden-eyrie-24274.herokuapp.com/product/${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert("data delete succesfully")
                        setDeleteAlert(true);
                        const remaining = product.filter(product => product._id !== id)
                        setProduct(remaining);
                    }
                })
        }

    }


    return (
        <div>
            <h1>Manage All Product</h1>
            {deleteAlert && <Stack sx={{ width: '100%', my: 5 }} spacing={2}>
                <Alert variant="filled" severity="error">
                    Product Delete Succesfully
                </Alert>
            </Stack>}
            <TableContainer component={Paper}>
                {
                    product?.length !== 0 ?
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Product Image</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    product?.map(pd => <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                        <TableCell align="center">
                                            <Avatar
                                                variant="square"
                                                alt="Remy Sharp"
                                                src={pd?.img}
                                                sx={{ width: 100, height: 100 }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">{pd?.name}</TableCell>
                                        <TableCell align="center">{pd?.describe.slice(0, 40)}</TableCell>
                                        <TableCell align="center">{pd?.price}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={() => handleDelete(pd?._id)}
                                                sx={{ m: 2 }}
                                                startIcon={<DeleteIcon />}
                                                variant="outlined"
                                                color="error">
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>)
                                }

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

export default ManageProduct;