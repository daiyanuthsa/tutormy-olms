import React from "react";

const GradientText = ({
    children,
    fromColor = "primary-3",
    toColor = "primary-1",
    direction = "to-r",
    className = "",
    ...props
}) => {
    return (
        <span
            className={`bg-gradient-${direction} from-${fromColor} to-${toColor} bg-clip-text text-transparent ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};

export default GradientText;
