const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const cssComputed = await page.evaluate(() => {
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');
    const body = document.body;

    return {
      headerBg: header ? getComputedStyle(header).backgroundColor : null,
      h1FontFamily: h1 ? getComputedStyle(h1).fontFamily : null,
      bodyBg: body ? getComputedStyle(body).backgroundColor : null,
      h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
    };
  });

  await browser.close();

  console.log('CSS Computed Styles:', JSON.stringify(cssComputed, null, 2));
})();
