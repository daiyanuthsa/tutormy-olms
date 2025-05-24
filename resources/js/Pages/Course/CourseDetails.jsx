

export default function CourseDetails({course, benefits}) {
    return (
        <div>
            <h1>Daftar kelas</h1>
            <pre>{JSON.stringify(course, null, 2)}</pre>
            <pre>{JSON.stringify(benefits, null, 2)}</pre>
        </div>
    );
}
