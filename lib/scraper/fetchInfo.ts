'use server'

export default async function fetchInfo(url: string): Promise<void> {
    let result = await fetch(url);
    console.log(result)
}