const { v4 } = require("uuid");

const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

const addContact = async (data) => {
  const allContacts = await listContacts();
  const newContact = { id: v4(), ...data };
  allContacts.push(newContact);
  await updateContacts(allContacts);
  return newContact;
};

module.exports = addContact;
