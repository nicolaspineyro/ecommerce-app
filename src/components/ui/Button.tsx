import { ReactChild } from "react";

interface ButtonProps {
    type: "button" | "submit" | "reset" | undefined;
    children: ReactChild;
}

const Button = ({ children, type }: ButtonProps) => {


    return (
            <button type={type}>
                {children}
            </button>
    )

}

export default Button;