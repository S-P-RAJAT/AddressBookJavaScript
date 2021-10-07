class Contact {


    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() { return this._firstName; }
    set firstName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._firstName = name;
        else throw 'First Name is incorrect';
    }
    get lastName() { return this._lastName; }
    set lastName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._lastName = name;
        else throw 'Last Name is incorrect';
    }
    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z0-9 ,-.]{4,}$');
        if (addressRegex.test(address))
            this._address = address;
        else
            throw 'Address incorrect';
    }
    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Z][a-z]{3,}$');
        if (cityRegex.test(city))
            this._city = city;
        else
            throw 'City incorrect';
    }
    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp('^[A-Z][a-z]{3,}$');
        if (stateRegex.test(state))
            this._state = state;
        else
            throw 'State incorrect';
    }
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw 'ZipCode incorrect';
    }
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp('^\\d{0,3} ?\\d{10}$');
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw 'Phone Number incorrect';
    }
    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp('^[a-z]+([.]?[a-z0-9_+-]+)?@[a-z1-9]+[.][a-z]{2,}([.][a-z]{2,})?$');
        if (emailRegex.test(email))
            this._email = email;
        else
            throw 'Email incorrect';
    }

    toString() {
        return "FirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address +
            ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone = " + this.phoneNumber + ", Email = " + this.email;
    }
    equals() {

    }
}
let addressBook = new Array();

try {
    addressBook.push(new Contact("Rahul", "Pandey", "2nd cross, electronic city", "Bangalore", "Karnataka", "560100", "9191123498", "rahulp@yahoo.com"));
    addressBook.push(new Contact("Rajat", "Sharma", "2nd cross, Hosa Road", "Bangalore", "Karnataka", "560100", "9191273498", "rajatsp@yahoo.com"));
    console.log(addressBook[1].toString());
} catch (e) {
    console.error(e);
}

function getContact(firstName, lastName) {
    return addressBook.findIndex(contact => (contact.firstName == firstName && contact.lastName == lastName));
}

function editContact(firstName, lastName, attribute, value) {

    let contactIndex = getContact(firstName, lastName);
    console.log(contactIndex);
    if (contactIndex != -1) {

        addressBook[contactIndex][attribute] = value;
        console.log("Sucessfully edited: " + addressBook[contactIndex] + "\n");
    } else {
        console.log("No such contact!");
    }
}

editContact("Rajat", "Sharma", "city", "Delhi");

function printContacts(addressBook) {
    addressBook.forEach((contact, i) => {
        console.log((i + 1) + ". " + contact.toString() + "\n")
    });
}

function deleteContact(firstName, lastName) {
    let contactIndex = getContact(firstName, lastName);
    if (contactIndex == -1) {
        console.log("No such contact!");
    } else {
        addressBook.splice(contactIndex, 1);
        console.log("Successfully deleted!");
    }
}

printContacts(addressBook);
deleteContact("Rajat", "Sharma");
printContacts(addressBook);


function totalContact(numberOfContact){
    return numberOfContact+1;
}

let numberOfCOntacts = addressBook.reduce(totalContact,0);
console.log("Number of contacts: "+numberOfCOntacts);