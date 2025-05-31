

export default function Checkout({ checkout, pricing }) {
    return (
        <div>
            <h1>Data Prepare checkout</h1>
            <pre>{JSON.stringify(checkout, null, 2)}</pre>
            <pre>{JSON.stringify(pricing, null, 2)}</pre>
        </div>
    );
}
