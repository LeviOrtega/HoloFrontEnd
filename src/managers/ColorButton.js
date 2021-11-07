function ColorButton(props){
    let c = props.color
    return (
        
        <button className="button"
        onClick={() => props.onClick()}
        style={{ 
            background: c,
        }}
        
        ></button>
    )
}

export default ColorButton