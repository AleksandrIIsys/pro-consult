import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { fetchAuth } from "../http/Api";

const LoginAdmin = ({ setKey }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [correct, setCorrect] = useState(true);
    async function handleSubmit() {
        const formdata = new FormData();
        formdata.append("username", username);
        formdata.append("password", password);
        const result = await fetchAuth(formdata)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return res;
            });
        if (result.result) {
            setKey(result.key);
            setCorrect(true)
        } else {
            setCorrect(false);
        }

        localStorage.setItem("auth-key", result.key);
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    block
                    size="lg"
                    type={'button'}
                    onClick={handleSubmit}
                    variant={correct ? "primary" : "danger"}
                    disabled={false}
                >
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default LoginAdmin;
