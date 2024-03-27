import { test, expect } from "@playwright/test";

test("app shows random fact and image", async ({ page }) => {
  await page.goto("/");

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  const endpoint = process.env.VITE_CATS_IMG_API_ENDPOINT!;

  console.log(process.env.VITE_CATS_IMG_API_ENDPOINT);
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(endpoint)).toBeTruthy();
});
