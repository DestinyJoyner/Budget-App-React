
function handleTextChange(e, stateVar, setFunction) {
    let value = e.target.value
    const id = e.target.id
    if(id === "initialTotal"){
        console.log(`id`)
        value = +e.target.value
        setFunction(value)
    }
    else{
        setFunction({...stateVar, [id]:value})
    }
    

}

export {
    handleTextChange,
}