'use strict'

const STORAGE_KEY = 'user-setting'

const user = {
    bgColor : '',
    txtColor: '',
    birthDate: '',
    birthTime: ''

}


function updateUserPraf(){
    
    user.bgColor=getFromStorage().bgColor
    user.txtColor=getFromStorage().txtColor
    user.birthDate=getFromStorage().birthDate
    user.birthTime=getFromStorage().birthTime
    
    return user
}


function getFromStorage(){
    const userSetting = loadFromStorage(STORAGE_KEY)
    return userSetting
}