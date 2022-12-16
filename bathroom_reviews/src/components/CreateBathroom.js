import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateBathroom extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        location:'',
        address:'',
        description:'',
        rating:''
      };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      location: this.state.location,
      address: this.state.address,
      description: this.state.description,
      rating: this.state.rating
    };

    axios
      .post('http://localhost:8082/api/bathrooms', data)
      .then(res => {
        this.setState({
          name: '',
          location:'',
          address:'',
          description:'',
          rating:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBathroom!");
      })
  };

  render() {
    return (
      <div className="CreateBathroom">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Back to Bathroom List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Bathroom</h1>
              <p className="lead text-center">
                  Create new bathroom
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of the bathroom'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Location of bathroom'
                    name='location'
                    className='form-control'
                    value={this.state.location}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Address of bathroom'
                    name='address'
                    className='form-control'
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this bathroom'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Rate this bathroom'
                    name='rating'
                    className='form-control'
                    value={this.state.rating}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBathroom;