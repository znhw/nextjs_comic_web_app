'use client';
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Logout() {
    const { logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        console.log("Logging out...");
        logout();
        console.log("Logout successful!");
        router.push('/');
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}   

