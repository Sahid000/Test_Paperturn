const {test, expect} = require('@playwright/test');


test('Varify the PaperTurn_LoginPage', async ({page, baseURL})=>{

    await page.goto(`${baseURL}/login`)

    //Verify the PaperTurn Page title is Login - Paperturn
    const pageTitle = page.title();
    console.log('Page title is:', pageTitle);
    await expect(page).toHaveTitle('Login - Paperturn');

    //Verify the Paperturn Login_URL
    const pageUrl = page.url();
    console.log('Page URL is:', pageUrl);
    await expect(page).toHaveURL('https://www.paperturn.com/login');
    await page.waitForTimeout(2000);


    await page.goto(`${baseURL}/login`)

    //click on paperturn_cookeis
    await page.getByRole('button', { name: 'Allow all cookies' }).click();
    await page.waitForTimeout(2000);

})

test('Varify the PaperTurn_Empty_Login', async ({page,baseURL})=>{

    await page.goto(`${baseURL}/login`)

    //Verify the PaperTurn Empty Login
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('E-mail').click();
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByPlaceholder('Password').click();
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Paperturn', exact: true }).click();
    await page.waitForTimeout(2000);

})

test('Varify the PaperTurn_Invalid_Login', async ({page,baseURL})=>{


    await page.goto(`${baseURL}/login`)

    //Verify the PaperTurn Invalid Login
    await page.getByPlaceholder('E-mail').click();
    await page.waitForTimeout(2000);
    //provide username
    await page.getByPlaceholder('E-mail').fill('1@mitcare.com');
    await page.getByPlaceholder('Password').click();
    //provide password
    await page.getByPlaceholder('Password').fill('Fdsa@4321');
    //Click on login button
    await page.getByRole('button', { name: 'Log in' }).click();
    //verify the Wrong email or password
    const logoutlink= await page.getByText('Wrong email or password')
    await expect(logoutlink).toBeVisible();

})

test('Varify the PaperTurn_valid_Login', async ({page,baseURL})=>{

    await page.goto(`${baseURL}/login`)

    //click on paperturn_cookeis
    await page.getByRole('button', { name: 'Allow all cookies' }).click();
    await page.waitForTimeout(2000);

    //Verify the PaperTurn valid Login
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
    //Verify the PaperTurn valid Logout
    await page.getByRole('link', { name: '   Sahid-SQA' }).click();
    await page.locator('//header/div[1]/div[1]/div[1]/div[3]/div[2]/ul[1]/li[5]/ul[1]/li[8]/a[1]/span[1]').click();
})


