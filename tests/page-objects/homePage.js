class HomePage {

    get usernameField(){ return $(`[id="user-name"]`)};
    get passwordField(){ return $(`[id="password"]`)};
    get loginButton(){ return $(`[id="login-button"]`)}

    async inputUsernameAndPassword(username,password){
       await this.usernameField.setValue(username);
       await  this.passwordField.setValue(password);
    }

    async clickLogin(){
       await this.loginButton.click();
    }

}

export default new HomePage();