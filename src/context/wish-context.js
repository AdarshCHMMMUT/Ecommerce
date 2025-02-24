import {createContext, useContext, useReducer} from "react";
import { wishReducer } from "../reducers/wishreducer";

const wishcontext = createContext();
const WishProvider = ({children})=>{

    const initState = 
    {
        wish:[]
    }

    const [{wish}, wishDispatch] = useReducer(wishReducer, initState);

    return (
        <wishcontext.Provider value = {{wish, wishDispatch}}>
            {children}
        </wishcontext.Provider>
    ) 
}
const useWish = () => useContext(wishcontext);

export {WishProvider, useWish}