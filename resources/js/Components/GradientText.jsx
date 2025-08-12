import React from "react";

const GradientText = ({
    children,
    fromColor = "primary-3",
    toColor = "primary-1",
    direction = "to-r",
    className = "",
    ...props
}) => {
    // Mapping untuk menghindari kelas dinamis
    const gradientClasses = {
        "primary-1-primary-3-to-r":
            "bg-gradient-to-r from-primary-1 to-primary-3",
        "primary-3-primary-1-to-r":
            "bg-gradient-to-r from-primary-3 to-primary-1",
        "primary-2-primary-4-to-r":
            "bg-gradient-to-r from-primary-2 to-primary-4",
        "primary-4-primary-2-to-r":
            "bg-gradient-to-r from-primary-4 to-primary-2",
        "secondary-3-secondary-5-to-r":
            "bg-gradient-to-r from-secondary-3 to-secondary-5",
        // Tambahkan kombinasi lain yang Anda butuhkan
    };

    const gradientKey = `${fromColor}-${toColor}-${direction}`;
    const gradientClass =
        gradientClasses[gradientKey] ||
        `bg-gradient-${direction} from-${fromColor} to-${toColor}`;

    return (
        <span
            className={`${gradientClass} bg-clip-text text-transparent ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};

export default GradientText;
