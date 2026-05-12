import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://b13-a8-tiles-gallery-rq3g.vercel.app"
})
export const { signIn, signUp, signOut, useSession } = createAuthClient()