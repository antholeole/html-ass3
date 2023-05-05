import React from 'react';
import { Alert, Button, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import { Pages } from '../contexts/Page';
import { User } from '../contexts/User';

enum SubmissionType {
    Login = 1,
    Register
}

export const LoginModal = () => {
    const pages = Pages.useContainer();
    const user = User.useContainer();


    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [formError, setFormError] = React.useState<String | null>(null);

    const handleSubmit = async (e: React.FormEvent, submissionType: SubmissionType) => {
        e.preventDefault();

        let urlPath;
        switch (submissionType) {
            case SubmissionType.Login:
                urlPath = "login";
                break;
            case SubmissionType.Register:
                urlPath = "register";
                break;
        }

        const res = await fetch(`/users/${urlPath}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        if (!res.ok) {
            setFormError(res.statusText);
            return;
        }

        setFormError(null);

        pages.toggleLoginModalTo(false);
        const key = await res.text();
        user.loginUser(key);
    };

    return (
        <Modal show={pages.loginModalIsShown} onHide={() => pages.toggleLoginModalTo(false)}>
            <ModalHeader>
                <ModalTitle>Login / Register</ModalTitle>
            </ModalHeader>
            <Form>
                <ModalBody>
                    <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    {formError && <Alert className='mt-3' variant="danger">
                        {formError}
                    </Alert>}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => pages.toggleLoginModalTo(false)} variant="danger">Cancel</Button>
                    <Button variant="primary" onClick={(e) => handleSubmit(e, SubmissionType.Login)}>
                        Login
                    </Button>
                    <Button variant="primary" onClick={(e) => handleSubmit(e, SubmissionType.Register)}>Register</Button>
                </ModalFooter>
            </Form>

        </Modal >
    );
};
