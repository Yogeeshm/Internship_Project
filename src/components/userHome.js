import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import { Button } from "@mui/material";
import Carousel from 'react-bootstrap/Carousel';

export function UserHome({ userData }) {
  const [showNavExternal, setShowNavExternal] = useState(false);
  console.log(userData);

  useEffect(() => {
    axios.get(`http://localhost:5000/courses`).then((res) => {
      console.log(res.data);
    })
  }, [])

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  

  const navbarToggleStyle = {
    borderColor: '#ffffff',
  };

  const navLinkStyle = {
    color: '#333333',
    fontWeight: 'bold',
    marginRight: '10px',
  };
  return (
    <div style={{backgroundColor:"#dcebfc"}}>
      <Navbar  fixed="top" expand="lg" style={{backgroundColor:"#00ABE4"}}>
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
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Carousel style={{  width: '80%',marginLeft:"150px" }}interval={3000}>
      <Carousel.Item interval={3000}>
        <img src={require('./images/slider-1-mite.jpg')} className="img-fluid height-auto shadow-4" alt="Slide 1" />
        <Carousel.Caption>
          <h3>MITE campus</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={require('./images/slider-4-mite.jpg')} className="img-fluid height-auto shadow-4" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={require('./images/slider-3-mite.jpg')} className="img-fluid height-auto shadow-4" alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
    </div>
    <br/>
        <div>
        <div className="container-fluid">
          <p className="text-center fs-5 px-4"><strong>Mangalore Institute of Technology &amp; Engineering (MITE)</strong>, a leading Engineering &amp; Management Institution in the region is established by the Rajalaxmi Education Trust under the leadership of the Visionary Mr. Rajesh Chouta in 2007.
            The natural aura of the beautiful serene, green campus coupled by its passion to provide the best for students to learn, explore and has truly created a powerful atmosphere for everyone to nurture their skills and excel.
            MITE shapes professionals who are an optimum mix of right attitude, skill, culture and knowledge.</p>
        </div>
        <br /><br />
        <div className="container-fluid px-4" style={{ backgroundColor: '#f5f5f5' }}>
          <section>
            <div className="row">
              <div className="col-12 mt-3 mb-1">
                <h5 className="text-center display-6" style={{ color: 'navy' }}>Mangalore Institute of Technology and Engineering is known for its unique, green infrastructure
                  and has made a name for itself as one of the Best Engineering colleges in Mangalore.
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-danger">74</h3>
                        <p className="mb-0">Acres of pristine land</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-success">54420 Sq. Mt.</h3>
                        <p className="mb-0">Built-up Area</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-warning">2542</h3>
                        <p className="mb-0">Students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-info">179</h3>
                        <p className="mb-0">Faculty</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-danger">26</h3>
                        <p className="mb-0">University Ranks since 2013</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-success">500+</h3>
                        <p className="mb-0">Placements every year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-warning">4</h3>
                        <p className="mb-0">Global University Collaborations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-info">7</h3>
                        <p className="mb-0">MoUs with Reputed Industries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-danger">1.2 Crores</h3>
                        <p className="mb-0">Govt. of Karnataka towards Start-ups</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-success">65 Lakhs</h3>
                        <p className="mb-0">Govt. of India towards Start-ups</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-warning">20 Ideas</h3>
                        <p className="mb-0">Seed funded on campus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div class="mx-auto">
                        <h3 className="text-info">6</h3>
                        <p className="mb-0">Start-ups functional on campus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br /><br />
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col px-2">
            <div className="card h-100">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe width="100%" height={300} src="https://www.youtube.com/embed/-FST-Hk-HwU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="card-body">
                <h5 className="card-title">MITE: A World of Opportunities</h5>
              </div>
            </div>
          </div>
          <div className="col px-2">
            <div className="card h-100">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe width="100%" height={300} src="https://www.youtube.com/embed/tx61kRUNfCE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="card-body">
                <h5 className="card-title">Infrastructure</h5>
              </div>
            </div>
          </div>
          <div className="col px-2">
            <div className="card h-100">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe width="100%" height={300} src="https://www.youtube.com/embed/tMlF2cmM0XI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="card-body">
                <h5 className="card-title">Global University and Industry Connect</h5>
              </div>
            </div>
          </div>
          <div className="col px-2">
            <div className="card h-100">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe width="100%" height={300} src="https://www.youtube.com/embed/CwknngW-P2I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="card-body">
                <h5 className="card-title">Sports and Culturals</h5>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div>
          <footer className='text-center text-lg-start text-white' style={{ backgroundColor: "#00ABE4" }}>
            <div className="container p-4 pb-0">
              <section className>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">LOCATION</h5>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.060247318163!2d74.966475!3d13.050621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x258a2e8d6d4b45b0!2sMangalore%20Institute%20of%20Technology%20and%20Engineering%2C%20MITE!5e0!3m2!1sen!2sin!4v1653931678202!5m2!1sen!2sin" width="100%" height={300} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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
                        <a href="tel:+91 9741731309/ 9945130850" target="_blank" style={{ color: 'white' }}>+91 9741731309/ 9945130850</a>
                      </li>
                      <li className="py-2">
                        <a href="tel:+91 8258 262695/ 96/ 97" target="_blank" style={{ color: 'white' }}>+91 8258 262695/ 96/ 97</a>
                      </li>
                      <li className="py-2">
                        <a href="mailto:info@mite.ac.in" target="_blank" style={{ color: 'white' }}>info@mite.ac.in</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2023 Copyright
            </div>
          </footer>
        </div>
      </div>
    </div>

  );
};

export default UserHome;


