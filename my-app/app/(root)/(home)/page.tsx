import MeetingTypeList from "@/components/MeetingTypeList";

export default function Home() {
    const now = new Date()
    const time = now.toLocaleTimeString('en-NP', {
        hour: '2-digit',
        minute: '2-digit',
    });
    const date = new Intl.DateTimeFormat('en-NP', {
        dateStyle: 'full'
    }).format(now)

    return (
    <div className="flex size-full flex-col gap-10 text-white">
        <div className="h-[300px] w-full rounded-2xl bg-hero bg-cover">
            <div className="flex h-full flex-col justify-between py-8 px-5">
                <h2 className="font-bold text-2xl">Upcoming Meeting at : 1:00 PM </h2>
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-extrabold">
                        {time}
                    </h1>
                    <p className="text-lg font-medium">
                        {date}
                    </p>
                </div>
            </div>
        </div>
        <MeetingTypeList/>
    </div>
    );
}
