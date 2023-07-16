import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBoat, updateBoat } from '../api/boats.api';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Select, Space, Upload } from 'antd';

const { TextArea } = Input;
const normFile = e => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const EditBoat = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [type, setType] = useState('');
  const [form, setForm] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
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
  const handleType = value => {
    setType(value);
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
    try {
      const updatedBoat = {
        title,
        image,
        type,
        form,
        description,
        country,
        _id: id
      };
      await updateBoat(updatedBoat);
      navigate('/boats');
    } catch (error) {
      console.log('Error updating project', error);
    }
    setTitle('');
    setImage();
    setType('');
    setForm('');
    setDescription('');
    setCountry('');
  };

  return (
    <div>
      <Navbar />
      <h1>Edit Boat</h1>

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
        <Form onSubmit={handleSubmit}>
          <Form
            labelCol={{
              span: 4
            }}
            wrapperCol={{
              span: 14
            }}
            layout="horizontal"
            style={{
              maxWidth: 600
            }}
          >
            <Form.Item label="Title">
              <Input
                type="text"
                name="title"
                value={title}
                onChange={handleTitle}
              />
            </Form.Item>

            <Form.Item label="Type">
              <Select name="type" value={type} onChange={handleType}>
                <Select.Option value="sailboats">Sailboats</Select.Option>
                <Select.Option value="powerBoats">Power Boats</Select.Option>
                <Select.Option value="classicBoat">Classic Boats</Select.Option>
                <Select.Option value="dinghy">Dinghy</Select.Option>
              </Select>
            </Form.Item>

            <Form
              type="text"
              name="form"
              value={form}
              onChange={handleForm}
              labelCol={{
                span: 4
              }}
              wrapperCol={{
                span: 14
              }}
              layout="horizontal"
              style={{
                maxWidth: 600
              }}
            >
              <Form.Item label="Built in">
                <InputNumber />
              </Form.Item>

              <Form.Item label="Condition">
                <Input />
              </Form.Item>

              <Form.Item label="Length">
                <Input />
              </Form.Item>
              <Form.Item label="Beam">
                <Input />
              </Form.Item>
              <Form.Item label="Draught">
                <Input />
              </Form.Item>
              <Form.Item label="Displacement">
                <Input />
              </Form.Item>
              <Form.Item label="Material">
                <Input />
              </Form.Item>
              <Form.Item label="Steering">
                <Input />
              </Form.Item>
              <Form.Item label="Keel">
                <Input />
              </Form.Item>
              <Form.Item label="Ballast">
                <Input />
              </Form.Item>
              <Form.Item label="Headroom">
                <Input />
              </Form.Item>
              <Form.Item label="Cabins">
                <Input />
              </Form.Item>
              <Form.Item label="Berths">
                <Input />
              </Form.Item>
              <Form.Item label="Watertank">
                <Input />
              </Form.Item>
              <Form.Item label="Propulsion">
                <Input />
              </Form.Item>
              <Form.Item label="Engine">
                <Input />
              </Form.Item>
              <Form.Item label="Fuel type">
                <Input />
              </Form.Item>
            </Form>
            <Form.Item label="Description">
              <TextArea
                rows={4}
                type="text"
                name="description"
                value={description}
                onChange={handleDescription}
              />
            </Form.Item>

            <Form.Item label="Country">
              <Input
                type="text"
                name="country"
                value={country}
                onChange={handleCountry}
              />
            </Form.Item>
          </Form>

          <Form.Item
            type="file"
            name="file"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            onChange={handleImage}
            labelCol={{
              span: 12
            }}
            wrapperCol={{
              span: 14
            }}
            layout="horizontal"
            extra="Or"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="file" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6
            }}
          >
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditBoat;
