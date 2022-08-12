import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://hidden-eyrie-24274.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(data)

            })
    }, [product])
    return { product }
};

export default useProducts;