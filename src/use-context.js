import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const MyContext = React.createContext();

const App = () => {
    return (
        <MyContext.Provider value="Hello world 22222">
            <Child/>
        </MyContext.Provider>
    )
}

const Child = () => {
    const value = useContext(MyContext);
    return (
    <p>{value}</p>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

