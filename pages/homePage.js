import React, {useEffect} from 'react'
import HeroSection from '../components/home/HeroSection';
import About from '../components/home/About';
import {signOut, useSession} from "next-auth/react";
import{useRouter} from "next/router";


function homePage() {
  const {status}= useSession();
  const router = useRouter();


useEffect(()=>{
if(status !=="authenticated"){
  router.push("/login");
}
}, [status]);

  return (
    <div>
    {/* Protectected
    {status==="authenticated"?(
      <button onClick = {()=>signOut({callbackUrl:"/login"})}>Logout</button>
    ):(
    <button>Login</button>
    )} */}

        <HeroSection/>
        <About/>
    </div>
  )
}

export default homePage