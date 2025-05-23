

export default function SearchTips({ articles, keyword }) {
    return (
        <div>
            <h1>Daftar Artikel</h1>
            <h2>Hasil pencarian untuk: {keyword}</h2>
            <pre>{JSON.stringify(articles, null, 2)}</pre>
        </div>
    );
}
