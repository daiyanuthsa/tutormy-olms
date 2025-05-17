export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center bg-gradient-light hover:bg-gradient-dark font-extrabold text-white rounded-full px-10 py-2 transition duration-150 ease-in-out focus:bg-gradient-dark focus:outline-none focus:ring-2 focus:ring-primary-3 focus:ring-offset-2 active:bg-gradient-dark ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
