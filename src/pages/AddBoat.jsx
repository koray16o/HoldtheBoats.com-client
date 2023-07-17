import Navbar from '../components/Navbar';
import { useState } from 'react';
import { addBoat, upload } from '../api/boats.api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddBoat = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [type, setType] = useState('');
  const [form, setForm] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
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
  const handleForm = e => {
    setForm(e.target.value);
  };
  const handleDescription = e => {
    setDescription(e.target.value);
  };
  const handleCountry = e => {
    setCountry(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Submit button working');
    try {
      const newBoat = {
        title,
        type,
        form,
        description,
        country
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
    setForm('');
    setDescription('');
    setCountry('');
    navigate('/boats');
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
            <option value="sailboat">Sailboats</option>
            <option value="powerboat">Powerboats</option>
            <option value="classicboat">Classicboats</option>
            <option value="dinghy">Dinghy</option>
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

export default AddBoat;
