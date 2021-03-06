import React,{Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
//import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';


class WeatherList extends Component{



renderWeather(cityData){
	const name=cityData.city.name;
	const temps =cityData.list.map(weather=>weather.main.temp);
	const pressures=cityData.list.map(weather=>weather.main.pressure);
	const humidity=cityData.list.map(weather=>weather.main.humidity);

	return(
      <tr key={name}>
         
         <td>{name}</td>
         
         <td><Chart key={uuid()} data={temps} height={120} width={180} color="orange" /></td>
         <td><Chart key={uuid()} data={pressures} height={120} width={180}  color="red" /></td>
         <td><Chart key={uuid()}  data={humidity} height={120} width={180}  color="green" /></td>
           
            
         </tr>
		 );
                   }


	render(){

		return(
        <table className="table table-hover">

          <thead>
            <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure </th>
                <th>Humidity </th>
            </tr>
          </thead>
          <tbody>
          {this.props.weather.map(this.renderWeather)}
          </tbody>    

        

        </table>  
         )




	}
}

function mapStateToProps({weather}){


	return {weather};
}


export default connect(mapStateToProps)(WeatherList);