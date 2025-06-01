

export default function CompleteProfile({ warning}) {
    return (
        <div className="text-white">
            <h1>TOLONG LENGKAPI DATA INI TERLEBIH DAHULU</h1>
            <pre>{JSON.stringify(warning, null, 2)}</pre>
        </div>
    );
}
