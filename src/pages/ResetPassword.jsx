import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { resetPassword } from '../api/auth.api';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams] = useSearchParams();

  const resetToken = searchParams.get('token');

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await resetPassword(resetToken, password);

      setIsSubmitting(false);
      setSuccessMessage(response.data.message);
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage('Failed to reset password. Please try again later.');
    }
  };

  useEffect(() => {
    if (!resetToken) {
      setErrorMessage('Invalid or expired reset token.');
    }
  }, [resetToken]);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        as="form"
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
        onSubmit={handleSubmit}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter new password
        </Heading>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            type="submit"
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500'
            }}
            isLoading={isSubmitting}
          >
            Submit
          </Button>
          {errorMessage && <Text color="red">{errorMessage}</Text>}
          {successMessage && <Text color="green">{successMessage}</Text>}
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ResetPassword;
