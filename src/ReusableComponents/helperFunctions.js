
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

// function when submitting form to adjust amount (positive/ negative)
function convertObjValues(obj, stateVar) {
    if(stateVar === "expense") obj.amount = -Math.abs(obj.amount)
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
    convertObjValues,
    convertDate,
}