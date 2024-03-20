# Playwright Testing Project

This project is designed to conduct both UI and API testing using Playwright, a powerful tool for automated testing across all modern browsers. It includes a suite of tests that can be easily extended to cover more scenarios and functionalities.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 20.4 or later). You can check your current version with `node -v`. If you need to install or update Node.js, visit [the official Node.js website](https://nodejs.org/).

### Installation

Follow these steps to get your development environment running:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:RaduStefan30/playwright-tests.git
   ```
2. **Install dependencies:**
   Navigate to the project directory and run:
   ```bash
   npm install
   ```
   This will install all necessary packages, including Playwright and its browser binaries.

### Running the Tests

You can run the tests using npm scripts defined in `package.json`. Here's how:

1. **Running all tests:**

   ```bash
   npm run test
   ```

   This command will execute both the UI and API tests.

2. **Running only API tests:**

   ```bash
   npm run test:api
   ```

   Use this command if you wish to run only the API test suite.

3. **Running only UI tests:**
   ```bash
   npm run test:ui
   ```
   Use this command to run only the UI test suite.

### Additional Information

- **Test Organization:** The tests are organized into `tests/ui` and `tests/api` directories for UI and API testing, respectively.

- **Test Reporting:** After test execution, reports are generated in the `playwright-report` directory. You can view a detailed HTML report by opening `playwright-report/index.html` in a browser.

- **Troubleshooting:** If you encounter any issues while running the tests, please check that you have the latest version of Node.js and Playwright installed. For more detailed logs, you can run the tests with the `DEBUG=pw:api` environment variable set.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
