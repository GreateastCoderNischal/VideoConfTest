import { Scraper } from "@/lib/scraper/scraper";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const url = searchParams.get('url');
    if (url) {
        try {
            const response =await Scraper(url)

            return NextResponse.json({ 'response': response })
        } catch (error) {
            console.log(error)
        }
    }
    return NextResponse.json({ "hello": "I am Nischal" })
}