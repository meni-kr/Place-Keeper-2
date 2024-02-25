'use strict'


function onInit(){
    renderSetting()
}

function renderSetting(){
    
    const userSetting = updateUserPraf()
    
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = userSetting.bgColor
    elBody.style.color = userSetting.txtColor

    const elBirthTime = document.querySelector('.birth-time')
    elBirthTime.innerText= user.birthTime
}