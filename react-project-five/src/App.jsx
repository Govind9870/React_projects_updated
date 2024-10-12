import {useState} from 'react'
import './App.css'
import Card from './componants/Card'

function App() {
  // create state
  // manage state
  // change state
  // sabhi child me state ko synckra dunga

  const [name, setName] = useState('');
  
  return (
    <div>
      <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      {/* <p> I am the parent and value of the name is- {name}</p>    */}
    </div>
  )
}

export default App
