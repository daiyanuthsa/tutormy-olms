export default function Upcoming({ webinarDetail }) {
    return (
        <div className="text-white">
            <h1>Daftar webinar</h1>
            <pre>{JSON.stringify(webinarDetail, null, 2)}</pre>
        </div>
    );
}
