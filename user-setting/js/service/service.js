'use strict'

const STORAGE_KEY = 'user-setting'

const user = {
    email: '',
    age : '',
    bgColor : '',
    txtColor: '',
    birthDate: '',
    birthTime: ''
}


function getSetting(){
    return user
}

function setEmail(email) {
    user.email = email
    _save()
}

function setAge(age) {
    user.age = age
    _save()
}

function setBackGroundColor(BGColor){
    user.bgColor = BGColor
    _save()
}

function setColr(color) {
    user.txtColor = color
    _save()
}

function setDateOfBirth(dob) {
    user.birthDate = dob
    _save()
}

function setBirthTime(birthTime) {
    user.birthTime = birthTime
    _save()
}


function _save() {
    saveToStorage(STORAGE_KEY, user)
}
