

export default function Show({ document }) {
    return (
        <div className="text-white">
            <h1>Dokumment {document.name}</h1>
            <pre>{JSON.stringify(document, null, 2)}</pre>
        </div>
    );
}
