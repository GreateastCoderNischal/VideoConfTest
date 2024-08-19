"use client"
import { FormEvent, useState } from 'react';

const isValidAmazonUrl = (url: string) => {
    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname;
        return hostname.includes('.com') || hostname.includes('.');
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default function Searchbar() {
    const [searchPrompt, setSearchPrompt] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isValidLink = isValidAmazonUrl(searchPrompt);
        console.log(searchPrompt)
        if (isValidLink) {
            console.log('inside');

            try {
                const response = await fetch(`/api?url=${encodeURIComponent(searchPrompt)}`, {
                    method: 'GET',
                });
                console.log(response)
            } catch (error) {
                console.error("Error occurred:", error);
            }
        }
    };

    return (
        <form
            className="flex gap-2 items-center justify-center mt-4"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Search from here"
                className="flex-1 min-w-[200px] w-full p-2 border border-gray-300 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none"
                onChange={(event) => {
                    if (!event.target.value.startsWith("https://")) {
                        setSearchPrompt("https://" + event.target.value);
                    } else {
                        setSearchPrompt(event.target.value);
                    }
                }}
                value={searchPrompt}
            />
            <button
                className="p-2 rounded-2xl text-white bg-slate-950 font-bold text-xl"
                disabled={searchPrompt === ""}
            >
                Search
            </button>
        </form>
    );
}
