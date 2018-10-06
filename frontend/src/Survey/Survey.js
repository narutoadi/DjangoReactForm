import React from 'react';
import axios from 'axios';

class Reservation extends React.Component {
    constructor(props) {
      super(props);
      axios.defaults.xsrfHeaderName = "X-CSRFToken";
      axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
      this.state = {name: 'name', age: '15'};
  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeAge = this.handleChangeAge.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeAge(event) {
        this.setState({age: event.target.value});
      }
  
    handleSubmit(event) {
        axios.defaults.xsrfHeaderName = "X-CSRFToken";
        axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
        const body = {
            name: this.state.name,
            age: this.state.age
        };
        axios.post('http://127.0.0.1:8000/api/v1/survey/',{body})
            .then(response => console.log("post response = ",response))
        console.log("submission over!!")
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChangeName} />
            </label>
            <label>
                Age:
                <input type="text" value={this.state.age} onChange={this.handleChangeAge}/>
            </label>
          <input type="submit" value="Submit" />
        </form>

      );
    }
  }

  export default Reservation;