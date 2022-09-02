import axios from 'axios';

const SERVER_URL = 'http://localhost:9000';

// @link : http://localhost:9000/contacts
// @description : GET all contact from api
export const getAllContacts = () => {
    const url = `${SERVER_URL}/contacts`;
    return axios.get(url);
}

// @link : http://localhost:9000/groups
// @description : GET all groups from api
export const getAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
}

// @link : http://localhost:9000/contacts/:contactId
// @description : GET contact from api
export const getContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url);
}

// @link : http://localhost:9000/groups/:groupId
// @description : GET group from api
export const getGroup = (groupId) => {
    const url = `${SERVER_URL}/contacts/${groupId}`;
    return axios.get(url);
}

// @link : http://localhost:9000/contacts
// @description : POST contact in api
export const createContact = (contact) => {
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url, contact);
}

// @link : http://localhost:9000/contacts/:contactId
// @description : PUT contact in api
export const updateContact = (contact, contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url, contact);
}

// @link : http://localhost:9000/contacts/:contactId
// @description : DELETE contact in api
export const deleteContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url);
}