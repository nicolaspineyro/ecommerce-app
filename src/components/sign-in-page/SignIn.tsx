import { FormEvent, useState } from 'react';
import FormInput from './FormInput';
import Styles from 'src/styles/sign-in.module.scss';
import { Button } from 'src/components/ui';

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
        <div className={Styles['container']}>
            <h1>Already have an account?</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={e => submitForm(e)}>
                <FormInput
                    type='text'
                    label='email'
                    value={form['email']}
                    name='email'
                    handleChange={handleChange}
                />
                <FormInput
                    type='password'
                    label='password'
                    value={form['password']}
                    name='password'
                    handleChange={handleChange}
                />
                <Button type='submit'>
                    Log In
                </Button>
            </form>
        </div>
    )
}

export default SignIn;