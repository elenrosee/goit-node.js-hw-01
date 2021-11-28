const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const allContacts = await listContacts();
  const result = allContacts.find((contact) => contact.id === id);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getContactById;
