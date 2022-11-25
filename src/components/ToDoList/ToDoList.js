
function ToDoList({ list, setList }) {

    const handleOnChange = (e, indice) => {
       /*  setNuovoElemento(e.target.value) */
        let newList = [...list]
        newList[indice] = e.target.value
        setList(newList)
    }

    const handleClickDelete = ( indice) => {
        let newList = [...list]
        newList.splice(indice, 1)
        setList(newList)
    }

/*     const handleClickUpdate = (indice) => {
        document.getElementById("input"+indice).disabled = false
    }

    const handleOnBlur = (indice) => {
        document.getElementById("input"+indice).disabled = true
    } */

    return (
        <ul>
            {list.map((elem, i) => (
                <li key={i}>
                    <input className="task" type="text" value={elem} id={"input"+i}  onChange={(e) => handleOnChange(e, i)} /* disabled={true} onBlur={() => handleOnBlur(i)} *//>
                    <button type="button" onClick={() => handleClickDelete(i)} >Elimina</button>
                   {/*  <button type="button" onClick={() => handleClickUpdate(i)} >Modifica</button> */}
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;
