import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const task = await fetch('http://localhost:4000');
            const resultJson = await task.json();
            setData(resultJson);
        };

        fetchData();
    }, []);
    console.log(data);

    return <div className="App"></div>;
}

export default App;
