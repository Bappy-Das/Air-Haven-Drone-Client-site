import { useEffect, useState } from 'react';

const useProducts = () => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://air-haven-drone-server-update.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setIsLoading(false)
                console.log(data)

            })
    }, [])
    return { product, isLoading }
};

export default useProducts;