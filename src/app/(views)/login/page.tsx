import React from "react";
import { LoginForm } from "@/app/components/loginForm";
export default function LoginPage()
{
  return(
    <div className="flex items-center justify-center h-screen w-full"> 
      <div>
        <h1 className="text-center text-3xl mb-0">Login Form</h1>
        <LoginForm />
      </div>
    </div>

  );
};