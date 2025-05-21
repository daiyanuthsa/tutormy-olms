

export default function Index({articles}) {
    return (
        <div>
            <h1>Daftar Artikel</h1>
            <pre>{JSON.stringify(articles, null, 2)}</pre>
        </div>
    );
}
