import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';


class Profile extends Component {

  state = {
      id: 1,
      details: []
  }

  componentWillMount() {
    this.fetchdetails();
  }

  componentDidMount() {

  }

  fetchdetails = () => {
    const getID = 'https://graph.facebook.com/me?access_token=' + this.props.token;
    fetch(getID)
      .then((response) => response.json())
        .then((responseData) => this.setState({ id: responseData.id }, () => {
          const fetchdetails = 'https://graph.facebook.com/v2.9/' + this.state.id + '?fields=name,first_name,last_name,gender,age_range,email&access_token=' + this.props.token;
          fetch(fetchdetails)
            .then((response) => response.json())
              .then((responseData1) => this.setState({ details: responseData1 }));
          }
       ));
  }
  render() {
    return (
      // console.log(this.state.id),
      // console.log(this.state.details),
      <View style={styles.container}>
        <Text>
          {this.state.details.name}
        </Text>
        <Text>
          {this.state.details.gender}
        </Text>
        <Text>
          {this.state.details.email}
        </Text>
        <Text>
          {this.state.details.id}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps)(Profile);
