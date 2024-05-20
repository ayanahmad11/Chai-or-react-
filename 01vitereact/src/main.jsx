import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
 
  return (
    <div>
      <h1>
        Custom App!
      </h1>
    </div>
  )
}
const ReactElement = {
  type: 'a',
  props: {
     href:'https://google.com',
   target:'_blank'   
  },
  children : 'Click me to visit google'
}
const AnotherElement = (
  <a href="https://google.com" target = '_blank'>visit google</a>
)
const anotherUser = "chai or code"
const reactElement = React.createElement(
  'a',  // 1st parameter is tag  e.g  P tag A tag etc.
  {href:'https://google.com',target:'_blank'}, // attributes
  'click me to  visit google ',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  //  AnotherElement // ** Working absolutely fine**
  reactElement
  // <MyApp />
  // MyApp()
  // <App />
)
