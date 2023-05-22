import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./container.css"
import { Container, Navbar } from "react-bootstrap";
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import { Button } from "@mui/material";
const Courses = () => {
  let t=window.localStorage.getItem("AdminloggedIn")
  if (t!="true"){
    window.location.href = "./admin";
  }

  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    Cname: "",
    Ccode: "",
    Cdate: "",
    Cedate: ""
  });

  const { Cname, Ccode, Cdate, Cedate } = formData;

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  
  
  // Fetch all courses from MongoDB
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/courses");
      setCourses(result.data);
    };
    fetchData();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/courses", formData);
      setFormData({ Cname: "", Ccode: "", Cdate: "", Cedate: "" });
      const result = await axios.get("http://localhost:5000/courses");
      setCourses(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle delete course
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/courses/${id}`);
      const result = await axios.get("http://localhost:5000/courses");
      setCourses(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle update course
  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/courses/${id}`, formData);
      setFormData({ Cname: "", Ccode: "", Cdate: "", Cedate: "" });
      const result = await axios.get("http://localhost:5000/courses");
      setCourses(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <div>
      <Navbar fixed="top" style={{backgroundColor:"#00ABE4"}}>
      <Container>
      <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
        <Navbar.Brand href="/">AcademiX</Navbar.Brand>
        </Typography>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/adminHome" className="nav-link">Manage</Link>
            </li>
          </ul>
        </div>
        <Button variant="contained" color="error" onClick={logOut} className="bt">
          Log Out
        </Button>
        </Container>
      </Navbar>
      <br/>
      <br/>
      <br/>
      <Container>
    <form onSubmit={handleSubmit}>
    <div class="card  text-black" style={{backgroundColor:"lightblue"}} >
    <div class="card-body p-5 text-center">
      <div className="row mb-3">
        <label htmlFor="Cname" className="col-sm-2 col-form-label">Course Name</label>
        <div className="col-sm-10">
          <input
            type="text"
            name="Cname"
            value={Cname}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="Ccode" className="col-sm-2 col-form-label">Course Code</label>
        <div className="col-sm-10">
          <input
            type="text"
            name="Ccode"
            value={Ccode}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="Cdate" className="col-sm-2 col-form-label">Course Date</label>
        <div className="col-sm-10">
          <input
            type="date"
            name="Cdate"
            value={Cdate}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="Cedate" className="col-sm-2 col-form-label">Course End Date</label>
        <div className="col-sm-10">
          <input
            type="date"
            name="Cedate"
            value={Cedate}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <button type="submit" className="btn btn-primary">Add Course</button>
        </div>
      </div>
      </div>
      </div>
    </form>
    <br/>

    <table className="table">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Course Code</th>
          <th>Course Date</th>
          <th>Course End Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course._id}>
            <td>{course.Cname}</td>
            <td>{course.Ccode}</td>
            <td>{course.Cdate}</td>
            <td>{course.Cedate}</td>
            <td>
            <div class="span2">
              <button onClick={() => handleUpdate(course._id)} id="bttn" type="button" class="btn btn-outline-primary me-1">Edit</button> 
              <button onClick={() => handleDelete(course._id)} id="bttn" type="button" class="btn btn-outline-danger ">Delete</button>
            </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </Container>
  </div>
);
};

export default Courses;
