import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBoat, updateBoat, upload } from '../api/boats.api';
import { toast } from 'react-toastify';

const EditBoat = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [type, setType] = useState('');
  const [form, setForm] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBoat = async () => {
      try {
        const response = await getBoat(id);
        setTitle(response.data.title);
        setImage(response.data.image);
        setType(response.data.type);
        setForm(response.data.form);
        setDescription(response.data.description);
        setCountry(response.data.country);
        setPrice(response.data.price);
      } catch (error) {
        console.log('Error fetching boat', error);
      }
    };
    fetchBoat();
  }, [id]);

  const handleTitle = e => {
    setTitle(e.target.value);
  };
  const handleImage = e => {
    setImage(e.target.files);
  };
  const handleType = e => {
    setType(e.target.value);
  };
  const handleForm = e => {
    setForm(e.target.value);
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
    try {
      const updatedBoat = {
        title,
        image,
        type,
        form,
        description,
        country,
        price,
        _id: id
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
      updatedBoat.imgURL = response.data.fileUrl;
      console.log('Response fileUrl', response.data.fileUrl);

      await updateBoat(updatedBoat);
      toast.success('Boat edited!');
      navigate('/boats');
    } catch (error) {
      toast.error('Something went wrong, try again later');
      console.log('Error updating boat', error);
    }
    setTitle('');
    setImage();
    setType('');
    setForm('');
    setDescription('');
    setCountry('');
    setPrice('');
  };

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
          <b>Edit Boat</b>
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

          <div onChange={handleForm}>
            <label>Built in:</label>
            <input type="number" name="builtIn" />

            <label>Condition:</label>
            <input type="text" name="condition" />
            <label>Length:</label>
            <input type="text" name="length" />
            <label>Beam:</label>
            <input type="text" name="beam" />
            <label>Draught:</label>
            <input type="text" name="draught" />
            <label>Displacement:</label>
            <input type="text" name="displacement" />
            <label>Material:</label>
            <input type="text" name="material" />
            <label>Steering:</label>
            <input type="text" name="steering" />
            <label>Keel:</label>
            <input type="text" name="keel" />
            <label>Ballast:</label>
            <input type="text" name="ballast" />
            <label>Headroom:</label>
            <input type="text" name="headroom" />
            <label>Cabins:</label>
            <input type="text" name="cabins" />
            <label>Berths:</label>
            <input type="text" name="berths" />
            <label>Watertank:</label>
            <input type="text" name="watertank" />
            <label>Propulsion:</label>
            <input type="text" name="propulsion" />
            <label>Engine:</label>
            <input type="text" name="engine" />
            <label>Fuel type:</label>
            <input type="text" name="fuelType" />
          </div>
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
          <label>Price:</label>
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
};

export default EditBoat;
