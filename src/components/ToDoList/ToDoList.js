function ToDoList({ list, setList }) {

    const handleClick = (e) => {
        let newList = [...list]
        newList.splice(e.target.id, 1)
        setList(newList)
    }

    return (
        <ul>
            {list.map((elem, i) => (
                <li key={i}>
                    {elem}
                    <button type="button" onClick={handleClick} id={i}>Elimina</button>
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;
