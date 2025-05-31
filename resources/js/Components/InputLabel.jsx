export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block font-semibold ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
