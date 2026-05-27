const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport for desktop
  await page.setViewportSize({ width: 1280, height: 800 });

  // Navigate to the app (assuming it's running on 3000 or similar, but we'll use the dist build if possible or start dev server)
  // Actually, let's assume the dev server is running on 5173 (Vite default)
  const url = 'http://localhost:5173';

  try {
    await page.goto(url, { waitUntil: 'networkidle' });

    // Take screenshots of various sections
    await page.screenshot({ path: 'hero.png' });

    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'services.png' });

    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'reviews.png' });

    await page.evaluate(() => window.scrollTo(0, 3500));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'booking.png' });

    // Navigate to animators page
    await page.click('a[href="/animatori"]');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'animators.png' });

    console.log('Screenshots captured successfully.');
  } catch (error) {
    console.error('Error capturing screenshots:', error);
  } finally {
    await browser.close();
  }
})();
