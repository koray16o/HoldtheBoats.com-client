import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Textarea
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { contact } from '../api/auth.api';

const Contact = ({ email }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log('Received data FE:', email, userEmail, message);
      const response = await contact(email, userEmail, message);
      console.log('Email sent successfuly', response.data);

      onClose();
    } catch (error) {
      console.log('Error sending email', error);
    }
  };

  const handleEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleMessage = e => {
    setMessage(e.target.value);
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Contact Owner
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Contact the Boat Owner</DrawerHeader>

          <DrawerBody>
            <p>Your Email:</p>
            <Input
              placeholder="your-email@example.com"
              required
              value={userEmail}
              onChange={handleEmail}
            />
            <p>Message:</p>
            <Textarea
              placeholder="Write your message here"
              required
              value={message}
              onChange={handleMessage}
            />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} colorScheme="blue">
              Send
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Contact;
