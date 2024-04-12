import { expect, test } from "@playwright/test";

test("should allow recording and go to next sentence", async ({ page }) => {
  await page.goto("/");
  page.on("console", (msg) => console.log(msg.text()));

  await page.getByRole("button", { name: "Begin" }).click();
  const sentence = "The quick brown fox jumps over the lazy dog";
  await expect(page.getByText(sentence)).toBeVisible();

  const startButton = page.getByTestId("record-button");
  await expect(startButton).toHaveText("Start Recording");
  await startButton.click();

  const stopButton = page.getByTestId("record-button");
  await expect(stopButton).toHaveText(/\d+ Stop Recording/i);
  await stopButton.click();

  const waitButton = page.getByTestId("record-button");
  await expect(waitButton).toHaveText(/Please Wait/i);
  await expect(waitButton).toBeDisabled();
  await expect(waitButton).toBeHidden();

  await expect(page.getByText(/this is what you just read/i)).toBeVisible();
  const removedTextClass = /line-through/;
  await expect(page.getByText(sentence)).toHaveClass(removedTextClass);
});
