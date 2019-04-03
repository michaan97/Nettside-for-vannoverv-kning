import axios from 'axios';

function lastHeard(){
  var url = 'https://vannovervakning.com/api/v1/measurements/1/';
  return axios.get(url)
    .then( (res) => {
        var d = new Date();
        d = Date.now() - Date.parse(res.data.data.TEMPERATURE[0]["timeCreated"] ) - 1000*60*(d.dst());
        return toTime(d);
      })
    .catch( (error) => {
      console.log(error);
    });

}

//Evaluates the status of the sensor node, returns true if its online
function status(){
  var threshold = 60; //how long since last heard in minutes until deemed offline
  var url = 'https://vannovervakning.com/api/v1/measurements/1/';
  return axios.get(url)
    .then( (res) => {
        var d = new Date();
        d = Date.now() - Date.parse(res.data.data.TEMPERATURE[0]["timeCreated"] ) - 1000*60*(d.dst());
        if(d > threshold*1000*60){
          return false;
        }
        return true;
      })
    .catch( (error) => {
      console.log(error);
    });
}


Date.prototype.dst = function() //calculates the time difference in norway according to summer time and winter time
{
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    var max = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    if (this.getTimezoneOffset() > max){
      return this.getTimezoneOffset();
    }
    else{
      return max;
    }
}


function toTime(milliseconds){
  var string = "";
  var seconds = Math.round((milliseconds/1000) % 60);
  var minutes = Math.round(((milliseconds/1000)/60)%60);
  var h = Math.round((((milliseconds/1000)/60)/60)%24);
  var days =Math.round(((((milliseconds/1000)/60)/60)/24) % 365);
  var years = Math.round((((((milliseconds/1000)/60)/60)/24)/365));
  if(years > 0){
    string += years.toString() + " år ";
  }
  if(days > 0){
    if(days === 1){
      string += days.toString() + " dag ";
    }
    else {
      string += days.toString() + " dager ";
    }
  }
  if(h > 0){
    if(h === 1){
      string += h.toString() + " time ";
    }
    else {
      string += h.toString() + " timer ";
    }
  }
  if(minutes > 0){
    if(minutes === 1){
      string += minutes.toString() + " minutt ";
    }
    else {
      string += minutes.toString() + " minutter ";
    }
  }
  if(seconds > 0){
    if(seconds === 1){
      string += seconds.toString() + " sekund ";
    }
    else {
      string += seconds.toString() + " sekunder ";
    }
  }
  return string;
}



function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

		csv.push(row.join(","));
	}

    // Download CSV
    download_csv(csv.join("\n"), filename);
}
export {toTime,export_table_to_csv, lastHeard, status};
