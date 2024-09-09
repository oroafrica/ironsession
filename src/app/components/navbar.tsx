import Link from "next/link";
import { LogoutForm } from "./logoutForm";
import { getSession } from "../auth/actions";

export const Navbar = async()=> 
{
  const session = await getSession();
  
  return(
    <nav className="navbar min-h-[60px]">
      <div className="navbar-container">
      <Link className="navbar-brand" href="/">Home</Link>
      <Link className="navbar-brand" href="/premium">Premium</Link>
      <Link className="navbar-brand" href="/profile">Profile</Link>
      
      {!session.isLoggedIn && <Link className="navbar-brand" href="/login">Login</Link>}
      {session.isLoggedIn && <LogoutForm />}
      </div>
    </nav>
  );
}