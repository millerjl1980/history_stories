import React, { Component }from 'react';
import axios from 'axios';
import './App.css';

const ITEMS_URL = "http://127.0.0.1:8080/example.php";

class App extends Component {
  
  state = {
    items: []
  };

  componentDidMount() {
    axios.get(ITEMS_URL)
    .then(res => {
      const items = res.data.results;
      console.log(items)
      this.setState({ items });
    })
  };

  render() {
    const { items = [] } = this.state;
    return (
    <React.Fragment>
      
    <div className="App">
      {items.map(item => (
        <div class="row project-item">
          <div class="col-sm-3">
              <img
              alt={item.attribute_values[0].value.text}
              src={item.digital_assets[0].large_thumbnail}
              />
          </div>
          <div class="col-sm-3 col">
            {item.attribute_values[0].value.text}
          </div>
          <div class="col-sm-3 col">
            {item.attribute_values[1].value.date}
          </div>
          <div class="col-sm-3">
             {item.attribute_values[3].value.text}
          </div>
      </div>
      ))}
    </div>
    </React.Fragment>
    )
  }
}

export default App;
