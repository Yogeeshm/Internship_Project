import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import { Button } from "@mui/material";

export function UserCourse({ userData }) {
  const [data, setData] = useState([]);

 console.log(userData);
 const navbarToggleStyle = {
  borderColor: '#ffffff',
};

const navLinkStyle = {
  color: '#333333',
  fontWeight: 'bold',
  marginRight: '10px',
};

  useEffect(() => {
    axios.get(`http://localhost:5000/courses`).then((res) => {
      console.log(res.data);
      setData(res.data);
    })
   }, [])

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };


  return (
    <div style={{backgroundColor:"#dcebfc"}}>
    <Navbar  expand="lg" style={{backgroundColor:"#00ABE4"}}>
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={navbarToggleStyle}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"style={navLinkStyle}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Courses">Course</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
        </Nav>
          <Button variant="contained" color="error" onClick={logOut}>
            {window.localStorage.getItem("loggedIn") ? "Log Out" : "Log In"}
          </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
<br/>
      <div className="container" >
      <div class="table-responsive">
  <table class="table table-striped table-hover">
    <thead class="thead-dark">
      <tr>
        <th>Course Name</th>
        <th>Course Code</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          <td>{item.Cname}</td>
          <td>{item.Ccode}</td>
          <td>{item.Cdate}</td>
          <td>{item.Cedate}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
            <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#00ABE4'}}>
              <div className="container p-4 pb-0">
                <section className>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                      <h5 className="text-uppercase">LOCATION</h5>
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.060247318163!2d74.966475!3d13.050621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x258a2e8d6d4b45b0!2sMangalore%20Institute%20of%20Technology%20and%20Engineering%2C%20MITE!5e0!3m2!1sen!2sin!4v1653931678202!5m2!1sen!2sin" width="100%" height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                      <h5 className="text-uppercase">FEATURED LINKS</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="py-2">
                          <a href="https://mite.ac.in/naac/" target="_blank" className="text-white">NAAC</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/wp-content/uploads/2021/08/MITE_Mandatory_Disclosure_Aug_2021.pdf" target="_blank" className="text-white">Mandatory Disclosure</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/alumni/" target="_blank" className="text-white">Alumni</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/ek-bharat-shrestha-bharat/" target="_blank" className="text-white">EBSB</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                      <h5 className="text-uppercase" />
                      <br />
                      <ul className="list-unstyled mb-0">
                        <li className="py-2">
                          <a href="https://mite.ac.in/placements/" target="_blank" className="text-white">Placements</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/audited-accounts-statements/" target="_blank" className="text-white">Audited Account Statements</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/nirf-data/" target="_blank" className="text-white">NIRF</a>
                        </li>
                        <li className="py-2">
                          <a href="https://mite.ac.in/stakeholders-feedback/" target="_blank" className="text-white">Stakeholders Feedback</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                      <h5 className="text-uppercase">Navigation</h5>         
                      <ul className="list-unstyled mb-0">
                      <li className="py-2">
                        <Link to="/" className="text-white">Home </Link>
                      </li>
                      <li className="py-2">
                        <Link to="/about" className="text-white">About us</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/course" className="text-white">Courses</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/contact" className="text-white">Contact us</Link>
                      </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                      <h5 className="text-uppercase">Contact details</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="py-2">
                          <p className="text-white fs-6">Badaga Mijar, Near Moodabidre, Mangalore Tq, DK Dist, Karnataka - 574225</p>
                        </li>
                        <li className="py-2"> 
                          <a href="tel:+91 9741731309/ 9945130850" target="_blank" style={{color: 'white'}}>+91 9741731309/ 9945130850</a>
                        </li>
                        <li className="py-2">
                          <a href="tel:+91 8258 262695/ 96/ 97" target="_blank" style={{color: 'white'}}>+91 8258 262695/ 96/ 97</a>
                        </li>
                        <li className="py-2">
                          <a href="mailto:info@mite.ac.in" target="_blank" style={{color: 'white'}}>info@mite.ac.in</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
              <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2023 Copyright
              </div>
            </footer>
          </div>
    </div>
  );
};

export default UserCourse;


