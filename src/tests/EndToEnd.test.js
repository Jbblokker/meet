import  puppeteer  from "puppeteer";

describe('show/hide and event details', () => {

let browser;
let page;

beforeAll(async () => {
    jest.setTimeout(300000);
    browser = await puppeteer.launch({
        headless: false,
        sloMo: 250,
        ignoreDefaultArgs:['--disable-extensions']
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
});

afterAll(() => {
    browser.close();
});
//all tests below are for feature  show/hide an event
//scenario 1 
test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page. waitForSelector('.event');

    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
    browser.close();
});
//scenario 2
test('User can expand an event to see its details,', async () => {
    //const browser = await puppeteer.launch ();
    await page.click('.event .details-btn');
    const eventDetails = await page.evaluate(() => {
      const element = document.querySelector('.description');
      return element.innerText; 
    });
    expect(eventDetails).toBeDefined();
    browser.close();
});
//Scenario 3 
test('user can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event.event__details');
    expect(eventDetails).toBeNull()
});

});
