import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddDrone = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://air-haven-drone-server-update.vercel.app/addservice', data)
            .then(res => {
                console.log(res)
                reset()
            })
        console.log(data)
    };
    return (
        <div>
            <h1>This is add product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span>Product Name :</span><br />
                <input {...register("name")} placeholder="Product Name" /><br />

                <span>Takeoff Weight :</span><br />
                <input {...register("weight")} placeholder="Mavic 3: 895" /><br />

                <span> Diagonal Length :</span><br />
                <input {...register("length")} placeholder="380.1" /><br />

                <span>Max Flight Time :</span><br />
                <input {...register("Max_flight_time")} placeholder="60" /><br />

                <span>Max Flight Distance :</span><br />
                <input {...register("distance")} placeholder="30" /><br />

                <span>Operating Temperature :</span><br />
                <input {...register("temperature")} placeholder="-10° to 40° C (14° to 104° F)" /><br />

                <span>Product description :</span> <br />
                <textarea {...register("describe")} placeholder="Product description" /><br />

                <span>Product Image Url :</span> <br />
                <input {...register("img")} placeholder="Image Url" /><br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddDrone;