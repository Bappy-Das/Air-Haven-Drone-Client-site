import { useEffect, useState } from 'react';
import useAuth from './useAuth';



const useAdmin = () => {
    const { user } = useAuth();
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        fetch(`https://air-haven-drone-server-update.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data?.admin))
    }, [user?.email])
    return { admin }
};

export default useAdmin;