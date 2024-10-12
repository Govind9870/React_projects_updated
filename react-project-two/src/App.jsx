import UserCard from "./componants/UserCard"
import './App.css'

function App() {

  return (
    <div className="container">
      <UserCard name="Govind Jaiswal" desc="Description 01" style={{"border-radius":"10px"}}/>
      <UserCard name="Govind Gupta" desc="Description 02" style={{"border-radius":"10px"}}/>
      <UserCard name="Govind" desc="Description 03" style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
