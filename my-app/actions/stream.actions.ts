"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";
import { headers, Header } from 'next/headers';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API;
const apiSecret = process.env.STREAM_SECRET_KEY;

export default async function tokenProvider() {
    const user = await currentUser();

    if (!user) throw new Error("User is not defined");
    if (!apiKey) throw new Error("apiKey is not defined");
    if (!apiSecret) throw new Error("apiSecret is not defined");

    const headersList = headers();
    const forwardedHost = headersList.get('x-forwarded-host');
    const origin = headersList.get('origin');

    console.log('Forwarded Host:', forwardedHost);
    console.log('Origin:', origin);

    // Handle headers mismatch
    if (forwardedHost && origin && forwardedHost !== origin) {
        if (origin === 'http://localhost:3000') {
            headersList.set('origin', forwardedHost);
            headersList.set('x-forwarded-host', forwardedHost); // ensure forwarded host is set
        } else {
            throw new Error('Invalid Server Actions request');
        }
    }

    const streamClient = new StreamClient(apiKey, apiSecret);
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(Date.now() / 1000 - 60);

    const token = streamClient.createToken(user.id, exp);
    console.log(token);
    return token;
}
