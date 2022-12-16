import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BathroomTile from './BathroomTile';

class ShowBathrooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bathrooms: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/bathrooms')
      .then(res => {
        this.setState({
          bathrooms: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBathrooms');
      })
  };


  render() {
    const bathrooms = this.state.bathrooms;
    console.log("PrintBathroom: " + bathrooms);
    let bathroomsList;

    if(!bathrooms) {
      bathroomsList = "there is no bathroom record!";
    } else {
      bathroomsList = bathrooms.map((bathroom, k) =>
        <BathroomTile bathroom={bathroom} key={k} />
      );
    }

    return (
      <div className="ShowBathrooms">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Bathroom Reviews</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-bathroom" className="btn btn-outline-warning float-right">
                + Add New Bathroom
              </Link>
            </div>

          </div>

          <div className="list">
                {bathroomsList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBathrooms;