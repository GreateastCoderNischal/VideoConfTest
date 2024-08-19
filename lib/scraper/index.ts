'use server'
import axios from "axios";

export async function ScrapAmazonPrdouct(url: string) {

    if (!url) return;

    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const Password = String(process.env.BRIGHT_DATA_PASSWORD);
    const PORT = 22225;
    const sessionId = (100000 * Math.random()) | 0;

    const options = {
        auth: {
            username: `${username}-session-${sessionId}`,
            password:Password,
        },
        host: "brd.superproxy.io",
        PORT,
        rejectUnauthorized: false
    }

    try {
        const response = await axios.get(url, options);
        console.log(response.data)
        return response.data

    } catch (error: any) {
        console.log("error")
        throw new Error("Error has occured : ", error);
    }

}