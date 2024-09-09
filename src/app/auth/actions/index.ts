"use server";
import { sessionOptions,SessionData, defaultSession } from "@/app/auth/actions/types";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

let username = "admin";
let isPro = true;
export const getSession = async () => 
{
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
    if(!session.isLoggedIn)
    {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }
    return session;
};

export const login = async (prevState:{error:string|undefined},formData:FormData) => 
{
    const session = await getSession();
    const formUsername = formData.get("username") as string;
    const formPassword = formData.get("password") as string;

    if(formUsername !== username)
        return {error:"username not found"};
    
    session.userId = "1";
    session.username = formUsername;
    session.isPro = isPro;
    session.isLoggedIn = true;

    await session.save();
    redirect("/");
};

export const logout = async() => 
{
    const session = await getSession();
    session.destroy();
    redirect("/");
};

export const changePremium = async() => 
{
    const session = await getSession();
    isPro = !session.isPro;
    session.isPro = isPro;
    session.save();
    revalidatePath("/profile");
};

export const changeUsername = async(formData:FormData) => 
{
    const newUsername = formData.get("username") as string;
    const session = await getSession();
    session.username = newUsername;
    session.save();
    revalidatePath("/profile");
};