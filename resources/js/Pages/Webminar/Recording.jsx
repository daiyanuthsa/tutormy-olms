

export default function Recording({ webminarDetail }) {
    return (
        <div className="text-white">
            <h1>Detail Webminar</h1>
            <pre>{JSON.stringify(webminarDetail, null, 2)}</pre>
        </div>
    );
}
