import {test, expect} from '@playwright/test';

test('Homepege_title', async ({page, baseURL}) => {

    //Verify the PaperTurn Page title is Flipbook -
    await page.goto(`${baseURL}`)
    const pageTitle = page.title();
    console.log('Page title is:', pageTitle);
    await expect(page).toHaveTitle('Flipbook - Convert PDF into a stunning, online flipbook | PDF to flip');

})

test('Homepege_URL', async ({page, baseURL}) => {

    //Verify the Paperturn URL
    await page.goto(`${baseURL}`)
    const pageUrl = page.url();
    console.log('Page URL is:', pageUrl);
    await expect(page).toHaveURL('https://www.paperturn.com/');
    await page.waitForTimeout(2000);
})

test('Homepege_Logo', async ({page, baseURL}) => {

    //Verify the Paperturn Logo
    await page.goto(`${baseURL}`)
    const logoElement = await page.locator('.logo-holder')
    await expect(logoElement).toBeVisible()
    await page.waitForTimeout(5000);

})

test('Paperturn_Scrolling', async ({page, baseURL}) => {


    await page.goto(`${baseURL}`)

    //click on paperturn_cookeis
    await page.getByRole('button', { name: 'Allow all cookies' }).click();
    await page.waitForTimeout(2000);

    //Paperturn_Website_Scroll_Down JavaScript equivalent
    await page.evaluate(() => {
        window.scrollBy(0, 1250);
    });
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
        window.scrollBy(0, 1250);
    });
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
        window.scrollBy(0, 1250);
    });
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
        window.scrollBy(0, 1250);
    });
    await page.waitForTimeout(2000);

    //Paperturn_Website_Scroll_Up JavaScript equivalent
    await page.evaluate(() => {
        window.scrollBy(0, -1250);
    });
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
        window.scrollBy(0, -1250);
    });
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
        window.scrollBy(0, -1250);
    });
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
        window.scrollBy(0, -1250);
    });
    await page.waitForTimeout(2000);

})

test('Homepege_links', async ({page, baseURL}) => {

    //Verify all the links click on home page
    await page.goto(`${baseURL}`)
    await page.getByRole('button', {name: 'Allow all cookies'}).click();
    await page.getByRole('banner').getByRole('link', {name: 'Examples'}).click();
    await page.getByRole('banner').getByRole('link', {name: 'Online Catalogs'}).click();
    await page.getByRole('link', {name: 'Prices'}).click();
    await page.getByRole('link', {name: 'Features', exact: true}).click();
    await page.getByRole('link', {name: 'About Paperturn'}).click();
    //await page.locator('li[class=\'active sfHover\'] a').click()
    // await page.locator('//ul[@class=\'sf-menu pull-right sf-js-enabled sf-arrows\']//a[@class=\'btn-demo-call\'][normalize-space()=\'Book a Demo\']').click();
    // await page.locator('.material-icons.close__button').click();
    await page.locator('ul[class=\'sf-menu pull-right sf-js-enabled sf-arrows\'] a[class=\'red\']').click();
    await page.waitForTimeout(3000);

})


/*

test('Homepege_links', async ({page, baseURL}) => {

    //Verify all the links displayed on home page
    await page.goto(`${baseURL}`)
    const links = await page.$$('a');
    for (const link of links) {
        const linktext = await link.textContent();
        console.log(linktext);
    }
})

 */





