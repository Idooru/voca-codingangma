import Hello from "./component/Hello";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Hello />
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
