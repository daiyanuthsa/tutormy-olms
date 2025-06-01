export default function Details({ article }) {
    return (
        <div className="p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">{article.name}</h1>
            <div className="text-gray-700">{article.content}</div>
        </div>
    );
}
