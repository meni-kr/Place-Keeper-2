'use strict'



function onSet(ev){
    ev.preventDefault()

    const elEmail = document.getElementById('email').value
    setEmail(elEmail)
    

    const elAge = document.getElementById('age').value
    setAge(elAge)
    
    const elBackGroundColor = document.getElementById('background-color').value
    setBackGroundColor(elBackGroundColor)

    const elTextColor = document.getElementById('color').value
    setColr(elTextColor)

    const elDateOfBirth = document.getElementById('dob').value
    setDateOfBirth(elDateOfBirth)

    const elBirthTime = document.getElementById('time').value
    setBirthTime(elBirthTime)

}

function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
}