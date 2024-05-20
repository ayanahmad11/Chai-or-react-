
import Bread from "./Bread"

function App() {
  const username = "hitesh bhai" /*  known as expression  or evaluated expression
  inside curly braces {} username is treated as variable */
  return (
   <div>
   
    <h1>
      chai aur react with {username} | HC 
    </h1>
    <Bread>
    </Bread>
    <p>
      take your snack at 5:00 pm
    </p>

   </div>
   
  )

}

export default App
