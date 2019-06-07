const dotenv = require('dotenv');
dotenv.config();
const React = require('react');
const fetch = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: {},
    };
  }

  componentWillMount() {
    console.log(process.env.API);
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

