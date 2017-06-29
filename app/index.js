var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var Form = require('./components/form.js');

class App extends React.Component {
  render() {
    return (
      <div>
          <div className="container">
            <div className="jumbotron">
              <Form name="test"/>
            </div>
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
