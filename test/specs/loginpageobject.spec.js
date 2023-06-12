const LoginPage = require('../pages/login.page')

describe("login Test using page object", async () => {

    it("login Test using page object ", async () => {

        browser.url("https://the-internet.herokuapp.com/login")

        await LoginPage.login('tomsmith','SuperSecretPassword!')

        await LoginPage.checkMessage('You logged into a secure area!')

       // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')




    })
})