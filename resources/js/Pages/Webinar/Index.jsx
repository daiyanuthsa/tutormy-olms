

export default function Index({webinars}) {
    return (
        <div className="text-white">
            <h1>Daftar webinar</h1>
            <pre>{JSON.stringify(webinars, null, 2)}</pre>
        </div>
    );
}
