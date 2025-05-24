

export default function Course({courses}) {
    return (
        <div>
            <h1>Daftar kelas</h1>
            <pre>{JSON.stringify(courses, null, 2)}</pre>
        </div>
    );
}
