import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button, Grid, TextField } from '@mui/material';


import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #E5F3FF',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};
const PurchaseModal = ({ open, handleClose, productInfo }) => {
    const { user } = useAuth();
    const [orders, setOrder] = React.useState({});
    // const { register, handleSubmit, } = useForm();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...orders };
        newLoginData[field] = value;
        setOrder(newLoginData)
        console.log(orders)
    }
    // const onSubmit = data => {
    const handlePurchaseSubmit = e => {
        const order = {
            ...orders,
            orderBy: user,
            orderDate: new Date().toLocaleDateString(),
            status: "Pending",
            productInfo: productInfo,
        }
        axios.post('https://safe-meadow-80713.herokuapp.com/purchaseorder', order)
            .then(res => {
                // if (res.data.insertedId) {
                //     alert("Succesfully Inserted")
                //     handleClose()
                // }
                handleClose()
            })
        // console.log(data)
        e.preventDefault();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        </Typography>
                        <Box component="form" onSubmit={handlePurchaseSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2} sx={{ my: 3 }}>
                                <Grid item xs={12}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label="Your Name"
                                        id="outlined-size-small"
                                        name="name"
                                        defaultValue={user?.displayName}
                                        // onBlur={handleOnBlur}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label="Email"
                                        id="outlined-size-small"
                                        name="email"
                                        defaultValue={user?.email}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Phone"
                                        id="outlined-size-small"
                                        name="phone"
                                        onBlur={handleOnBlur}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Address"
                                        id="outlined-size-small"
                                        name="address"
                                        onBlur={handleOnBlur}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="State/Province"
                                        id="outlined-size-small"
                                        name="state"
                                        onBlur={handleOnBlur}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="City"
                                        id="outlined-size-small"
                                        name="city"
                                        onBlur={handleOnBlur}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Order date"
                                        id="outlined-size-small"
                                        defaultValue={new Date().toLocaleDateString()}
                                        disabled
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Place Order
                            </Button>
                        </Box>
                    </Box>
                    {/* <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {productInfo.name}
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <span>Name : </span>
                            <input {...register("Name")} value={user?.displayName} />
                            <br />
                            <span>Email : </span>
                            <input {...register("email")} value={user?.email} />
                            <br />
                            <span>Phone : </span>
                            <input type="number" {...register("phone", { required: true })} />
                            <br />
                            <span>State/Province : </span>
                            <input {...register("state", { required: true })} />
                            <br />
                            <span>City  : </span>
                            <input {...register("city", { required: true })} />
                            <br />
                            <span>Zip/Postal Code : </span>
                            <input {...register("zipCode", { required: true })} />



                            <br />
                            <input type="submit" />
                        </form>
                    </Box> */}
                </Fade>
            </Modal>
        </div>
    );
};

export default PurchaseModal;