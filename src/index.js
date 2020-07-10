import React, {useState, useEffect, Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button onClick={() => setValue((v) => v + 1)}>+</button>
                <button onClick={() => setVisible(false)}>hide</button>
                <ClassCounter value={value}/>
                <HookCounter value={value}/>
                <Notification />
            </div>
        );
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    }
};

const HookCounter = ({value}) => {
useEffect(() => console.log('useEffect'),[value])
useEffect(() => console.log('update'))
useEffect(() => ()  => console.log('unmount'))
    return <p> {value} </p>;
};

const Notification = () => {

    const [visible,setVisible] = useState(true)


    return (
        <div>
            {visible && <p>Hello</p>}
        </div>
    )
}

class ClassCounter extends Component {
    componentDidMount() {
        console.log('class:mount');
    }


    componentDidUpdate(props) {
        console.log('class: update');
    }

    componentWillUnmount() {
        console.log('class: unmount');
    }

    render() {
        return <p>{this.props.value}</p>
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

