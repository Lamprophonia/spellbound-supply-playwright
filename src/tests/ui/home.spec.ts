import { expect, test} from '@playwright/test';
import { HomePage } from "@pages/home.page";
import { HOME_PAGE_CONTENT } from '@test-data/home-page.data';

test.describe('Home page', () => {
    test('displays the expected primary content', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.goto();

        await expect(page).toHaveTitle(HOME_PAGE_CONTENT.title);
        await expect(homePage.mainHeading).toBeVisible();
        await expect(homePage.mainHeading).toHaveText(HOME_PAGE_CONTENT.mainHeading);
    });
});