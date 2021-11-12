import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddDrone = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/addservice', data)
            .then(res => {
                console.log(res)
            })
        console.log(data)
    };
    return (
        <div>
            <h1>This is add product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span>Product Name :</span><br />
                <input {...register("name")} /><br />
                <span>Product description :</span> <br />
                <textarea {...register("describe")} /><br />
                <span>Product Image Url :</span> <br />
                <input {...register("img")} /><br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddDrone;