interface FormInputProps {
    type: string;
    id: string;
    value: string;
    name: string;
    handleChange: (e: { target: { value: any; name: any; }; }) => void;
}

const formInput = ({ type, id, value, name, handleChange }: FormInputProps) => {
    const otherProps = {
        type, id, value, name
    }

    return (
        <input
            {...otherProps}
            onChange={handleChange}
        />
    )
}

export default formInput;