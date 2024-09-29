import { useNavigate } from "react-router-dom"
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {checkLogin} from "../../action/login"

function LogOut(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    deleteAllCookies();
    useEffect(()=>{
        dispatch(checkLogin(false))
        navigate("/login");
    },[])
    return(
        <>
        </>
    )
}
export default LogOut