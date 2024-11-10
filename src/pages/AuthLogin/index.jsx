import { Login } from "../../components/Login"
import { Navbar } from "../../components/Navabar"

export const AuthLogin = () =>{
    return(
        <>
        <Navbar/>
        <main className = "flex justify-center items-center mt-32">

        <Login/>
        </main>
        </>
    )
}