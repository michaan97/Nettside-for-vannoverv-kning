import React, { Component } from 'react';
import axios from 'axios';
import {lastHeard, status, toTime} from '../tools/misc';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';

const startTime = new Date("2019-04-10T13:52:46.444Z").getTime();

class Statistics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      getData:[],
      tempAverage:0,
      tempMax:0,
      tempMin:0,
      PHAverage:0,
      PHMax:0,
      PHMin:0,
      kondAverage:0,
      kondMax:0,
      kondMin:0,
      turbAverage:0,
      turbMax:0,
      turbMin:0,

      node:{id:1},
      lastHeard:'Laster inn...',

      interval:'Laster inn...',
      status:false,
    };
    if(props.node !== undefined){
      this.state.node = props.node;
    }
    this.getData = this.getData.bind(this);
    this.getAggregation = this.getAggregation.bind(this);
  }

  getData(){
    status(this.state.node.id).then(online =>{
      this.setState({
        status:online,

      });
    });

    lastHeard(this.state.node.id).then(time =>{
      this.setState({
        lastHeard:time,
      });
    });

    this.getAggregation('TEMPERATURE','AVERAGE').then(data=> {
      this.setState({
        tempAverage:data,
      });
    });
    this.getAggregation('TEMPERATURE','HIGHEST').then(data=> {
      this.setState({
        tempMax:data,
      });
    });
    this.getAggregation('TEMPERATURE','LOWEST').then(data=> {
      this.setState({
        tempMin:data,
      });
    });

    this.getAggregation('PH','AVERAGE').then(data=> {
      this.setState({
        PHAverage:data,
      });
    });
    this.getAggregation('PH','HIGHEST').then(data=> {
      this.setState({
        PHMax:data,
      });
    });
    this.getAggregation('PH','LOWEST').then(data=> {
      this.setState({
        PHMin:data,
      });
    });

    this.getAggregation('CONDUCTIVITY','AVERAGE').then(data=> {
      this.setState({
        kondAverage:data,
      });
    });
    this.getAggregation('CONDUCTIVITY','HIGHEST').then(data=> {
      this.setState({
        kondMax:data,
      });
    });
    this.getAggregation('CONDUCTIVITY','LOWEST').then(data=> {
      this.setState({
        kondMin:data,
      });
    });

    this.getAggregation('TURBIDITY','AVERAGE').then(data=> {
      this.setState({
        turbAverage:data,
      });
    });
    this.getAggregation('TURBIDITY','HIGHEST').then(data=> {
      this.setState({
        turbMax:data,
      });
    });
    this.getAggregation('TURBIDITY','LOWEST').then(data=> {
      this.setState({
        turbMin:data,
      });
    });
    var d = Date.now() - (1000*60*60*24);
    var url = 'https://vannovervakning.com/api/v1/measurements/'+this.state.node.id+'/'+d;
    axios.get(url)
    .then((res) => {

        var interval = Date.parse(res.data.data.TEMPERATURE[0]["timeCreated"]) - Date.parse(res.data.data.TEMPERATURE[1]["timeCreated"]);
        var text = toTime(interval);

        this.setState({
          getData:res.data,
          isLoaded:true,
          interval:text,
        });
    })
    .catch( (error) => {
      console.log(error);
        this.setState({
          isLoaded:true,
        });
    });

  }


  //returns the aggregation as a number. Specify sensor type (e.g "TEMPERATURE") and agg. type (e.g "AVERAGE") and from time
  getAggregation(sensor,type, from=startTime){
    var url = 'https://vannovervakning.com/api/v1/measurements/'+this.state.node.id +'/'+ from +'?types='+sensor+ '&aggregate=' +type ;
    return axios.get(url)
    .then((res) => {
      return res.data.data[sensor][0]["value"];
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  componentWillReceiveProps(props){
      this.setState({
        node:props.node,
        isLoaded:false,
      }, () => {
      this.getData();
  });


  }

  componentDidMount() {
    this.getData();
  }



  render() {

    let statistics = <div> Laster statistikk... dette tar litt tid </div>;
    var status = <div>"Laster inn.."</div>;
    if(this.state.isLoaded === true){
      if(this.state.status){
        status =  <Badge variant="success">Online</Badge> ;
      }else{
        status =  <Badge variant="danger">Offline</Badge>;
      }

      statistics =  <div>
      Mellomrom mellom målinger: {this.state.interval}



      <h3>Temperatur</h3>
      <ul>
      <li>
      Gjennomsnitt: {this.state.tempAverage} °C
      </li>
      <li>
      Høyest målt verdi: {this.state.tempMax} °C
      </li>
      <li>
      Lavest målt verdi: {this.state.tempMin} °C
      </li>
      </ul>

      <h3>PH</h3>
      <ul>
      <li>
      Gjennomsnitt: {this.state.PHAverage}
      </li>
      <li>
      Høyest målt verdi: {this.state.PHMax}
      </li>
      <li>
      Lavest målt verdi: {this.state.PHMin}
      </li>
      </ul>

      <h3>Konduktivitet</h3>
      <ul>
      <li>
      Gjennomsnitt: {this.state.kondAverage}
      </li>
      <li>
      Høyest målt verdi: {this.state.kondMax}
      </li>
      <li>
      Lavest målt verdi: {this.state.kondMin}
      </li>
      </ul>

      <h3>Turbiditet</h3>
      <ul>
      <li>
      Gjennomsnitt: {this.state.turbAverage}
      </li>
      <li>
      Høyest målt verdi: {this.state.turbMax}
      </li>
      <li>
      Lavest målt verdi: {this.state.turbMin}
      </li>
      </ul>
      </div>;
    }


    return (
      <div className="container-fluid" style={{display:'flex', width:'90%',flexDirection:'column',height:'100%', minHeight:'95vh',marginLeft:'30px'}}>
        <h1>
        Statistikk
        </h1>
          {this.state.isLoaded ?
            <div>
          Status: {status}<br/>
          Sist hørt fra: {this.state.lastHeard}<br/>
          {statistics}
          </div>
          : <div><Spinner animation="border" role="status" >
                            <span className="sr-only">Loading...</span>
                        </Spinner></div>}

      </div>
    );
  }
}

export default Statistics;
