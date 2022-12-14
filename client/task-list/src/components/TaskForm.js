import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = () => {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const task = await fetch('http://localhost:4000');
            const resultJson = await task.json();
            setData(resultJson);
        };

        fetchData();
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    const onCreateTask = () => {
        axios
            .post('http://localhost:4000/createTask', { title, description })
            .then((res) => console.log('success', res))
            .catch((err) => console.error(err));
        console.log(data);
        setDescription('');
        setTitle('');
    };
    return (
        <form onChange={onSubmitHandler}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type={'text'} placeholder="Title" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} type={'text'} placeholder="Description" />
            <button onClick={onCreateTask} type="submit">
                Submit
            </button>
        </form>
    );
};

export default TaskForm;
