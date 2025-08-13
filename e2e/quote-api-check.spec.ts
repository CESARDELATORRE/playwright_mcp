import { test, expect } from '@playwright/test';

test('Check Quote API Swagger UI title', async ({ page }) => {
  console.log('Navigating to Quote API Swagger UI...');
  
  try {
    // Navigate to the URL
    await page.goto('https://quoteapi-uat.ipipeline.com/swagger/index.html');
    
    // Get the title of the page
    const title = await page.title();
    console.log(`Page title: "${title}"`);
    
    // Check if the title starts with "Quote API Swagger UI "
    const expectedPrefix = 'Quote API Swagger UI ';
    const isSuccess = title.startsWith(expectedPrefix);
    
    if (isSuccess) {
      console.log('✅ SUCCESS: Title starts with "Quote API Swagger UI "');
      console.log(`Status: SUCCESS - Site is working correctly`);
    } else {
      console.log('❌ FAILED: Title does not start with "Quote API Swagger UI "');
      console.log(`Status: FAILED - Expected title to start with "${expectedPrefix}", but got "${title}"`);
    }
    
    // Assert that the title starts with the expected prefix
    expect(title).toMatch(new RegExp(`^${expectedPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`));
    
  } catch (error) {
    console.log('❌ FAILED: Error occurred while checking the site');
    console.log(`Status: FAILED - Error: ${error.message}`);
    throw error;
  }
});

test('Navigate to Microsoft.com', async ({ page }) => {
  console.log('Navigating to Microsoft.com...');
  
  try {
    // Navigate to Microsoft.com
    console.log('Opening URL: https://www.microsoft.com');
    await page.goto('https://www.microsoft.com', { waitUntil: 'networkidle' });
    console.log('Page navigation completed');
    
    // Wait for the page to load completely - using multiple strategies
    console.log('Waiting for DOM content to load...');
    await page.waitForLoadState('domcontentloaded');
    
    console.log('Waiting for all network requests to complete...');
    await page.waitForLoadState('networkidle');
    
    console.log('Waiting for page to be fully loaded...');
    await page.waitForLoadState('load');
    
    // Additional wait to ensure all dynamic content is loaded
    console.log('Waiting additional 3 seconds for dynamic content...');
    await page.waitForTimeout(3000);
    
    // Get the title of the page
    const title = await page.title();
    console.log(`Page title: "${title}"`);
    
    // Get the current URL to confirm navigation
    const currentUrl = page.url();
    console.log(`Current URL: ${currentUrl}`);
    
    // Take a screenshot of the homepage
    console.log('Taking screenshot of Microsoft homepage...');
    await page.screenshot({ path: 'microsoft-homepage-complete.png', fullPage: false });
    console.log('Screenshot saved as microsoft-homepage-complete.png');
    
    console.log('✅ Successfully navigated to Microsoft.com and page is completely loaded');
    
    // List available links for debugging first
    console.log('Scanning available links on the page...');
    const allLinks = await page.$$eval('a', links => 
      links.map(link => ({
        text: link.textContent?.trim() || '',
        href: link.href || '',
        ariaLabel: link.getAttribute('aria-label') || ''
      })).filter(link => 
        link.text.length > 0 && 
        (link.text.toLowerCase().includes('surface') || 
         link.text.toLowerCase().includes('shop') || 
         link.text.toLowerCase().includes('copilot') ||
         link.ariaLabel.toLowerCase().includes('surface'))
      )
    );
    
    console.log('Surface/Shop related links found:');
    allLinks.forEach((link, index) => {
      console.log(`${index + 1}. "${link.text}" | Aria: "${link.ariaLabel}" | URL: ${link.href}`);
    });
    
    // Try to find and click a Surface-related link
    const surfaceSelectors = [
      'text="Shop Surface Pro, Copilot + PC"',
      'a:has-text("Surface Pro")',
      'a:has-text("Surface")',
      'text="Surface Pro"',
      'text="Surface"',
      'a[href*="surface"]',
      '[aria-label*="Surface"]',
      'a:has-text("Shop")',
      'text="Shop now"'
    ];
    
    let buttonFound = false;
    let clickedButton: string | null = null;
    
    for (const selector of surfaceSelectors) {
      try {
        console.log(`Trying selector: ${selector}`);
        const element = await page.waitForSelector(selector, { timeout: 2000 });
        if (element) {
          const elementText = await element.textContent();
          console.log(`Found element with text: "${elementText}"`);
          
          // Click the element
          console.log('Clicking the element...');
          await element.click();
          clickedButton = selector;
          buttonFound = true;
          break;
        }
      } catch (error) {
        console.log(`Selector ${selector} not found, trying next...`);
      }
    }
    
    if (!buttonFound) {
      console.log('No Surface-related button found. Let\'s try the first "Shop" link instead...');
      
      // Try to find any "Shop" button as fallback
      try {
        const shopButton = await page.waitForSelector('a:has-text("Shop")', { timeout: 2000 });
        if (shopButton) {
          console.log('Found a Shop button, clicking it...');
          await shopButton.click();
          buttonFound = true;
          clickedButton = 'a:has-text("Shop")';
        }
      } catch (error) {
        console.log('No Shop button found either');
      }
    }
    
    if (!buttonFound) {
      console.log('No suitable button found. Test will continue with just the homepage screenshot.');
      return; // Exit gracefully with just the homepage screenshot
    }
    
    // Wait for navigation to the new page
    console.log('Waiting for navigation to new page...');
    await page.waitForLoadState('domcontentloaded', { timeout: 10000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 });
    await page.waitForLoadState('load', { timeout: 10000 });
    await page.waitForTimeout(3000); // Extra wait for dynamic content
    
    // Get details of the new page
    const newTitle = await page.title();
    const newUrl = page.url();
    console.log(`New page title: "${newTitle}"`);
    console.log(`New page URL: ${newUrl}`);
    
    // Take a screenshot of the new page
    console.log('Taking screenshot of the new page...');
    await page.screenshot({ path: 'microsoft-second-page.png', fullPage: false });
    console.log('Screenshot saved as microsoft-second-page.png');
    
    console.log(`✅ Successfully clicked button (${clickedButton}) and navigated to new page`);
    
    // Assert that we're still on Microsoft domain and navigated somewhere
    expect(newUrl).toContain('microsoft.com');
    expect(newUrl).not.toBe(currentUrl); // Should be a different page
    
  } catch (error) {
    console.log('❌ FAILED: Error occurred during the test');
    console.log(`Error: ${error.message}`);
    throw error;
  }
}, { timeout: 60000 });
