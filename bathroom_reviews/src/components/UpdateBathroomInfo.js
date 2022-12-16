import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateBathroomInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        location: '',
        address: '',
        description: '',
        rating:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/bathrooms/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, Bathroom: res.data})
        this.setState({
        name: res.data.name,
        location: res.data.location,
        address: res.data.address,
        description: res.data.description,
        rating: res.data.rating
        })
      })
      .catch(err => {
        console.log("Error from UpdateBathroomInfo");
      })
  };

  onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
        e.preventDefault();

    const data = {
        name: this.data.name,
        location: this.data.location,
        address: this.data.address,
        description: this.data.description,
        rating: this.data.rating
    };

    axios
      .put('http://localhost:8082/api/bathrooms/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-Bathroom/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateBathroomInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBathroomInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Bathroom List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Bathroom</h1>
              <p className="lead text-center">
                  Update Bathroom's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input
                type='text'
                placeholder='Name of the Bathroom'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="location">Location</label>
              <input
                type='text'
                placeholder='Location'
                name='location'
                className='form-control'
                value={this.state.location}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="address">Address</label>
              <input
                type='text'
                placeholder='Address'
                name='address'
                className='form-control'
                value={this.state.address}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this Bathroom'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Rating</label>
              <input
                type='text'
                placeholder='Rate this Bathroom'
                name='rating'
                className='form-control'
                value={this.state.rating}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Bathroom</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateBathroomInfo;
