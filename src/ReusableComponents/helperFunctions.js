
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
    const value = +e.target.value
    const id = e.target.id
    setFunction({...stateVar, [id]:value})
}

function handleRadioInput(e, stateVar, setFunction, checkVar, setCheckFunction){
    let value = e.target.value
    const id = e.target.id
    if(value === "true") value = true
    if(value === "false") value = false
    setCheckFunction(!value)
    setFunction({...stateVar, [id]: !value})
}

// string in this format -> "2023-01-10"
function convertDate(str) {
    let date = str.slice(2, 10).split("-");
    date.push(date[0]);
    date.shift();
    return date.join("/");
  }

export {
    handleTextInput,
    handleNumberInput,
    handleRadioInput,
    convertDate,
}