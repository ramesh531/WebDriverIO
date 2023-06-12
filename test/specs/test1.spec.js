describe("Demo Test", function() {

    it("My First Test", async()=> {

        browser.url('https://google.com')
        browser.pause(2000)
      // await $('[//div[text()='Accept all']]').click()

      // await $('(//div[contains(text(),'Accept')])[2]')

       await $('[class="QS5gu sy4vM"]').click()
       browser.pause(2000)
        await $('[name="q"]').setValue('WebDriverIo')

        await $('[name="btnK"]').click()

        //Pressing the Enter key in the Keyboard
        browser.keys('Enter')
        browser.pause(2000)
    })
})