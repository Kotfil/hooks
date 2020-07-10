import React, {useState} from 'react';
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

        const [color,setColor] = useState('black')
        const [fontSize,setFontSize] = useState(14);
    return (
        <div style={{padding: '15px', backgroundColor: color,fontSize: `${fontSize}px`}}>
            <h1>Hello Fronter</h1>
            <button onClick={() => setColor('black')}>Dark</button>
            <button onClick={() => setColor('white')}>Light</button>
            <button onClick={() => setFontSize((s) => s + 2)}>+</button>
        </div>

    );
};

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

