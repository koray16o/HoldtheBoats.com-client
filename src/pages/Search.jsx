import { useEffect, useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import { search } from '../api/boats.api';
import { useLocation, Navigate } from 'react-router-dom';
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
import { AuthContext } from '../context/AuthContext';
import Footer from '../components/Footer';

const Search = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [boats, setBoats] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    setBoats(state);
  }, [state]);

  const handleSearch = async () => {
    const filteredBoats = await search();
    setSearchResults(filteredBoats);
  };

  if (isLoggedIn) {
    return (
      <div>
        <Navbar search={handleSearch} />

        <h3>Your search results:</h3>

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
          {boats.length &&
            boats.map(boat => (
              <div key={boat._id}>
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
                      <Text>
                        {boat.description.length > 50
                          ? `${boat.description.slice(0, 250)}...`
                          : boat.description}
                      </Text>
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
            ))}
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default Search;
