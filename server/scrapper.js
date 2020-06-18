const puppeteer = require("puppeteer");

const scrapeChannel = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [element] = await page.$x('//*[@id="text-container"]');
  const text = await element.getProperty("textContent");
  const name = (await text.jsonValue()).trim();

  const [elem] = await page.$x('//*[@id="img"]');
  const src = await elem.getProperty("src");
  const img = await src.jsonValue();

  console.log({ name, img });
  return {
    name,
    img,
  };
};

module.exports = scrapeChannel;
// scrapeChannel("https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg");
