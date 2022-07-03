const assert = require('assert');
const puppeteer = require('puppeteer');
const MailSlurp = require('mailslurp-client').default;
const mailslurp = new MailSlurp({ apiKey: "9c838aac9e3df48250de77efe9b935f3e4004f701f660fbbebf27caaa931f68f" });


describe('sign-up process', () => {
    it('can load demo site', async () => {
        await page.goto('https://playground.mailslurp.com/')
        await expect(page).toMatch('Sign in to your account')

    });
    it('can log in', async () => {
        const page = await browser.newPage();
        await page.goto('https://playground.mailslurp.com/')
        await expect(page).toMatch('Sign in to your account')
        await expect(page).toFillForm('#root', {
            username: 'fc4da8e3-5798-4e4d-8ab6-4275112e55fa@mailslurp.com',
            password: '123456789'
        })
        await expect(page).toClick('[data-test="sign-in-sign-in-button"]')


    });
    it('Shows Welcome', async () => {
        jest.setTimeout(5000);
        await page.waitForSelector('.Section__container___3YYTG');
    })



})