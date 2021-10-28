import classNames from 'classnames';
import Styles from 'src/styles/form-input.module.scss';

interface FormInputProps {
    type: string;
    label: string;
    value: string;
    name: string;
    handleChange: (e: { target: { value: any; name: any; }; }) => void;
}

const formInput = ({ type, label, value, name, handleChange }: FormInputProps) => {
    const otherProps = {
        type, value, name
    }

    return (
        <div className={Styles['group']}>
            <input
                {...otherProps}
                onChange={handleChange}
                className={Styles['form-input']}
            />
            {label &&
                <label
                    className={classNames(Styles[otherProps.value.length > 0 ? 'shrink' : ''], Styles['form-input-label'])}
                >
                    {label}
                </label>
            }
        </div >
    )
}

export default formInput;