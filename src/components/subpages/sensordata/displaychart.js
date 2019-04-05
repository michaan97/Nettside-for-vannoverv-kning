import React, { Component } from 'react';
import LineChart from '../../charts/LineChart';


const chartStyle = {
  minWidth:'80vw',
  flexShrink:'0',
};

class DisplayChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData:{},
      isLoaded: false,
      failure: false,
      data:props.data,
    };
    console.log(props);
    this.getChartData = this.getChartData.bind(this);
  }

  componentDidMount(){
    this.getChartData(this.state.data);
  }

  getChartData(temp){
    /*
    var url = 'https://vannovervakning.com/api/v1/measurements/' +this.props.state.node.id + '/';
    if(this.props.type != null){
      url += '?types=' + this.props.type;
    }
    else {
      return null;
    }

    axios.get(url)
    .then( (res) => {
      */

        if(temp.length <= 0 || temp.data.lenght <= 0 || temp.data[this.props.type] === undefined){
          this.setState({
            chartData:{},
            isLoaded:false,
          });
          return null;
        }
        console.log(temp);
        let labels = [];
        let data = [];
        temp.data[this.props.type].forEach(el => {
          let datestring = new Date(el.timeCreated)
          labels.push(datestring.toLocaleDateString());
          data.push(el.value);
        });
        data.reverse();
        labels.reverse();
        var pointRadius = 8*Math.pow(10,(-(data.length)/500));
        var lineWidth =  3*Math.pow(10,(-(data.length)/500)) + 1;
        this.setState({
          isLoaded: true,
          chartData: {
            labels:labels,
            datasets: [
              {
                lineTension:0.4,
                label: this.props.title,
                data: data,
                borderWidth:lineWidth,
                pointRadius:pointRadius,
                pointBackgroundColor:'rgba(0, 153, 255,0)',
                borderColor: 'rgba(0, 153, 255,1)',
                backgroundColor: [
                  "rgba(0, 99, 132, 0)",
                ],
              }
            ]
          }
        });
        /*
      })
    .catch( (error) => {
      console.log(error);
    });*/
  }

  componentWillReceiveProps(props){
    if(props.data !== this.state.data){
      this.setState({
        data:props.data,
      });
      this.getChartData(props.data);
    }
  }

  render() {
    return (
      <div style={chartStyle}>

        {this.state.isLoaded ? Object.keys(this.state.chartData).length &&
          <LineChart chartData={this.state.chartData} location="Vikelva" legendPosition="bottom" title={this.props.title}/>
          : <p>Finner ikke data for {this.props.title}</p>

        }
      </div>
    );
  }
}

export default DisplayChart;
