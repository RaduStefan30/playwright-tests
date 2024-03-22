export function generateRandomUser() {
    const randomNumber = Math.floor(Math.random() * 1000);
    return {
        firstName: `TestFirstName${randomNumber}`,
        lastName: `TestLastName${randomNumber}`,
        email: `testemail${randomNumber}@example.com`,
        telephone: `+123456789${randomNumber}`,
        password: `TestPassword${randomNumber}`,
    };
}
