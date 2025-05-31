

export default function Index({articles}) {
    return (
        <div className="text-white">
            <h1>Daftar Artikel</h1>
            <pre>{JSON.stringify(articles, null, 2)}</pre>
        </div>
    );
}
