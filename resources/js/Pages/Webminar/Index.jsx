

export default function Index({webminars}) {
    return (
        <div className="text-white">
            <h1>Daftar Artikel</h1>
            <pre>{JSON.stringify(webminars, null, 2)}</pre>
        </div>
    );
}
