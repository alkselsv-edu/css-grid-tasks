const { test, expect } = require('@playwright/test');

const settings = {
  screenshot: {
    type: 'jpeg',
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 1280,
    height: 1600,
  },
};

test.describe('First Grid', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/1-first-grid.html');
    await page.setViewportSize(settings.viewport);
  });

  test('The layout must match the template', async ({ page }) => {
    const template = await page
      .locator('body')
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});


