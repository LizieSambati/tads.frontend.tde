// Tela de login:
//     Não precisa ter conexão com a API
//     Input para email e senha
//     Validar se ambos os campos estão preenchidos e a senha possui ao menos 8 caracteres
//     Liberar o botão de acesso ao sistema apenas se as validações forem satisfeitas


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, FormControl, FormLabel, FormErrorMessage, Button, Container } from '@chakra-ui/react';
import cat from '../assets/cat.png';
import '../App.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailTouched(true);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordTouched(true);
    };

    const isFormValid = () => email !== '' && password.length >= 8;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            navigate('/list');
        }
    };

    return (
        <Container className={"App"}>
            <form onSubmit={handleSubmit}>
                <FormControl isInvalid={email === '' && emailTouched} mt={4}>
                    <img src={cat} className="App-logo" alt="gatinho" />
                    <FormLabel color='white'>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        borderColor="black"
                        focusBorderColor="black"
                    />
                    {email === '' && emailTouched && <FormErrorMessage color='white'>Email é obrigatório.</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={password.length < 8 && passwordTouched} mt={4}>
                    <FormLabel color='white'>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        borderColor="black"
                        focusBorderColor="black"
                    />
                    {password.length < 8 && passwordTouched && <FormErrorMessage color='white'>A senha deve ter pelo menos 8 caracteres.</FormErrorMessage>}
                </FormControl>
                <center>
                    <Button
                        colorScheme='dark'
                        variant='outline'
                        type="submit"
                        isDisabled={!isFormValid()}
                        mt={5}
                        border='2px'
                        borderColor='black'
                    >
                        Log in
                    </Button>
                </center>
            </form>
        </Container>
    );
};

export default Login;