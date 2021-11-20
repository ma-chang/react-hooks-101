import React, { useState, useEffect } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  /*初回&stateが変更されるために実行*/
  useEffect(()=> {
    console.log("This is like componentDidMount or componentDidUpdate.") 
  })

  /* 初回のみ実行*/
  useEffect(()=> {
    console.log("This is like componentDidMount.") 
  }, [])

  /* nameaが変更される時のみ実行  */
  useEffect(()=> {
    console.log("This is like componentDidMount only name.") 
  }, [name])
  const renderPeriod = () => {
    console.log("renderperiod renders period.")
  }

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
        {/*renderPeriod()*/}
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setState({ ...state, name: e.target.value });
        }}
      />
    </>
  );
};

App.defaultProps = {
  name: "田中太郎",
  price: 1000,
};
export default App;
