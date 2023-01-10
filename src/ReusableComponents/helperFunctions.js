
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
// str -> "2023-01-10"
  function dateObjCompare(str) {
    const todaysDate = new Date(convertDate(new Date(Date()).toISOString().split(``).splice(0,10).join(``)))

    const transacDate = new Date(convertDate(str))

    return  transacDate > todaysDate
                    
  }

  function updateTotal(initValue, arr, setFunction, setFunction2) {
    let sum = 0
    arr.forEach(({id, amount}) => {
        if(id) sum += amount
    })
    setFunction(sum)
    setFunction2(initValue + sum)
   }

  // function for converting inputted string for label/ inputs
  function convertInput(input){
    input.trim()
    const newInput = `${input.charAt(0).toUpperCase()}${input.slice(1)}`
    return newInput.split(/(?=[A-Z])/).join(` `)
}

export {
    handleTextInput,
    handleNumberInput,
    convertObjValues,
    convertDate,
    convertInput,
    dateObjCompare,
    updateTotal,
}