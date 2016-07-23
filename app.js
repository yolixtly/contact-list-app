/* html finish 

 //fix the grid system 
 //add Area for displaying the past contacts that we have added 
// JS understands the planning today .

*/

/*
 -------------Declaring Global Variables---------------
*/
//form elements
var form, 
	firstName,
	lastName,
	phoneNumber,
	street,
	city,
	state,
	zipCode, 
	submitBtn,

// Previous Section
	previousContacts,
	outputName,
	outputLastName,
	outputPhone,
	addressWrapper,

//array of contacts
	contactsArray,	

// contacts List Links
	listContacts;

/*
 -------------Fetching/Instantiating elements from the DOM---------------
*/

//form inputs 
form = $('#form-wrapper');
firstName = $('#firstName');
lastName = $('#lastName');
phoneNumber = $('#phoneNumber');
street = $('#street');
city = $('#city');
state = $('#state');
zipCode = $('#zipCode');
submitBtn = $('#submit-btn');
formControl = $('.form-control');

// outPut contact
previousContacts = $('#previous-contacts');
outputName = $('#print-name');
outputLastName = $('#print-last-name');
outputPhone = $('#print-phone');
addressWrapper = $('#address-wrapper');

//Array of Contacts
contactsArray = [];

//List contacts Links
listContacts = $('#contacts-list');

// GOAL : SEPARATION OF CONCERNS

// Create and Store Contacts 

// STEP 1 : Create an Object that holds/create the Contact Information 
	//factory or Constructor 

function Contact(firstName, lastName, phoneNumber, street, city, state, zipCode){
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	this.street = street;
	this.city = city;
	this.state = state;
	this.zipCode = zipCode;
}

Contact.prototype.address = function(){
	//we just wanted it to exists here 
	var address = this.street + ' ' + this.city + ' ' + this.state + ' ' + this.zipCode;
	return address;
};


//STEP 2 : Every input on HTMl will populate a new instance of Contact Object 
 // fetch DOM elements 
 // contain value of the instance of Contact . 
form.submit(function(e){
	e.preventDefault();
	// Create new Contact and push it to our array of Contacts 
	contactsArray.push(new Contact(firstName.val(), lastName.val(), phoneNumber.val(), street.val(), city.val(), state.val(), zipCode.val()));
	//Empty Input values
	formControl.val('');
	//Apends the link to the contact just created
	var currentContact = contactsArray[contactsArray.length - 1];
	renderContact(currentContact.firstName + ' ' + currentContact.lastName);

});

 // STEP 3: On Click we create a new object and atach a link to the page 
function renderContact(contact){
	var nameCase = prettyName(contact);
	var newContact = '<li><span class="contact-link">' + nameCase + '</span></li>';
	listContacts.append(newContact);
}
// Prettify Input Fields 
function prettyName(str) {
	// will split the string delimited by space into an array of words
     str = str.toLowerCase().split(' '); 
 	// str.length holds the number of occurrences of the array..
     for(var i = 0; i < str.length; i++){   
    	// splits the array occurrence into an array of letters
          str[i] = str[i].split('');  
        // converts the first occurrence of the array to uppercase                  
          str[i][0] = str[i][0].toUpperCase();  
        // converts the array of letters back into a word.        
          str[i] = str[i].join('');                   
     }
      //converts the array of words back to a sentence.
     return str.join(' ');                             
}

// STEP 4 : Add Form Validations 

//STEP 5 : Add behavior on links to update right side of the page : whichs is 
// the contact we want see. Use a form for this. 




/*

yoli = Object 
justin = Object 

arrayofPeople = [yoli, justin, ...]

on clink on link we get : arrayofPeople[0];
p
*/

