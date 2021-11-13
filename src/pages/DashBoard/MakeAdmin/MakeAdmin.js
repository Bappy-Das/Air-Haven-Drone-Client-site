import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Divider, TextField, Typography } from '@mui/material';
import { display } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('');

    const handleOnBlur = e => {
        setAdminEmail(e.target.value)
    }

    const handleMakeAdmin = e => {
        const email = { adminEmail };

        fetch('https://safe-meadow-80713.herokuapp.com/adduser/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault();
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12}>
                        <Item>
                            <Typography variant="h3" gutterBottom component="div">
                                Make An Admin

                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Item>
                            <Box sx={{
                                height: '40vh',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <form onSubmit={handleMakeAdmin}>
                                    < TextField
                                        sx={{ width: 350, m: 2 }
                                        }
                                        label="Enter Email"
                                        type="email"
                                        onBlur={handleOnBlur}
                                        variant="outlined"
                                    />
                                    <Button
                                        sx={{ m: 3 }}
                                        variant="contained"
                                        type="submit"
                                    >Make Admin</Button>
                                </form>
                            </Box>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
            {/* <form onSubmit={handleMakeAdmin}>
                < TextField
                    sx={{ width: 350 }
                    }
                    label="Enter Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined"
                />
                <Button
                    sx={{ ml: 2 }}
                    // onClick={handleMakeAdmin}
                    variant="contained"
                    type="submit"
                >Make Admin</Button>
            </form> */}
        </>
    );
};

export default MakeAdmin;