import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, SHOP_ROUTE, SIGNUP_ROUTE} from "../utils/consts";
import {login, signup} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await signup(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            console.log(e)
            alert(e.message)
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Enter your email..."
                        type="email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Enter your password..."
                        type="password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                </Form>
                <Row className="d-flex justify-content-between mt-3 px-2 px-lg-2">
                    <Button onClick={click} variant={'outline-success'}>
                        {isLogin ? "Login" : "Signup"}
                    </Button>
                    {isLogin ?
                        <div>
                        Don't have an account? <NavLink to={SIGNUP_ROUTE}>Sign up</NavLink>
                        </div>
                        :
                        <div>
                            Already have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                        </div>
                    }
                </Row>
            </Card>
        </Container>
    );
});

export default Auth;