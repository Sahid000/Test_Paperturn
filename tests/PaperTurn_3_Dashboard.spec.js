const {test, expect} = require('@playwright/test');

test('Varify the PaperTurn_Dashboard_Page', async ({page, baseURL})=>{

    await page.goto(`${baseURL}/login`)

    //Verify the PaperTurn Login for Dashboard_Page
    await page.getByPlaceholder('E-mail').click();
    //provide valid_Username
    await page.getByPlaceholder('E-mail').fill('sahidhossain000@outlook.com');
    await page.getByPlaceholder('Password').click();
    //provide valid_Password
    await page.getByPlaceholder('Password').fill('Admin2024@#$');
    //Click on login button
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(4000);
    // //verify the clientName
    const clientName= await page.locator('//span[@id=\'workspace-selection\']')
    await expect(clientName).toBeVisible();

    //click on paperturn_cookeis
    await page.getByRole('button', { name: 'Allow all cookies' }).click();
    await page.waitForTimeout(2000);

    //Paperturn_Scroll_Down after login
    await page.evaluate(() => {
        window.scrollBy(0, 2450);
    });
    await page.waitForTimeout(2000);

    //Paperturn_Scroll_UP after login  t
    await page.evaluate(() => {
        window.scrollBy(0, -2450);
    });
    await page.waitForTimeout(2000);

    //Verify the PaperTurn Dashboard_Page
    await page.locator('//a[@class=\'sf-with-ul\']//span[contains(text(),\'Examples\')]').click();
    await page.getByRole('banner').getByRole('link', { name: 'Online Magazines' }).click();
    await page.getByRole('link', { name: 'Upgrade' }).click();
    await page.getByRole('link', { name: 'Help Guide' }).click();
    await page.getByRole('link', { name: 'Contact' }).first().click();
    //wait page.locator('//li[@class=\'menu sfHover\']//a[normalize-space()=\'Contact\']').click();
    await page.getByRole('link', { name: 'Paperturn', exact: true }).click();
    await page.getByRole('link', { name: '   Sahid-SQA' }).click();
    await page.waitForTimeout(2000);
    await page.locator('//header/div[1]/div[1]/div[1]/div[3]/div[2]/ul[1]/li[5]/ul[1]/li[8]/a[1]/span[1]').click();

    //await page.locator('//html[1]/body[1]/div[2]/header[1]/div[1]/div[1]/div[1]/div[3]/div[2]/ul[1]/li[5]/ul[1]/li[8]/a[1]/span[1]').click();
    //await page.locator('(//span[contains(text(),\'Log out\')])[1]').click();
    //await page.locator('//header/div[1]/div[1]/div[1]/div[3]/div[2]/ul[1]/li[5]/ul[1]/li[8]/a[1]/span[1]').click();

   })
