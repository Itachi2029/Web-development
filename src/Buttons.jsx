function Buttons(props){
    return <button style={{borderColor:'skyblue',background:'floralwhite'
    }} onClick={props.onClick}> {props.name}</button>;
}

export default Buttons;


