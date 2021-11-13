import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://safe-meadow-80713.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])
    return { product }
};

export default useProducts;