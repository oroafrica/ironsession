import { changePremium, changeUsername, getSession } from "@/app/auth/actions";
import { redirect } from "next/navigation";

export default async function Profile() { 
  const session = await getSession();
  if(!session.isLoggedIn) redirect("/");
  return(
    <div className="pt-20"> 
      <h1>welcome, to the Profile page </h1>
      <p>Welcome, <b>{session.username}</b></p>
      <span>You are a <b>{session.isPro ? "Premium" : "Free"}</b> user</span>
      <form action={changePremium}>
          <button>{session.isPro ? "Cancel" : "Buy"}</button>
      </form>
      <form action={changeUsername} className="flex flex-col w-[200px] text-gray-800 navbar-brand">
        <input type="text " className="border-2 border-red-900" name="username" placeholder={session.username} />
          <button className="bg-slate-800 text-white font-normal">Update</button>
      </form>
    </div>

  );
};
