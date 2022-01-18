const ToDo = (props) => {
    const toDoClasses = [];

    if(props.toDo.complete){
        toDoClasses.push("strike-through");
    }

    return (
        <div>
            <input style={{ marginRight: "10px" }} type="checkbox" checked={props.toDo.complete} onChange={(e) => { props.handleComplete(props.i) }}></input>
            <span className={toDoClasses.join(" ")}>{props.toDo.text}</span>
            <button style={{ marginLeft: "10px" }} onClick={(e) => { props.handleDelete(props.i) }}>Delete</button>
        </div>
    );
};

export default ToDo;