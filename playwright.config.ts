import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  projects: [
    {
      name: "Chrome:latest:Windows 10@lambdatest",
    },
    {
      name: "Firefox:latest:macOS Catalina@lambdatest",
    },
  ],
  workers: 2,
});