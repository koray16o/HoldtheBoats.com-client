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
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../components/Footer';

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
          <h3>Welcome to Hold the Boats!</h3>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            alignContent: 'baseline'
          }}
        >
          <h5>Here you can find your dream boat!</h5>
          <img
            src="https://image.freepik.com/vecteurs-libre/logo-voilier_74218-100.jpg"
            width={300}
          />
        </div>

        <div
          style={{
            backgroundColor: 'lightskyblue',
            display: 'flex',
            flexDirection: 'row',
            gap: '70px',
            alignItems: 'center'
          }}
        >
          <h4>Popular Brands:</h4>

          <Image
            src="/2.JEANNEAU_Logo.png"
            alt="jeanneau-logo"
            boxSize="150px"
          />

          <Image
            src="/BAVARIA-YACHTS_Logo-removebg-preview.png"
            alt="bavaria-logo"
            boxSize="150px"
          />
          <Image src="/beneteau-logo.png" alt="beneteau-logo" boxSize="150px" />
          <Image
            src="/dehler-logo-removebg-preview.png"
            alt="dehler-logo"
            boxSize="150px"
          />
          <Image
            src="/hanse-logo-removebg-preview.png"
            alt="hanse-logo"
            boxSize="150px"
          />
          <Image
            src="/logo-hallberg-rassy.png"
            alt="hallbergrassy-logo"
            boxSize="150px"
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
          }}
        >
          <h5>
            <b>Featured Boats of the week</b>
          </h5>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {boats && (
            <Carousel style={{ width: 300, height: 300 }}>
              {boats.slice(0, 5).map(boat => {
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
        <div
          style={{
            marginTop: '200px',
            marginRight: '300px',
            marginLeft: '300px'
          }}
        >
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What does Holdtheboats offer you?
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: 'lightsalmon' }}>
                Holdtheboats is the perfect site to find the boat you are
                looking for. Here you can find a wide range of new boats and
                used boats for sale (motor boats, sailboats, catamarans,
                cruisers, yachts, dinghys and many more)
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Have you already found the perfect boat for you?
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: 'lightsalmon' }}>
                With Holdtheboats you can get in touch with the boat owners for
                free!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Do you want to sell your boat?
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: 'lightsalmon' }}>
                Advertise with us! It only takes a few minutes and its free.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <Footer />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};
export default Home;
