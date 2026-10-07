"use client";
import Image from "next/image"; 
import TopNav from "../../components/navigation/TopNav";
import { useAuth } from "../../context/AuthContext";
import Logout from "../../components/auth/Logout";

export default function About() {

  const { user } = useAuth();

  return (
   <>
    <TopNav/>
    this is account page for {user?.username || 'Guest' }
    <Logout/>
   </>
  );
}