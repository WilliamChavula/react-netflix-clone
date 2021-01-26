import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid =
        firstName === '' || password === '' || emailAddress === '';

    const validateInput = values => {
        let errors = {};
        const Emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const PasswordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}$/; // (?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$

        if (!values.email) {
            errors.email = 'Email cannot be blank';
        } else if (!Emailregex.test(values.email)) {
            errors.email = 'Invalid email format';
        }
        if (!values.password) {
            errors.password = 'Password cannot be blank';
        } else if (!PasswordRegex.test(values.password)) {
            errors.password =
                'Password must contain at least one uppercase letter. \n At least one lowercase letter. \n Atleast one special character. \n At least one digit. \n Minimum length of 6 characters long.';
        }
        if (!values.firstName) {
            errors.firstName = 'Full name cannot be blank';
        }
        return errors;
    };

    const handleSignUp = e => {
        e.preventDefault();
        // validateInput()

        // do firebase stuff
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then(result =>
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    })
            )
            .catch(error => {
                setFirstName('');
                setPassword('');
                setEmailAddress('');
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="post">
                        <Form.Input
                            placeholder="First name"
                            value={firstName}
                            onChange={({ target }) =>
                                setFirstName(target.value)
                            }
                        />
                        <Form.Input
                            value={emailAddress}
                            placeholder="Email address"
                            onChange={({ target }) =>
                                setEmailAddress(target.value)
                            }
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit type="submit" disabled={isInvalid}>
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already a user?{' '}
                            <Form.Link to="/signin">Sign in now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Goole reCAPTCHA to ensure
                            you're not a bot. Learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}
