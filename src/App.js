import "./App.css";

const a = test();
console.log(a);

function test() {
  return 1;
}

function App() {
  return <div id="test">{a}</div>;
}

export default App;
