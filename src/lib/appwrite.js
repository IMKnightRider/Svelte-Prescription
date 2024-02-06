import { Client,Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c1d5220672dda4f92e');

export const account = new Account(client);
export { ID } from 'appwrite';