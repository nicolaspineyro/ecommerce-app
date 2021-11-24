import Styles from 'src/styles/button.module.scss';
import { ReactChild } from 'react';

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    children: ReactChild;
    onClick?: (e: any) => void;
}

const Button = ({ children, ...otherProps }: ButtonProps) => {
    return (
        <button className={Styles.container} {...otherProps}>
            {children}
        </button>
    )

}

export default Button;