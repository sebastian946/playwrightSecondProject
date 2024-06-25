const {test} = require('@playwright/test');
const LoginPage = require('../PageObjects/LoginPage');
test('Successfuly login', async function({page}){
    const login = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await login.fillLogin('standard_user','secret_sauce');
    await login.validateLoginSuccess();
})

