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

function addContact(...params) {
    firstname = params[0];
    lastname = params[1]; 
    let countOfPersons = addressBook.filter(contact=>contact.firstName == firstname && contact.lastName == lastname).reduce((totalPeople,e)=>totalPeople+1,0);
    if (countOfPersons==0){
        try{
        let newContact = new Contact(params[0],params[1],params[2],params[3],params[4],params[5],params[6],params[7]);
        addressBook.push(newContact);
        console.log("Successfully added!");
        }catch(e){
            console.error(e);
        }
    }
    else{
        console.log("The Contact with name already exists");
    }
    
}
addContact("Rajat", "Sharma", "2nd cross, Hosa Road", "Bangalore", "Karnataka", "560100", "9191273498", "rajatsp@yahoo.com");
addContact("Rajat", "Sharma", "2nd cross, Hosa Road", "Bangalore", "Karnataka", "560100", "9191273498", "rajatsp@yahoo.com");
printContacts(addressBook);

function searchContactInCity(firstName,lastName, city,array){
    let contacts = array.filter(e=>e.city == city && e.firstName== firstName && e.lastName==lastName)
    .reduce((totalCount,e)=>totalCount+1,0);
    if(contacts==0)
    return false;
    else
    return true;
}
let firstName = "Rajat";
let lastName = "Sharma";
let isPersonPresent = searchContactInCity(firstname,lastName,"Bangalore",addressBook);
if(isPersonPresent==true)
console.log("The person "+firstName+" "+lastName+" is found in the city ");
else
console.log("The person "+firstName+" "+lastName+" is not found in the city ");

function viewContactsByCity(city,array){
    let contacts = array.filter(e=>e.city == city).map(e=>e.firstName+" "+e.lastName);
    return contacts;
}

City = "Bangalore";
let contacts = viewContactsByCity(City,addressBook);
if(contacts.length>0)
console.log("The people in the city "+City+" are :"+contacts);
else
console.log("No people found in the city");

function viewContactsByState(state,array){
    let contacts = array.filter(e=>e.state == state).map(e=>e.firstName+" "+e.lastName);
    return contacts;
}

let State = "Karnataka";
contacts = viewContactsByState(State,addressBook);
if(contacts.length>0)
console.log("The people in the state "+State+" are :"+contacts);
else
console.log("No people found in the given state");


function getContactsCountByCity(city,array){
    let count = array.filter(e=>e.city == city).reduce((totalCount,e)=>totalCount+1,0);
    return count;
}
console.log("No of people in city "+City+": "+getContactsCountByCity(City,addressBook));

function getContactsCountByState(state,array){
    let count = array.filter(e=>e.state == state).reduce((totalCount,e)=>totalCount+1,0);
    return count;
}
console.log("No of people in State "+State+": "+getContactsCountByState(State,addressBook));


function sortContactsByName(array){
    array.sort((a,b)=> ((a.firstName+a.lastName)>(b.firstName+b.lastName)) 
    ? 1 
    : (((a.firstName+a.lastName)<(b.firstName+b.lastName))? -1 : 0));
    return array;
}

addressBook = sortContactsByName(addressBook);
printContacts(addressBook);