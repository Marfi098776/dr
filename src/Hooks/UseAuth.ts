import { AuthContext } from "@/Providers/AuthProviders";
import { useContext } from "react";

export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}