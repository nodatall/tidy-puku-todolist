const React = require('react')
const { render } = require('react-dom')
import App from './components/App.jsx'

render(
  <App />,
  document.getElementById('mountPoint')
)
