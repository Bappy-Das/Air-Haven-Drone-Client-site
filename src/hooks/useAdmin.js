import { useEffect, useState } from 'react';
import useAuth from './useAuth';



const useAdmin = () => {
    const { user } = useAuth();
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        fetch(`https://hidden-eyrie-24274.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data?.admin))
    }, [user?.email])
    return { admin }
};

export default useAdmin;