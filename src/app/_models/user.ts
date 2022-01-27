export default interface User {
    username: string; // typically an email address, also used as the user's ID
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    authdata?: string;
}