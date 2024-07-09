class LoginPage {
  get username() {
    return $("//input[@id='user-name']");
  }
  get password() {
    return $("//input[@id='password']");
  }
  get loginBtn() {
    return $("//input[@id='login-button']");
  }

  async openURL(url) {
    await browser.url(url);
    browser.pause(url);
  }
  async login(userName, passWord) {
    await this.username.setValue(userName);
    await this.password.setValue(passWord);
    await this.loginBtn.click();
  }
}
export default new LoginPage();
