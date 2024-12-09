const {test, expect} = require('@playwright/test');


test('Varify the PaperTurn_LoginPage_Title_And_URL', async ({page})=>{


    await page.goto('https://www.paperturn.com/login')

    //Verify the PaperTurn Page title is Login - Paperturn
    const pageTitle = page.title();
    console.log('Page title is:', pageTitle);
    await expect(page).toHaveTitle('Login - Paperturn');

    //Verify the Paperturn Login_URL
    const pageUrl = page.url();
    console.log('Page URL is:', pageUrl);
    await expect(page).toHaveURL('https://www.paperturn.com/login');
    await page.waitForTimeout(3000);

})


test('Varify the PaperTurn_Login_Empty_Email_And_Password', async ({page})=>{

    await page.goto('https://www.paperturn.com/login')

    //click on paperturn_cookeis
    await page.click('//button[@id=\'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll\']')
    await page.waitForTimeout(4000);

    //click on login text
    await page.click('//ul[@class=\'nav navbar-nav navbar-right hidden-xs\']//a[normalize-space()=\'Log in\']')
    await page.waitForTimeout(3000);
    //Click on login button empty_Login_Email&Password
    await page.click('//button[normalize-space()=\'Log in\']')
    await page.waitForTimeout(3000);
    await page.click('//button[normalize-space()=\'Log in\']')
    await page.waitForTimeout(3000);
    await page.click('//button[normalize-space()=\'Log in\']')
    await page.waitForTimeout(3000);
    await page.click('//button[normalize-space()=\'Log in\']')
    await page.waitForTimeout(3000);

    //verify the Login while empty email or password
    const logoutlink= await page.locator("//h1[normalize-space()='Login']")
    await expect(logoutlink).toBeVisible();

})



test('Varify the PaperTurn_Login_Wrong_Email_And_Password', async ({page})=>{


    await page.goto('https://www.paperturn.com/login')

    //click on login text
    await page.click('//ul[@class=\'nav navbar-nav navbar-right hidden-xs\']//a[normalize-space()=\'Log in\']')
    await page.waitForTimeout(2000);

    //provide username
     await page.fill('//input[@id=\'email\']', '1@mitcare.com')
     await page.waitForTimeout(2000);

    //provide password
    await page.fill('//input[@id=\'password\']', 'Fdsa@4321')
    await page.waitForTimeout(2000);

    //Click on login button
    await page.click('//button[normalize-space()=\'Log in\']')
    await page.waitForTimeout(4000);

    //verify the Wrong email or password
    const logoutlink= await page.locator("//p[normalize-space()='Wrong email or password']")
    await expect(logoutlink).toBeVisible();

    await page.close()

})
