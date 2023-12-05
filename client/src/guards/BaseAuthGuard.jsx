import { useContext } from "react"
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/authContext"

export default function AuthGuard(props) {
    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            {props.children}
        </>
    )
}