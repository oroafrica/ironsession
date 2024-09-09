import { getSession } from "@/app/auth/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Premium ()
{
  const session = await getSession();

    if(!session.isLoggedIn)
    {
      redirect("/");
    }

    if(!session.isPro)
    {
        return(
          <div className="pt-20 bg-slate-400 w-full ">
            <h1 className="text-black ">Only premium members can see the content!</h1>
            <Link className="text-black" href="/profile">Go to the profile page to upgrade to premium</Link>
          </div>
        )
    }

  return(
    <div className="pt-20"> 
      <h1 className="text-black">Welcome to the Premium Page</h1> 
    </div>

  );
};
