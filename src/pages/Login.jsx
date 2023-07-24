import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth.api';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading
} from '@chakra-ui/react';
import { Navigate, Link } from 'react-router-dom';

const Login = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const user = { email, password };

      console.log(user);
      const response = await toast.promise(login(user), {
        pending: 'Logging in, please wait',
        success: 'Welcome!',
        error: 'Something went wrong, please try again'
      });

      storeToken(response.data.authToken);

      authenticateUser();

      navigate('/');
    } catch (error) {
      console.log('Error logging in', error);
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  if (isLoggedIn) return <Navigate to={'/'} />;
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>

          <Box rounded={'lg'} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Link to="/forgot-password" style={{ color: 'blue' }}>
                    Forgot password?
                  </Link>
                  <Link to="/signup" style={{ color: 'blue' }}>
                    Don&apos;t have an account?
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
          {errorMessage && (
            <p className="error-message" style={{ color: 'red' }}>
              {errorMessage}
            </p>
          )}
        </Stack>
      </form>
    </Flex>
  );
};

export default Login;
