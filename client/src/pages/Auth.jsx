import React from 'react'
import { Container } from 'reactstrap'
import Login from '../components/UI/Login'
import Register from '../components/UI/Register';

const Auth = () => {
  return (
    <section>
      <Container>
      <Login />
        <Register />
      </Container>
    </section>
  );
}

export default Auth