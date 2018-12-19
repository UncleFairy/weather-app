import React from 'react';
import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'

const API_KEY ="83cfb46a3f3eba05c4ac4ac3ea909d93";

class App extends React.Component {
  state = {
      city: undefined,
      country: undefined,
      humidity: undefined,
      temperature: undefined,
      conditions: undefined,
      error: "",
  }
  getWeather = async (e)=> {
    try {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
        const data = await api_call.json();
        if (city && country) {
            this.setState({
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                temperature: data.main.temp,
                conditions: data.weather[0].description,
                error: ""
            });
        }
        else {
            this.setState({
                city: undefined,
                country: undefined,
                humidity: undefined,
                temperature: undefined,
                conditions: undefined,
                error: "Enter values, please"
            });
        }
    }
    catch(err){
        this.setState({
            city: undefined,
            country: undefined,
            humidity: undefined,
            temperature: undefined,
            conditions: undefined,
            error: "Incorrect values. Check the entered values, please..."
        });
    }
  }
  render() {
    return (
      <div className="wrapper">
          <div className="main">
          <div className="container-fluid">
             <div className="row">
                 <div className="col-sm-5 title">
                     <Title />
                 </div>
                 <div className="col-sm-7 form">
                     <Form getWeather={this.getWeather}/>
                     <Weather city={this.state.city} country={this.state.country} humidity={this.state.humidity} temp={this.state.temperature}
                              conditions={this.state.conditions} error={this.state.error} />
                 </div>
                 </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;







