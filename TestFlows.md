
# API and UI Test Documentation

## Introduction

This document outlines automated tests for both the API (https://petstore.swagger.io/) and its corresponding user interface (UI) (https://ecommerce-playground.lambdatest.io/). The aim is to cover as many scenarios and functionalities as possible within a limited timeframe. The focus is on validating the backend services and the frontend application through creating, logging in, updating, and deleting a user, in addition to adding and removing items from the cart.

## Overview

The tests are divided into two primary sections: API tests and UI tests. Each section provides detailed test cases designed to validate the functionality of the User API and its UI respectively. These tests are crucial for ensuring that both components of the application function correctly across a variety of inputs and scenarios.

## Test Environment

- **Framework for API Tests**: Playwright
- **Framework for UI Tests**: Playwright
- **Language**: JavaScript

## Test Data

Unique user data sets are utilized in each test case to prevent conflicts and ensure independence. This includes unique identifiers, usernames, first names, last names, emails, passwords, phone numbers, and user statuses, among other details critical for thorough testing.

## Test Flows and Cases

### User API Tests

#### 1. User Creation

**Test Case: Create a User Successfully**

- **Description**: Validates that a user can be created successfully through the API.
- **Steps**:
  1. Send a POST request to the `/user` endpoint with the user data.
  2. Ensure the response status is 200 (OK).
  3. Confirm that the response body includes the correct user ID and status code 200.
- **Expected Outcome**: The user is created, and the API returns a success message with the user's unique ID.

#### 2. User Login

**Test Case: Log in the User Successfully**

- **Description**: Checks if a user can log in successfully.
- **Steps**:
  1. Send a GET request to `/user/login` with username and password parameters.
  2. Confirm the response status is 200 (OK).
  3. Verify the response body contains a success code and a session message.
- **Expected Outcome**: The user logs in, and the API returns a logged-in session message.

**Test Case: Attempt to Log in Using POST**

- **Description**: Verifies that the login operation fails when using the POST method, as the API expects a GET request for login.
- **Steps**:
  1. Send a POST request to `/user/login` with username and password.
  2. Check that the response status is 405 (Method Not Allowed).
- **Expected Outcome**: The API returns a 405 status code, indicating that the method is not allowed for login.

#### 3. User Update

**Test Case: Update User Without Body**

- **Description**: Tests the API's response when attempting to update a user without sending any data.
- **Steps**:
  1. Send a PUT request to `/user/{username}` without a request body.
  2. Ensure the response status is 415 (Unsupported Media Type).
- **Expected Outcome**: The API returns a 415 status code, indicating that the request's media type is unsupported.

#### 4. User Deletion

**Test Case: Delete the User Successfully**

- **Description**: Ensures that a user can be deleted through the API.
- **Steps**:
  1. Send a DELETE request to `/user/{username}`.
  2. Confirm the response status is 200 (OK) and the response body indicates success.
  3. Verify the user's deletion by attempting to fetch the user data and expecting a 404 (Not Found) response.
- **Expected Outcome**: The user is successfully deleted, and subsequent attempts to fetch the user data result in a 404 status code.

### User Interface (UI) Tests

#### 1. Cart Functionality Tests

**Test Case: Remove an Item from the Cart**

- **Description**: Verifies that a user can add an item to the cart and then remove it successfully, ensuring the cart is empty afterward.
- **Steps**:
  1. Navigate to a product category and select an item.
  2. Add the item to the cart and verify it's added.
  3. Remove the item from the cart.
  4. Confirm removal with the empty cart message.
- **Expected Outcome**: The item is removed from the cart, and the empty cart message is displayed.
- **Note**: This test includes navigating to a category and adding an item to the cart.

#### 2. User Login Tests

**Test Case: Register a User**

- **Description**: Confirms that a new user can register successfully.
- **Steps**:
  1. Navigate to the registration page.
  2. Fill in the registration form with user details.
  3.Submit the form and verify successful registration.
- **Expected Outcome**: The registration is successful, and a confirmation message is displayed.

**Test Case: Log in with Valid Credentials**

- **Description**: Tests if a user can log in with the correct email and password.
- **Steps**:
  1. Navigate to the login page.
  2. Enter valid login credentials.
  3. Confirm login success by checking for a specific UI element that is visible only to logged-in users.
- **Expected Outcome**: The user is logged in successfully, and the account-related UI element is visible.

**Test Case: Log in with Wrong Credentials**

- **Description**: Ensures the system properly handles login attempts with incorrect credentials.
- **Steps**:
  1. Navigate to the login page.
  2. Enter invalid login credentials.
  3. Check for an error message indicating login failure.
- **Expected Outcome**: The login attempt fails, and an appropriate error message is displayed.

## Future Improvements

- **Handling Uncommon Pop-Ups**: Implement tests for scenarios where adding a product triggers a pop-up requiring user interaction, such as confirming product quantities that exceed a certain limit.
- **Handling Rate Limiting on Logins**: Create a solution that retrieves another account from a pool when encountering rate limiting during a test.

## Conclusion

These automated tests are designed to verify the functionalities of both the API and the UI, ensuring the system behaves as expected under various scenarios. By covering a broad range of functionalities and incorporating detailed test cases, this documentation provides a comprehensive foundation for validating the application's backend and frontend components.