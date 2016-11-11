// autorun at startup

// Import React
import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create component
class App extends Component {
  constructor(props) {
      super(props);
      this.state = { images:[] }; // ONLY time you directly set state
  }

  componentDidMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then(response => {
      //console.log('About to update state; rerendering');
      this.setState({images: response.data.data}) 
    });
  }

  render() {
    //console.log(this.state.images);
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

// Render component to the screen
Meteor.startup(() => {
  //console.log('Initial render...');
  ReactDOM.render(<App />, document.querySelector('.container'));
});
