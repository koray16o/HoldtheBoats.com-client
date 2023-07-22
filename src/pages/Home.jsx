import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllBoats } from '../api/boats.api';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  Heading,
  Text,
  Divider,
  ButtonGroup
} from '@chakra-ui/react';
import { NavBtnLink } from '../components/NavbarElements';

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
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

  if (isLoggedIn) {
    return (
      <div>
        <Navbar />

        <hr />

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
          <h3>Welcome to Holdtheboats</h3>
          <h5>Here you can find your dream boat!</h5>
          <img
            src="https://image.freepik.com/vecteurs-libre/logo-voilier_74218-100.jpg"
            width={300}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h5>
            <b>Featured Boats of the week</b>
          </h5>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {boats && (
            <Carousel style={{ width: 300, height: 300 }}>
              {boats.slice(0, 3).map(boat => {
                const carouselSlides = Array.isArray(boat.imgURL)
                  ? boat.imgURL
                  : [boat.imgURL];

                return carouselSlides.map((url, index) => (
                  <Carousel.Item key={`${boat._id}-slide-${index}`}>
                    <Card>
                      <Image
                        className="d-block w-100"
                        src={url}
                        alt="Boat"
                        width={200}
                      />
                      <CardBody>
                        <Heading>{boat.title}</Heading>
                        <Text color="blue.600" fontSize="2xl">
                          {boat.price}€
                        </Text>
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
                          </ButtonGroup>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Carousel.Item>
                ));
              })}
            </Carousel>
          )}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};
export default Home;
