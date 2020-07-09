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

const  [color,setColor] = useState('gray');
const  [fontSize,setFontSize] = useState(14);

    return (

        <div style={{padding: '10px', backgroundColor:  color,
        fontSize: `${fontSize}px`}}>
            Hello
            <button onClick={() => setFontSize((s) => s + 2)}>11</button>
            <button onClick={() => setColor('gray')}>gray</button>
            <button onClick={() => setColor('black')}>Black</button>
        </div>
    );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

