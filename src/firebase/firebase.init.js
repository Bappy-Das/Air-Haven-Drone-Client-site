import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const firebaseAuthentication = () => {
    return initializeApp(firebaseConfig);
}
export default firebaseAuthentication;