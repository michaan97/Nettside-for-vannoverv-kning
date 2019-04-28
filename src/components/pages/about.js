import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import hei from "../../Assets/Images/Carousel/background.jpeg";
import elv from "../../Assets/Images/Carousel/elv.jpeg";
import innside from "../../Assets/Images/Carousel/innside.jpeg";
import yes from "../../Assets/Images/Carousel/renessanse.jpeg";
import krets from "../../Assets/Images/Carousel/krets.jpeg";
import node from "../../Assets/Images/Carousel/node.jpeg";
import ramme from "../../Assets/Images/Carousel/ramme.jpg";
import antenne from "../../Assets/Images/Carousel/antenne.jpeg";
import solcelle from "../../Assets/Images/Carousel/solcelle.jpeg";
import utside from "../../Assets/Images/Carousel/utside.jpeg";
import bareelv from "../../Assets/Images/Carousel/bareelv.jpeg";




const stil = {
  width:'100%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',

};
const carouselStyle = {

  marginTop:'10vh',
  alignSelf:'center',
  width:'80vw',

};
const imgStyle = {

  display:'block',
  objectFit:'cover',
  width:'80vw',
  height:'80vh',
  objectPosition: 'center',
};

const shadowText = {
  color:'white',
  textShadow: '#000000 1px 00 3px',
}
class About extends Component {
  render() {
    return (
      <div className="container-fluid" style={stil}>

        <Carousel style={carouselStyle}>
          <Carousel.Item >
            <img style={imgStyle}
              className="d-block w-100"
              src={yes}
              alt="First slide"
            />
            <Carousel.Caption  style = {shadowText}>
              <p>Her monteres sensornoden i elva</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={imgStyle}
              className="d-block w-100"
              src={elv}
              alt="Third slide"
            />

            <Carousel.Caption  style = {shadowText}>
              <p>Sensornoden står støtt i elven</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={imgStyle}
              className="d-block w-100"
              src={bareelv}
              alt="Third slide"
            />

            <Carousel.Caption style = {shadowText}>
              <p>Målepunktet ligger øverst i Vikelva i Trondheim kommune</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={imgStyle}
              className="d-block w-100"
              src={antenne}
              alt="Third slide"
            />

            <Carousel.Caption style = {shadowText}>
              <p>Til tider kan det være stor vannføring i elva</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={imgStyle}
              className="d-block w-100"
              src={utside}
              alt="Third slide"
            />
            <Carousel.Caption style = {shadowText}>
              <p>Sensornoden holdes på plass av en solid stålbjekle</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={imgStyle}
              className="d-block w-100"
              src={node}
              alt="Third slide"
            />

            <Carousel.Caption style = {shadowText}>
              <p>Elektronikk og sensorer er plassert inne i en vanntett beholder</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={imgStyle}
              className="d-block w-100"
              src={solcelle}
              alt="Third slide"
            />

            <Carousel.Caption style = {shadowText}>
              <p>Et solcellepanel høster energi fra solen</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={imgStyle}
              className="d-block w-100"
              src={innside}
              alt="Third slide"
            />

            <Carousel.Caption style = {shadowText}>
              <p>Innsiden av sensornoden holdes på plass av laserkuttet treverk</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img style={imgStyle}
              className="d-block w-100"
              src={krets}
              alt="Third slide"
            />

            <Carousel.Caption style = {shadowText}>
              <p>Et egetdesignet kretskort styrer sensornoden</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div style={{width:'80vw',marginTop:'50px', display:'flex', alignItems:'left',flexDirection:'column',color:'#555555', marginBottom:'50vh',}}>
        <h3 style={{alignSelf:'center', marginBottom:'30px',color:'black', textShadow: '#AAAAAA 1px 0 10px',}}> Vannovervåkning i Trondheim </h3>

          <p>
          Vi er 7 studenter fra Elektronisk systemdesign og innovasjon ved NTNU
          som har jobbet gjennom et par uker for å utvikle denne innretningen og som bildene og
          verdiene viser har vi nå en fungerende enhet plassert øverst i Vikelva, Trondheim kommune.
          </p>
          
          <p>
          Folk har blitt mer og mer miljøbevisst de siste årene og på grunn av dette har
          vi tatt for oss oppgaven om å utvikle et system som kan detektere endringer i gitte målverdier.
          Tidligere har enkeltpersoner måtte gå fysisk ned til elva for å ta prøver som de tar med til laben for å analysere,
          men med vår innretning får man målverdier representert på denne nettsiden!
          </p>

        </div>
      </div>
    );
  }
}

export default About;
