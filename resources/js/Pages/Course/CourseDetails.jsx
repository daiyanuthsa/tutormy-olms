export default function CourseDetails({ course }) {
    return (
        <div className="text-white">
            <h1>Daftar kelas</h1>
            <pre>{JSON.stringify(course, null, 2)}</pre>
        </div>
    );
}
