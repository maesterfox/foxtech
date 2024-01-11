const puppeteer = require("puppeteer");

async function visitURLsMultipleTimes(
  urls,
  userAgents,
  numVisitsPerURL,
  delay
) {
  const browser = await puppeteer.launch({ headless: true });

  let visitsCompleted = 0;
  while (visitsCompleted < numVisitsPerURL * urls.length) {
    const randomIndex = Math.floor(Math.random() * urls.length);
    const url = urls[randomIndex];

    const page = await browser.newPage({
      ignoreHTTPSErrors: true,
      viewport: { width: 1280, height: 800 },
      userAgent: userAgents[Math.floor(Math.random() * userAgents.length)],
    });

    try {
      await page.goto(url);
      console.log(`Visit ${visitsCompleted + 1}: Opened ${url}`);

      // Add a random delay before closing the page
      const randomDelay = Math.floor(Math.random() * delay) + 1;
      console.log(`Waiting for ${randomDelay} seconds before closing...`);
      await new Promise((resolve) => setTimeout(resolve, randomDelay * 1000));

      await page.close();
      console.log(`Visit ${visitsCompleted + 1}: Closed ${url}`);

      visitsCompleted++;

      // Wait for 10 seconds before the next visit
      await new Promise((resolve) => setTimeout(resolve, 10000));
    } catch (error) {
      console.error(`Error during visit ${visitsCompleted + 1}:`, error);
    }
  }

  await browser.close();
}

const urls = [
  "https://google.com",
  "https://amazon.com",
  "https://hotmail.com", // Add your actual URLs here
];
const userAgents = [
  /* ... your user agents */
];
const numVisitsPerURL = 2;
const maxRandomDelay = 5; // Maximum random delay in seconds

visitURLsMultipleTimes(urls, userAgents, numVisitsPerURL, maxRandomDelay);
