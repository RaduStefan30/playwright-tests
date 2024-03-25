# Application Bug Report

## API Bugs

### 1. Login Authentication Bypass

- **Description**: The login function allows any combination of username and password, bypassing authentication checks.
- **Preconditions**: No specific preconditions.
- **Steps to Reproduce**:
  1. Navigate to the login endpoint (`/user/${username}`).
  2. Enter any random username and password combination.
  3. Submit the login request.
- **Expected Behavior**: Only valid username and password combinations, as per the user database, should be allowed to authenticate successfully.
- **Actual Behavior**: Users can log in with any credentials, valid or invalid, compromising security.

### 2. Inconsistent Data Type Acceptance

- **Description**: Fields that are supposed to accept specific data types are accepting multiple types, e.g., the 'Phone' field can be both string and integer.
- **Preconditions**: No specific preconditions.
- **Steps to Reproduce**:
  1. Navigate to an endpoint that accepts user data (e.g., (`/user/${username}`)).
  2. Submit the form or request with the any field (e.g. 'phone') as both string and integer types in separate tests. (either using PUT or POST)
  3. Observe the response and data handling.
- **Expected Behavior**: Each field should strictly accept data of the specified type to maintain data integrity.
- **Actual Behavior**: Fields like 'phone' accept data types interchangeably (string and integer), potentially leading to major issues in data handling and validation.

## UI Bugs

### 1. Incorrect 'Mega Menu' Redirection

- **Description**: Clicking on the 'Mega menu' from the top navigation incorrectly redirects users to the About page instead of the expected section.
- **Preconditions**: User is on the homepage or any page where the 'Mega menu' is accessible.
- **Steps to Reproduce**:
  1. Click on the 'Mega menu'.
  2. Observe the redirection.
- **Expected Behavior**: The 'Mega menu' should guide users to the corresponding section as labeled.
- **Actual Behavior**: The user is redirected to the About page.

### 2. Category Redirection Issues

- **Description**: Several category links, such as 'Gaming consoles' and 'Air conditioner', redirect users back to the home page instead of the specific category page.
- **Preconditions**: User is on the homepage.
- **Steps to Reproduce**:
  1. Click on 'Shop by Category'.
  2. Click on either 'Gaming consoles' or 'Air conditioner'.
  3. Observe the redirection.
- **Expected Behavior**: Category links should lead to their respective category pages, showcasing relevant products or information.
- **Actual Behavior**: Clicking on certain categories like 'Gaming consoles' and 'Air conditioner' navigates users to the home page.
