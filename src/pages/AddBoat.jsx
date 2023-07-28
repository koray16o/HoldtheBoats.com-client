import Navbar from '../components/Navbar';
import { useState } from 'react';
import { addBoat, upload } from '../api/boats.api';
import { toast } from 'react-toastify';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';

const AddBoat = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [condition, setCondition] = useState('');
  const [length, setLength] = useState('');
  const [beam, setBeam] = useState('');
  const [draught, setDraught] = useState('');
  const [displacement, setDisplacement] = useState('');
  const [material, setMaterial] = useState('');
  const [steering, setSteering] = useState('');
  const [keel, setKeel] = useState('');
  const [ballast, setBallast] = useState('');
  const [headroom, setHeadroom] = useState('');
  const [cabins, setCabins] = useState('');
  const [berths, setBerths] = useState('');
  const [watertank, setWatertank] = useState('');
  const [propulsion, setPropulsion] = useState('');
  const [engine, setEngine] = useState('');
  const [fuelType, setFueltype] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleTitle = e => {
    setTitle(e.target.value);
  };
  const handleImage = e => {
    setImage(e.target.files);
  };
  const handleType = e => {
    setType(e.target.value);
  };
  const handleYear = e => {
    setYear(e.target.value);
  };
  const handleCondition = e => {
    setCondition(e.target.value);
  };
  const handleLength = e => {
    setLength(e.target.value);
  };
  const handleBeam = e => {
    setBeam(e.target.value);
  };
  const handleDraught = e => {
    setDraught(e.target.value);
  };
  const handleDisplacement = e => {
    setDisplacement(e.target.value);
  };
  const handleMaterial = e => {
    setMaterial(e.target.value);
  };
  const handleSteering = e => {
    setSteering(e.target.value);
  };
  const handleKeel = e => {
    setKeel(e.target.value);
  };
  const handleBallast = e => {
    setBallast(e.target.value);
  };
  const handleHeadroom = e => {
    setHeadroom(e.target.value);
  };
  const handleCabins = e => {
    setCabins(e.target.value);
  };
  const handleBerths = e => {
    setBerths(e.target.value);
  };
  const handleWatertank = e => {
    setWatertank(e.target.value);
  };
  const handlePropulsion = e => {
    setPropulsion(e.target.value);
  };
  const handleEngine = e => {
    setEngine(e.target.value);
  };
  const handleFueltype = e => {
    setFueltype(e.target.value);
  };
  const handleDescription = e => {
    setDescription(e.target.value);
  };
  const handleCountry = e => {
    setCountry(e.target.value);
  };
  const handlePrice = e => {
    setPrice(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Submit button working');
    try {
      const newBoat = {
        title,
        type,
        year,
        condition,
        length,
        beam,
        draught,
        displacement,
        material,
        steering,
        keel,
        ballast,
        headroom,
        cabins,
        berths,
        watertank,
        propulsion,
        engine,
        fuelType,
        description,
        country,
        price
      };
      if (!image || image.length === 0) {
        toast.error('Please select at least one file');
        return;
      }

      const uploadData = new FormData();
      for (let i = 0; i < image.length; i++) {
        uploadData.append('files', image[i]);
      }
      const response = await upload(uploadData);
      console.log('Response', response.data);
      newBoat.imgURL = response.data.fileUrl;
      console.log('Response fileUrl', response.data.fileUrl);

      await addBoat(newBoat);
      toast.success('Boat created!');
    } catch (error) {
      toast.error('Something went wrong, try again later');
      console.log('Error adding the Boat', error);
    }

    setTitle('');
    setImage();
    setType('');
    setYear('');
    setCondition('');
    setLength('');
    setBeam('');
    setDraught('');
    setDisplacement('');
    setMaterial('');
    setSteering('');
    setKeel('');
    setBallast('');
    setHeadroom('');
    setCabins('');
    setBerths('');
    setWatertank('');
    setPropulsion('');
    setEngine('');
    setFueltype('');
    setDescription('');
    setCountry('');
    setPrice('');
    navigate('/boats');
  };

  if (isLoggedIn) {
    return (
      <div>
        <Navbar />

        <div
          style={{
            backgroundImage: `url('https://i.pinimg.com/originals/f2/ac/81/f2ac81f39118c14d68c15fbbd253a40f.jpg')`
          }}
        >
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              color: 'white'
            }}
          >
            <b>Add New Boat</b>
          </h1>
          <hr style={{ marginTop: '15px', marginBottom: '15px' }} />

          <form
            onSubmit={handleSubmit}
            style={{ marginLeft: '30px', marginRight: '750px' }}
          >
            <Form.Group className="title">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitle}
              />
            </Form.Group>

            <label>Type:</label>
            <Form.Select aria-label="Select" name="type" onChange={handleType}>
              <option value="none"></option>
              <option value="Sail Boat">Sailboats</option>
              <option value="Power Boat">Powerboats</option>
              <option value="Classic Boat">Classicboats</option>
              <option value="Dinghy">Dinghy</option>
            </Form.Select>

            <Form.Group className="builtIn">
              <Form.Label>Built in:</Form.Label>
              <Form.Control
                type="number"
                name="builtIn"
                value={year}
                onChange={handleYear}
              />
            </Form.Group>

            <Form.Group className="condition">
              <Form.Label>Condition:</Form.Label>
              <Form.Control
                type="text"
                name="condition"
                placeholder="Condition"
                value={condition}
                onChange={handleCondition}
              />
            </Form.Group>

            <Form.Group className="length">
              <Form.Label>Length:</Form.Label>
              <Form.Control
                type="text"
                name="length"
                placeholder="Length (meters)"
                value={length}
                onChange={handleLength}
              />
            </Form.Group>

            <Form.Group className="beam">
              <Form.Label>Beam:</Form.Label>
              <Form.Control
                type="text"
                name="beam"
                placeholder="Beam (meters)"
                value={beam}
                onChange={handleBeam}
              />
            </Form.Group>

            <Form.Group className="draught">
              <Form.Label>Draught:</Form.Label>
              <Form.Control
                type="text"
                name="draught"
                placeholder="Draught (meters)"
                value={draught}
                onChange={handleDraught}
              />
            </Form.Group>

            <Form.Group className="displacement">
              <Form.Label>Displacement:</Form.Label>
              <Form.Control
                type="text"
                name="displacement"
                placeholder="Displacement (Kg)"
                value={displacement}
                onChange={handleDisplacement}
              />
            </Form.Group>

            <Form.Group className="ballast">
              <Form.Label>Ballast:</Form.Label>
              <Form.Control
                type="text"
                name="ballast"
                placeholder="Ballast (Kg)"
                value={ballast}
                onChange={handleBallast}
              />
            </Form.Group>

            <Form.Group className="material">
              <Form.Label>Material:</Form.Label>
              <Form.Control
                type="text"
                name="material"
                placeholder="Material"
                value={material}
                onChange={handleMaterial}
              />
            </Form.Group>

            <Form.Group className="steering">
              <Form.Label>Steering:</Form.Label>
              <Form.Control
                type="text"
                name="steering"
                placeholder="Steering"
                value={steering}
                onChange={handleSteering}
              />
            </Form.Group>

            <Form.Group className="keel">
              <Form.Label>Keel:</Form.Label>
              <Form.Control
                type="text"
                name="keel"
                placeholder="Keel"
                value={keel}
                onChange={handleKeel}
              />
            </Form.Group>

            <Form.Group className="headroom">
              <Form.Label>Headroom:</Form.Label>
              <Form.Control
                type="text"
                name="headroom"
                placeholder="Headroom (meters)"
                value={headroom}
                onChange={handleHeadroom}
              />
            </Form.Group>

            <Form.Group className="cabins">
              <Form.Label>Cabins:</Form.Label>
              <Form.Control
                type="text"
                name="cabins"
                placeholder="Nº of Cabins"
                value={cabins}
                onChange={handleCabins}
              />
            </Form.Group>

            <Form.Group className="berths">
              <Form.Label>Berths:</Form.Label>
              <Form.Control
                type="text"
                name="berths"
                placeholder="Nº of Berths"
                value={berths}
                onChange={handleBerths}
              />
            </Form.Group>

            <Form.Group className="watertank">
              <Form.Label>Water Tank:</Form.Label>
              <Form.Control
                type="text"
                name="watertank"
                placeholder="Watertank (Liters)"
                value={watertank}
                onChange={handleWatertank}
              />
            </Form.Group>

            <Form.Group className="propulsion">
              <Form.Label>Propulsion:</Form.Label>
              <Form.Control
                type="text"
                name="propulsion"
                placeholder="E.g. Intraboard"
                value={propulsion}
                onChange={handlePropulsion}
              />
            </Form.Group>

            <Form.Group className="engine">
              <Form.Label>Engine:</Form.Label>
              <Form.Control
                type="text"
                name="engine"
                placeholder="Engine Model"
                value={engine}
                onChange={handleEngine}
              />
            </Form.Group>

            <Form.Group className="fuelType">
              <Form.Label>Fuel Type:</Form.Label>
              <Form.Control
                type="text"
                name="fuelType"
                placeholder="E.g. Diesel"
                value={fuelType}
                onChange={handleFueltype}
              />
            </Form.Group>

            <Form.Group className="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="description"
                value={description}
                onChange={handleDescription}
              />
            </Form.Group>

            <Form.Group className="country">
              <Form.Label>Country:</Form.Label>
              <Form.Control
                type="text"
                name="country"
                placeholder="Country"
                value={country}
                onChange={handleCountry}
              />
            </Form.Group>

            <Form.Group className="price">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Price (Euros)"
                value={price}
                onChange={handlePrice}
              />
            </Form.Group>

            <Form.Group className="mb-3" htmlFor="files" label="Upload">
              <Form.Label>Upload files:</Form.Label>
              <Form.Control
                type="file"
                id="files"
                name="files"
                onChange={handleImage}
                multiple
              />
            </Form.Group>

            <Button
              as="input"
              type="submit"
              value="Submit"
              style={{ marginBottom: '50px' }}
            />
          </form>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default AddBoat;
