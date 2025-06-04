export default function Upcoming({ webminarDetail }) {
    return (
        <div className="text-white">
            <h1>Daftar Webminar</h1>
            <pre>{JSON.stringify(webminarDetail, null, 2)}</pre>
        </div>
    );
}
