
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking Draw should display choices', async () => {
    let drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()

    await driver.sleep(2000)

    let choices = driver.findElement(By.id('choices'))
    let displayed = await choices.isDisplayed()

    expect(displayed).toBe(true)

})

test('Clicking add to due should display dive with id of player-id', async () => {
    let drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()

    await driver.sleep(2000)

    driver.findElements(By.className("bot-btn")).then(function (elements) {
        elements[0].click()
    });
    await driver.sleep(5000)

    let playerId = driver.findElement(By.id('player-duo'))
    let displayed = await playerId.isDisplayed()

    expect(displayed).toBe(true)
});
