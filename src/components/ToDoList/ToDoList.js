function ToDoList({ list }) {
    return (
        <ul>
            {list.map((elem, i) => (
                <li key={i}>{elem}</li>
            ))}
        </ul>
    );
}

export default ToDoList;
