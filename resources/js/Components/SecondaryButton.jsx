export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center bg-primary-3 hover:bg-primary-4 text-xs font-medium text-white rounded-xl px-10 py-2 transition duration-150 ease-in-out focus:bg-primary-4 focus:outline-none focus:ring-2 focus:ring-primary-3 focus:ring-offset-2 active:bg-primary-4 ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
