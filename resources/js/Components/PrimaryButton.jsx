
export default function PrimaryButton({
    className = "",
    disabled,
    children,
    variant = "fill",
    ...props
}) {
    const baseStyles =
        "inline-flex items-center text-sm lg:text-base text-center justify-center font-bold px-6 lg:px-10 py-3 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary-3 focus:ring-offset-2 transform hover:scale-105 active:scale-95 hover:-translate-y-0.5 active:translate-y-0";

    const variants = {
        fill: "bg-gradient-light hover:bg-gradient-dark text-white focus:bg-gradient-dark active:bg-gradient-dark",
        outline:
            "border-2 border-primary-3 text-primary-3 bg-transparent hover:bg-primary-4 hover:text-white",
        ghost: "bg-transparent text-primary-3 hover:bg-primary-1/10",
        danger: "bg-error-4 text-white hover:bg-red-700 focus:ring-red-300",
        secondary:
            "bg-primary-3 text-white hover:bg-primary-4 focus:ring-primary-4",
        tertiary:
            "bg-gradient-to-r from-[#C392F0] to-[#59307E] hover:bg-gradient-dark",
    };

    const disabledStyles = disabled ? "opacity-25 cursor-not-allowed" : "";

    const variantStyles = variants[variant] || variants.fill;

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
