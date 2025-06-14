import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const Authcontext = createContext();
// const auth = getAuth()

const auth = getAuth(app);

const  Authprovider = ({children}) => {

    const [user,setuser] = useState(null);
    const [ loading,setloading] = useState(true);


    const createuser = (email,password)=>
    {
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
   

    const signin = (email,password) =>
    {
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }



    useEffect(() =>
    {
        const unsubscribe = onAuthStateChanged(auth,currentuser =>
        {
             setuser(currentuser)
            console.log('currentuser',currentuser);
            setloading(false)
        }
        )

        return () =>
        {
            return  unsubscribe();
        }
    }, [])

    const authinfo =
    {
        user,
        loading,
        createuser,
        signin

    }
    return (
         <Authcontext.Provider value={authinfo}>
            {children}
         </Authcontext.Provider>
    );
};

export default  Authprovider;