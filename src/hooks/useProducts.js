import { useEffect, useState } from 'react';

const useProducts = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://air-haven-drone-server-update.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(data)

            })
    }, [])
    return { product }
};

export default useProducts;