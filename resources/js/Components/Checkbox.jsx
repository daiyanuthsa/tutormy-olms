export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded bg-transparent border-2 text-primary-2 shadow-sm focus:ring-primary-2 w-5 h-5' +
                className
            }
        />
    );
}
