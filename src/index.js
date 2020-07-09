import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => {
    return (
        <div>
            <HookSwitcher/>
        </div>
    )
}

const HookSwitcher = () => {

const  [color] = useState('black');

    return (

        <div style={{padding: '10px', backgroundColor: color}}>
            <button onClick={() => {}}>Light</button>
            <button onClick={() => {}}>Black</button>
        </div>
    );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

