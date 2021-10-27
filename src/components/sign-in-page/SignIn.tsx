import { FormEvent, useState } from 'react';
import FormInput from './FormInput';

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e, 'Submit!')
    }

    const handleChange = (e: { target: { value: any; name: any; }; }) => {
        const { value, name } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div>
            <h1>Already have an account?</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={e => submitForm(e)}>
                <FormInput
                    type='text'
                    id='email'
                    value={form['email']}
                    name='email'
                    handleChange={handleChange}
                />
                <FormInput
                    type='password'
                    id='password'
                    value={form['password']}
                    name='password'
                    handleChange={handleChange}
                />
                <input type='submit' />
            </form>
        </div>
    )
}

export default SignIn;