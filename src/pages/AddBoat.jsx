import Navbar from '../components/Navbar';
import { useState } from 'react';
import { addBoat, upload } from '../api/boats.api';
import { toast } from 'react-toastify';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Select, Space, Upload } from 'antd';

const { TextArea } = Input;
const normFile = e => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddBoat = ({ refreshList }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [type, setType] = useState('');
  const [form, setForm] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');

  const handleTitle = e => {
    setTitle(e.target.value);
  };
  const handleImage = info => {
    setImage(info.fileList);
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
    console.log('Submit button working');
    try {
      const newBoat = { title, type, form, description, country };
      if (!image || image.length === 0) {
        toast.error('Please select at least one file');
        return;
      }

      const uploadData = new FormData();
      for (let i = 0; i < image.length; i++) {
        uploadData.append('file', image[i]);
      }
      const response = await upload(uploadData);
      newBoat.imgUrl = response.data.fileUrl;

      await addBoat(newBoat);
      toast.success('Project added successfully!');
      refreshList();
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
  };
  console.log(handleSubmit);

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

        <Form
          onSubmit={handleSubmit}
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

          <div value={form} onChange={handleForm}>
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
          </div>
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
            <Upload name="logo" listType="picture" beforeUpload={() => false}>
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

export default AddBoat;
