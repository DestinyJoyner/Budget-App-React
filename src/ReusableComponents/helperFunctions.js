
function handleTextInput(e, stateVar, setFunction) {
    let value = e.target.value
    const id = e.target.id
    if(id === "initialTotal"){
        value = +e.target.value
        setFunction(value)
    }
    else{
        setFunction({...stateVar, [id]:value})
    }   
}

function handleNumberInput(e, stateVar, setFunction) {
    let value = +e.target.value
    const id = e.target.id
    setFunction({...stateVar, [id]:value})
}

export {
    handleTextInput,
    handleNumberInput,
}