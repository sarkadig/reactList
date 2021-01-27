import React from 'react';
import './App.css';

function App() {

  let css = ["position", "display", "border", "padding", "margin", "overflow", "background", "font", "text", "transform"];

  const cssItems = css.map((string) =>
    <li key={string.toString()}>
      {string}
      <input type="checkbox"/>
    </li>
  );
 
  return (
    <div className="App">
      <form>
        <ul>{cssItems}</ul>
      </form>
    </div>
  );
}

export default App;
