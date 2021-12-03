import Hello from "./Hello";


function App() {
  const name = 'Jane Doe';
  const handleClick = (text) => {
    alert('Button Clicked ' + text)
  }
  return (
    <div >
      <Hello name={name} handleClick={handleClick}/>
    </div>
  );
}

export default App;
