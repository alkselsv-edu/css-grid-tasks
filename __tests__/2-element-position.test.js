const { test, expect } = require('@playwright/test');

const settings = {
  screenshot: {
    type: 'jpeg',
    quality: 80,
    fullPage: true,
  },
  viewport: {
    width: 1400,
    height: 800,
  },
};

test.describe('CodeEditor', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/2-element-position.html');
    await page.setViewportSize(settings.viewport);
  });

  test('The layout must match the template', async ({ page }) => {
    const template = await page
      .locator('body')
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
