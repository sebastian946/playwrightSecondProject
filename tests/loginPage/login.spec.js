const {test} = require('@playwright/test');
const LoginPage = require('../PageObjects/LoginPage');
const url = 'https://www.saucedemo.com/';
const fs = require('fs')
test('Successfuly login', async function({page}){
    const login = new LoginPage(page);
    await page.goto(url);
    await login.fillLogin('standard_user','secret_sauce');
    await login.validateLoginSuccess();
})


test('Incorrect Validation', async function({page}){
    const login = new LoginPage(page);
    await page.goto(url)
    await login.fillLogin('standard_user','secret_sauce1')
    await login.showErrorMessage('not match');
})



