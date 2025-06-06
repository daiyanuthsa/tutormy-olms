

export default function Recording({ webinarDetail }) {
    return (
        <div className="text-white">
            <h1>Detail webinar</h1>
            <pre>{JSON.stringify(webinarDetail, null, 2)}</pre>
        </div>
    );
}
