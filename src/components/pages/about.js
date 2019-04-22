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
          <p >
          Vi er gruppe 1!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor dapibus quam eget dignissim. In vitae risus quis sem efficitur ultrices. Suspendisse porttitor sed tellus a tempor. Mauris vel nulla ut augue fermentum dictum. In non felis eleifend, egestas turpis dignissim, venenatis quam. Quisque scelerisque feugiat elit sed fringilla. Maecenas rutrum vitae ex quis cursus. Praesent in turpis dolor. Donec sed lorem et velit tempor mattis at et tortor. Proin lacinia luctus mi vitae bibendum. Cras dignissim neque eu odio rutrum, in hendrerit nibh mollis. Aliquam a nulla id tellus vestibulum iaculis. Aliquam ex ex, scelerisque sed tincidunt id, varius in eros. Praesent porta tellus ac condimentum vulputate. Vivamus feugiat quam ac velit finibus aliquet.
          </p>
          <p>
Sed eu leo id augue semper consectetur at ac mauris. In pulvinar magna elementum tortor tempus pretium id at leo. Praesent pretium ultricies eros, quis consequat lacus feugiat ut. Aliquam sagittis metus diam, sit amet hendrerit nunc feugiat ac. Morbi consectetur lectus porta tortor vestibulum fringilla. Praesent feugiat, sem id pellentesque efficitur, lacus odio fermentum nunc, vitae egestas velit nulla vel dolor. Maecenas cursus orci id accumsan convallis. Maecenas tempor nibh non massa vestibulum, pretium lacinia nunc feugiat. Praesent odio ipsum, dapibus at felis vel, auctor sagittis nibh. Aliquam maximus nulla id tellus tristique, nec posuere orci euismod.
          </p>
          <p>
Nullam metus est, sodales sed odio nec, bibendum iaculis elit. Aenean a enim vel mauris tincidunt tristique. Praesent vel libero quis odio bibendum ultricies. Nullam tristique posuere eros at consequat. Duis ac nunc tempor, elementum ipsum vel, mollis leo. Sed tristique lobortis risus id posuere. Praesent ut vulputate justo. Mauris tristique fringilla porta. Sed urna felis, porttitor vitae lacinia eget, condimentum eu turpis. Donec ex erat, rhoncus vitae velit a, tempor egestas enim. Nam congue augue felis, eu auctor libero mollis ac. Mauris blandit mollis interdum. Aliquam quis viverra ligula. Suspendisse rhoncus eros vitae lectus porta, vel tempus erat porta. In at quam ornare, bibendum erat non, varius metus.

Duis et massa aliquet, sollicitudin est eu, pharetra neque. Nulla bibendum mollis feugiat. Donec elit neque, euismod vitae pretium sed, malesuada eu lacus. Duis suscipit mattis nisl sit amet condimentum. In aliquet iaculis metus, eu mollis magna dictum maximus. Morbi in ipsum quis leo commodo scelerisque et vitae urna. Nullam convallis luctus eros nec iaculis. Ut tristique est eu quam dapibus, eu pretium nisi vestibulum. Phasellus tincidunt condimentum tellus nec pharetra. Pellentesque condimentum ex eu ante interdum ullamcorper. Nam tempor sapien id libero luctus, at mattis tellus blandit. Nullam non luctus sem, nec volutpat mauris.

Ut mollis ornare quam, eget aliquet justo aliquet eget. Aliquam id tincidunt urna, eget tempus urna. Duis pulvinar nec eros nec scelerisque. Aenean mattis congue urna nec imperdiet. Cras ac vulputate ligula. Nullam blandit augue eget metus aliquam egestas. Morbi leo sem, tempus quis elit nec, tincidunt imperdiet metus. Integer non dapibus enim. Proin a diam et tortor egestas dictum. Curabitur leo leo, tristique in finibus at, aliquam at nibh. Nam elit ipsum, feugiat a nunc eu, aliquam pulvinar arcu. Vivamus suscipit fermentum arcu, eget semper ante consectetur sed. Mauris mattis magna sit amet maximus bibendum. Maecenas eget augue at nibh pulvinar interdum. Maecenas sed est quis erat consectetur bibendum id sed lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>

        </div>
      </div>
    );
  }
}

export default About;
