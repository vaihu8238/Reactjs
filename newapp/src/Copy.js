import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  const [data, setdata] = useState([]);
  const [id, setid] = useState('');
  const [pname, setpname] = useState('');
  const [category, setcategory] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  
  const [datadlt, setdatadlte] = useState(null); // data delete
  const [dataedt, setdataedt] = useState(false); // data edit

  // Insert data
  const insertdata = async () => {
    const newData = {
      pname,
      category,
      price,
      description,
    };

    try {
      await axios.post('https://67279b55270bd0b97553104b.mockapi.io/newapi', newData);
      datafetch();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch data
  const datafetch = async () => {
    try {
      const response = await axios.get('https://67279b55270bd0b97553104b.mockapi.io/newapi');
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  // Delete data
  const datadelete = async (id) => {
    try {
      await axios.delete(`https://67279b55270bd0b97553104b.mockapi.io/newapi/${id}`);
      datafetch();
    } catch (error) {
      console.log(error);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setid('');
    setpname('');
    setcategory('');
    setprice('');
    setdescription('');
  };

  // Edit mode
  const editmode = (data) => {
    setdataedt(true);
    setid(data.id);
    setpname(data.pname);
    setcategory(data.category);
    setprice(data.price);
    setdescription(data.description);
  };

  // Edit data
  const dataedit = async () => {
    const updatedData = {
      pname,
      category,
      price,
      description,
    };

    try {
      await axios.put(`https://67279b55270bd0b97553104b.mockapi.io/newapi/${id}`, updatedData);
      datafetch();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  // Handle button click (Add or Edit)
  const handleButtonClick = () => {
    if (dataedt) {
      dataedit();
    } else {
      insertdata();
    }
    setdataedt(false);
  };

  return (
    <div>
      {/* Form Inputs */}
      <div>
        Enter name: <input type="text" value={pname} onChange={(e) => setpname(e.target.value)} /><br /><br />
        Enter category: <input type="text" value={category} onChange={(e) => setcategory(e.target.value)} /><br /><br />
        Enter price: <input type="text" value={price} onChange={(e) => setprice(e.target.value)} /><br /><br />
        Enter description: <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} /><br /><br />
      </div>

      {/* Add/Edit Button */}
      <button onClick={handleButtonClick}>
        {dataedt ? 'Edit' : 'Add'}
      </button>

      {/* Data Table */}
      <table className="table mt-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => (
            <tr key={val.id}>
              <td>{index + 1}</td>
              <td>{val.pname}</td>
              <td>{val.category}</td>
              <td>{val.price}</td>
              <td>{val.description}</td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => datadelete(val.id)}>
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => editmode(val)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
