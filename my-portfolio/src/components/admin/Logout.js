import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    const { admin, onLogoutAdmin } = useAuth();

    useEffect(() => {
        onLogoutAdmin();
        navigate('/');
    }, [admin])


    return null;
}