const dotenv = require('dotenv');
const React = require('react');
const fetch = require('axios');
dotenv.config();



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: {},
    };
  }

  componentWillMount() {
    const resp = fetch(process.env.API);
    // this.setState({
    //   resp,
    // });
  }

  render() {
    return React.createElement("pre", null, JSON.stringify(this.state.resp));
  }
}

module.exports = App;

