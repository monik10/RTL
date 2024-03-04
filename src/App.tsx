import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import Counter from './components/Counter/Counter';
import { AppProviders } from "./Providers/AppProviders";
import MuiMode from "./components/Mui/MuiMode";
// import Application from './components/Application/Application';
// import Skills from './components/Skills/Skills';

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application/>
     <Skills skills={[]}/> */}
        {/* <Counter/> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
