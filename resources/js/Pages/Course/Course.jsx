

export default function Course({courses}) {
    return (
        <div className="text-white">
            <h1>Daftar kelas</h1>
            <pre>{JSON.stringify(courses, null, 2)}</pre>
        </div>
    );
}
