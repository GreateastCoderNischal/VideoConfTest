'use server'

import { ScrapAmazonPrdouct } from "../scraper";

export async function scrapAndStoreProduct(prdouctUrl: string) {
    console.log("used")
    if (!prdouctUrl) return;

    try {
        console.log(prdouctUrl)
        const response = await ScrapAmazonPrdouct(prdouctUrl);
        console.log(response)

    } catch (error: any) {
        console.log("error")
        throw new Error("Error occured")
    }
}