import { SessionOptions } from "iron-session";

export type SessionData = {
    userId?: string;
    username?: string;
    img?: string;
    isPro?: boolean;
    isLoggedIn: boolean;
}

export const defaultSession:SessionData = 
{
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = 
{
    password: process.env.SESSION_SECRET!,
    cookieName: "lama-session",
    cookieOptions: {
        maxAge: 2 * 60,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    },ttl: 30 * 24 * 60 * 60
}