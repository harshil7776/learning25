import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ Children, roles }) => {

    console.log("Roles..", roles)

    const [token, settoken] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [role, setrole] = useState(null)

    useEffect(() => {

        console.log(localStorage.getItem("token"))
        settoken(localStorage.getItem("token"))
        setrole(localStorage.getItem("role"))
        setisLoading(false)
    }, [])

    if (isLoading) {
        return <div>
            Loading...
        </div>
    }

    if (!token) {
        return <Navigate to="/"></Navigate>;
    }

    if (!roles.includes(role)) {
        return <Navigate to="/"></Navigate>
    }

    return Children;
}
export default ProtectedRoutes;