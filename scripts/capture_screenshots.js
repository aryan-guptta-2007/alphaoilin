const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const routes = [
  { name: 'home', url: 'http://localhost:3000/' },
  { name: 'products', url: 'http://localhost:3000/products' },
  { name: 'product-detail', url: 'http://localhost:3000/products/base-oil' },
  { name: 'about', url: 'http://localhost:3000/about' },
  { name: 'contact', url: 'http://localhost:3000/contact' },
  { name: 'careers', url: 'http://localhost:3000/careers' },
  { name: 'mission-vision', url: 'http://localhost:3000/mission-vision' },
  { name: 'brand', url: 'http://localhost:3000/brand' },
];

const outDir1440 = path.join(__dirname, '..', 'screenshots_1440');
const outDir390 = path.join(__dirname, '..', 'screenshots_390');

if (!fs.existsSync(outDir1440)) fs.mkdirSync(outDir1440, { recursive: true });
if (!fs.existsSync(outDir390)) fs.mkdirSync(outDir390, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const analysisReport = [];

  for (const route of routes) {
    console.log(`Processing route: ${route.name} (${route.url})`);

    // --- 1440px Viewport ---
    const page1440 = await browser.newPage();
    await page1440.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page1440.goto(route.url, { waitUntil: 'networkidle0' });
    const shotPath1440 = path.join(outDir1440, `${route.name}.png`);
    await page1440.screenshot({ path: shotPath1440, fullPage: true });

    // Analyze 1440px layout
    const analysis1440 = await page1440.evaluate(() => {
      const issues = [];
      const sections = Array.from(document.querySelectorAll('section, header, footer'));
      
      // Check first screen focal point
      const hero = document.querySelector('h1');
      const heroVisible = hero ? (hero.getBoundingClientRect().top < window.innerHeight && hero.getBoundingClientRect().bottom > 0) : false;
      const firstScreenFocalPoint = heroVisible ? hero.innerText.trim() : 'None found';

      // Check empty vertical spaces > 120px
      for (let i = 0; i < sections.length - 1; i++) {
        const rect1 = sections[i].getBoundingClientRect();
        const rect2 = sections[i + 1].getBoundingClientRect();
        const gap = rect2.top - rect1.bottom;
        if (gap > 120) {
          issues.push(`Gap of ${Math.round(gap)}px between ${sections[i].tagName} and ${sections[i+1].tagName}`);
        }
      }

      // Check overflow / clipping
      const bodyWidth = document.body.clientWidth;
      const overflowElements = [];
      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > bodyWidth + 5) {
          const cls = typeof el.className === 'string' ? el.className.slice(0, 30) : '';
          overflowElements.push(`${el.tagName}.${cls}`);
        }
      });

      return {
        firstScreenFocalPoint,
        issues,
        overflowCount: overflowElements.length
      };
    });

    await page1440.close();

    // --- 390px Mobile Viewport ---
    const page390 = await browser.newPage();
    await page390.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
    await page390.goto(route.url, { waitUntil: 'networkidle0' });
    const shotPath390 = path.join(outDir390, `${route.name}.png`);
    await page390.screenshot({ path: shotPath390, fullPage: true });

    // Analyze 390px mobile layout
    const analysis390 = await page390.evaluate(() => {
      const bodyWidth = document.body.clientWidth;
      const overflowElements = [];
      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > bodyWidth + 2) {
          const cls = typeof el.className === 'string' ? el.className.slice(0, 30) : '';
          overflowElements.push(`${el.tagName}.${cls}`);
        }
      });

      return {
        overflowCount: overflowElements.length,
        overflowSamples: overflowElements.slice(0, 3)
      };
    });

    await page390.close();

    analysisReport.push({
      route: route.name,
      focalPoint: analysis1440.firstScreenFocalPoint,
      issues1440: analysis1440.issues,
      overflow1440: analysis1440.overflowCount,
      overflow390: analysis390.overflowCount,
      overflowSamples390: analysis390.overflowSamples
    });
  }

  await browser.close();
  console.log('Screenshots and analysis complete!');
  console.log(JSON.stringify(analysisReport, null, 2));
})();
