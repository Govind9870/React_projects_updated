
import './App.css'

function App() {

  function handleClick() {
    alert("I am Clicked");
  }

  function handleMouseOver() {
    alert("I am over the Mouse")
  }

  function handleInputChnage(e) {
    // console.log("Chnage the value in the given Input")
    console.log("Value till now: ", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Do you want to Submit the Form ?");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChnage}/>
        <button type='submit'>Submit</button>
      </form>

      {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
        This is a Para style
      </p>

      <button onClick={handleClick}>
      Click Me
    </button> */}
    </div>
  )
}

export default App
