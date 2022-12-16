import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBathroomDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bathroom: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/bathrooms/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBathroomDetails-API-response: " + res.data);
        this.setState({
          bathroom: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBathroomDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/bathrooms/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBathroomDetails_deleteClick");
      })
  };


  render() {

    const bathroom = this.state.bathroom;
    let BathroomItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ bathroom.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Location</td>
            <td>{ bathroom.location }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Address</td>
            <td>{ bathroom.address }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Description</td>
            <td>{ bathroom.description }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Rating</td>
            <td>{ bathroom.rating }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowBathroomDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Bathroom List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{bathroom.name}'s Record</h1>
              <p className="lead text-center">
                  {bathroom.name}'s Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BathroomItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,bathroom._id)}>Delete Bathroom</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-bathroom/${bathroom._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit {bathroom.name}
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Bathroom</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Bathroom</button> */}

        </div>
      </div>
    );
  }
}

export default showBathroomDetails;