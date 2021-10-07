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
    get lastName() { return this._firstName; }
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
            ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone = " + this.phone + ", Email = " + this.email;
    }
}
try {
    let contact = new Contact("Rahul", "Pandey", "2nd cross, electronic city", "Bangalore", "Karnataka", "560100", "9191123498", "rahulp@yahoo.com");
    console.log(contact.toString());
} catch (e) {
    console.error(e);
}