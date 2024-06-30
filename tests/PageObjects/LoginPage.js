const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page){
        this.page = page;
        this.username = page.getByRole('textbox',{name: 'Username'});
        this.password = page.getByRole('textbox', {name: 'Password'});
        this.button_login = page.locator('//input[@id="login-button"]');
        this.messageAlert = page.locator('//h3[@data-test="error"]');
    }

    async sendUsername(user){
        await this.username.fill(user);
    }
    async sendPassword(password){
        await this.password.fill(password);
    }
    async clickButton(){
        await this.button_login.click();
    }
    async validateLoginSuccess(){
        await expect(this.page.locator('//div[@id="inventory_container"]').first()).toBeVisible();
    }

    async showErrorMessage(messageAlert){
        await expect(this.messageAlert).toBeVisible();
        const textValidation = await this.messageAlert.textContent();
        console.log(textValidation)
        await expect(textValidation).toContain(messageAlert);
    }
    async fillLogin(user,password){
        await this.sendUsername(user);
        await this.sendPassword(password);
        await this.clickButton();
    }
}
module.exports = LoginPage;