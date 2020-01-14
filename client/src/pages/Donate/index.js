import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import Navbar from "../../components/Navbar";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

import "./style.css";

class Donate extends Component {
  state = {
    userName: "",
    donations: [],
    amount: ""
  };

  componentDidMount() {
    const userName = localStorage.getItem("email");
    if (!userName) {
      //redirect to login
      this.props.history.push("/login");
    } else {
      this.setState({ userName });
      this.loadDonations();
    }
  }

  loadDonations = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      API.getDonations(userId)
        .then(res => {
          this.setState({
            donation: res.data,
            amount: ""
          });
          console.log(res);
        })
        .catch(err => console.log(err));
    } else {
      this.props.history.push("/login");
    }
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState(
      {
        amount: value
      },
      () => console.log(this.state)
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const userId = localStorage.getItem("userId");
    API.postDonation({
      amount: this.state.amount,
      UserId: userId
    })
      .then(res => this.loadDonations())
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="donate">
        <Container>
          <Row>
            <Col size="md-3">
              <h2>{this.state.userName}</h2>
            </Col>
            <Col size="md-9">
              <h1>Swaddle A Penguin</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <h4>
                The World Wildlife Fund is our favorite organization for saving
                animals. If you would like to help the penguins please pledge to
                donate.
              </h4>
              <p>
                Please note - no financial information will be requested at this
                time.
              </p>
              <form>
                <Input
                  value={this.state.value}
                  changeHandler={this.handleInputChange}
                  name="Donation"
                  placeholder="$ 0.00"
                />
                <div className="text-center">
                  <button
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Donate
                  </button>
                </div>
              </form>
            </Col>
            <Col size="md-6">
              <h2>{this.state.userName}'s Donations:</h2>
              {this.state.donations.length ? (
                <List>
                  {this.state.donations.map(donate => (
                    <ListItem>{donate.amount}</ListItem>
                  ))}
                </List>
              ) : (
                <h3>You haven't donated yet.</h3>
              )}
              {/* <div>
                <h2>Total: {}/h2>
              </div> */}
            </Col>
            <Navbar />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Donate;
