
describe("login Test", async () => {

    it("login Test ", async () => {

        browser.url("https://the-internet.herokuapp.com/login")

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

       // await $('#flash').getText()

        await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')




    })
})