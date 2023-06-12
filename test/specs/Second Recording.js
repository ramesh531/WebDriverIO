describe("Second Recording", () => {
  it("tests Second Recording", async () => {
    await browser.setWindowSize(1263, 205)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#password").setValue("SuperSecretP")
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("aria/Logout").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
