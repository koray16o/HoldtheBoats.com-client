import Navbar from '../components/Navbar';
import { useState } from 'react';
import { addBoat, upload } from '../api/boats.api';
import { toast } from 'react-toastify';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

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

        <div>
          <h1
            style={{
              marginTop: '30px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <b>Add New Boat</b>
          </h1>
          <hr style={{ marginTop: '15px', marginBottom: '15px' }} />

          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitle}
            />

            <label>Type:</label>
            <select name="type" onChange={handleType}>
              <option value="none"></option>
              <option value="Sail Boat">Sailboats</option>
              <option value="Power Boat">Powerboats</option>
              <option value="Classic Boat">Classicboats</option>
              <option value="Dinghy">Dinghy</option>
            </select>

            <label>Built in:</label>
            <input
              type="number"
              name="builtIn"
              value={year}
              onChange={handleYear}
            />

            <label>Condition:</label>
            <input
              type="text"
              name="condition"
              value={condition}
              onChange={handleCondition}
            />
            <label>Length:</label>
            <input
              type="text"
              name="length"
              value={length}
              onChange={handleLength}
            />
            <label>Beam:</label>
            <input type="text" name="beam" value={beam} onChange={handleBeam} />
            <label>Draught:</label>
            <input
              type="text"
              name="draught"
              value={draught}
              onChange={handleDraught}
            />
            <label>Displacement:</label>
            <input
              type="text"
              name="displacement"
              value={displacement}
              onChange={handleDisplacement}
            />
            <label>Material:</label>
            <input
              type="text"
              name="material"
              value={material}
              onChange={handleMaterial}
            />
            <label>Steering:</label>
            <input
              type="text"
              name="steering"
              value={steering}
              onChange={handleSteering}
            />
            <label>Keel:</label>
            <input type="text" name="keel" value={keel} onChange={handleKeel} />
            <label>Ballast:</label>
            <input
              type="text"
              name="ballast"
              value={ballast}
              onChange={handleBallast}
            />
            <label>Headroom:</label>
            <input
              type="text"
              name="headroom"
              value={headroom}
              onChange={handleHeadroom}
            />
            <label>Cabins:</label>
            <input
              type="text"
              name="cabins"
              value={cabins}
              onChange={handleCabins}
            />
            <label>Berths:</label>
            <input
              type="text"
              name="berths"
              value={berths}
              onChange={handleBerths}
            />
            <label>Watertank:</label>
            <input
              type="text"
              name="watertank"
              value={watertank}
              onChange={handleWatertank}
            />
            <label>Propulsion:</label>
            <input
              type="text"
              name="propulsion"
              value={propulsion}
              onChange={handlePropulsion}
            />
            <label>Engine:</label>
            <input
              type="text"
              name="engine"
              value={engine}
              onChange={handleEngine}
            />
            <label>Fuel type:</label>
            <input
              type="text"
              name="fuelType"
              value={fuelType}
              onChange={handleFueltype}
            />

            <label>Description:</label>
            <textarea
              rows={4}
              type="text"
              name="description"
              value={description}
              onChange={handleDescription}
            />

            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={handleCountry}
            />

            <label>Price</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={handlePrice}
            />

            <label htmlFor="files" label="Upload">
              Upload files:
            </label>
            <input
              type="file"
              id="files"
              name="files"
              onChange={handleImage}
              multiple
            />

            <button
              type="submit"
              style={{ backgroundColor: 'lightblue', color: 'red' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default AddBoat;
