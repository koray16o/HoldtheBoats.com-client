import { useState, useEffect } from 'react';
import { getAllBoats } from '../api/boats.api';
import Navbar from '../components/Navbar';
import { NavBtnLink } from '../components/NavbarElements';
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup
} from '@chakra-ui/react';

const Boats = () => {
  const [boats, setBoats] = useState([]);

  const fetchBoats = async () => {
    try {
      const response = await getAllBoats();
      setBoats(response.data);
    } catch (error) {
      console.log('Error fetching boats', error);
    }
  };

  useEffect(() => {
    fetchBoats();
  }, []);

  return (
    <div>
      <Navbar />

      <h1
        style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <b>Check out the newest boats!</b>
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          alignContent: 'flex-start'
        }}
      >
        {boats &&
          boats.map(boat => {
            return (
              <div key={boat.card}>
                <Card maxW="sm">
                  <CardBody>
                    {Array.isArray(boat.imgURL) ? (
                      boat.imgURL.map(url => (
                        <img src={url} key={url} alt="Boat" width={250} />
                      ))
                    ) : (
                      <img src={boat.imgURL} alt="Boat" width={250} />
                    )}

                    <Stack mt="6" spacing="3">
                      <Heading size="md">{boat.title}</Heading>
                      <Text>{boat.description}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        {boat.price}€
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <NavBtnLink
                        to={`/boats/${boat._id}`}
                        style={{
                          color: 'white',
                          backgroundColor: 'blue'
                        }}
                      >
                        See more details
                      </NavBtnLink>
                      <Button variant="ghost" colorScheme="blue">
                        Add to Favourites
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Boats;
