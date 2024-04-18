const contactBook = {
    contacts: [],

    searchForContact: function (name) {
        return this.contacts.find(function(contact) {
            return contact.name === name;
        });
    },

    addNewContact: function (name, phoneNumber, email) {
        const newUserContact = {
            name: name,
            phoneNumber: phoneNumber,
            email: email
        };

        this.contacts.push(newUserContact);
    }
};

contactBook.addNewContact("Nataliia Petrenko", "+380964705033", "nataliia.petrenko@gmail.com");
contactBook.addNewContact("Grisha Petrenko", "+380678939993", "grisha.petrenko@gmail.com");
contactBook.addNewContact("Vladyslav Romanenko", "380758907675", "vladyslav.romanenko@gmail.com");

console.log(contactBook.contacts);

const foundContact = contactBook.searchForContact("Nataliia Petrenko");
console.log(foundContact);

