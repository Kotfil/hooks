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
                <PlanetInfo id={value} />
            </div>
        );
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    }
};

const PlanetInfo = ({id}) => {

    fetch('https://swapi.dev/api/planets/')
        .then(res => res.json())
        .then(data => console.log(data.results))
    console.log(dataLeng)
    return (
        <div>

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

