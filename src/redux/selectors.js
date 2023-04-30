export const selectorContscts = state => state.contacts;
export const selectorItems = state => state.contacts.items;
export const selectorFilter = state => state.filter;

export const selectorfilteredContacts = state => {
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter)
  );
};
