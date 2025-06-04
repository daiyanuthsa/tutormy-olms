export default function PrimaryButton({
    className = '',
    disabled,
    children,
    variant = 'fill',
    ...props
}) {
    const baseStyles = 'inline-flex items-center text-center justify-center font-bold rounded-full px-6 lg:px-10 py-3 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-3 focus:ring-offset-2';

    const fillStyles = 'bg-gradient-light hover:bg-gradient-dark text-white focus:bg-gradient-dark active:bg-gradient-dark';

    const outlineStyles = 'border-2 border-primary-3 text-primary-3 bg-transparent hover:bg-primary-3 hover:text-white';

    const disabledStyles = disabled ? 'opacity-25 cursor-not-allowed' : '';

    const variantStyles = variant === 'outline' ? outlineStyles : fillStyles;

    return (
        <button
            {...props}
            className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}