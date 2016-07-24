$(document).ready(function() {
/*
 -------------Declaring Global Variables---------------
*/
//form elements
var form, 
	firstName,
	lastName,
	phoneNumber,
	secondPhoneNumber,
	street,
	city,
	state,
	zipCode,
	altStreet,
	altCity,
	altState,
	altZipCode, 
	submitBtn,
	titleName,

// Previous Section
	previousContacts,
	outputName,
	outputLastName,
	outputPhone,
	addressWrapper,
	altAddressWrapper,

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
secondPhoneNumber = $('#secondPhoneNumber')
street = $('#street');
city = $('#city');
state = $('#state');
zipCode = $('#zipCode');
altStreet = $('#altStreet');
altCity = $('#altCity');
altState = $('#altState');
altZipCode = $('#altZipCode')
submitBtn = $('#submit-btn');
formControl = $('.form-control');
titleName = $('#title-name')

// outPut contact
previousContacts = $('#previous-contacts');
outputName = $('#print-name');
outputLastName = $('#print-last-name');
outputPhone = $('#print-phone');
outputSecondPhone = $('#print-second-phone')
addressWrapper = $('#address-wrapper');
altAddressWrapper = $('#alt-address-wrapper')

//Array of Contacts
contactsArray = [];

//List contacts Links
listContacts = $('#contacts-list');

// GOAL : SEPARATION OF CONCERNS

// Create and Store Contacts 

// STEP 1 : Create an Object that holds/create the Contact Information 
	//factory or Constructor 

function Contact(firstName, lastName, phoneNumber, secondPhoneNumber, street, city, state, zipCode, altStreet, altCity, altState, altZipCode){
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	this.secondPhoneNumber = secondPhoneNumber;
	this.street = street;
	this.city = city;
	this.state = state;
	this.zipCode = zipCode;
	this.altStreet = altStreet;
	this.altCity = altCity;
	this.altState = altState;
	this.altZipCode = altZipCode;
}

Contact.prototype.address = function(){
	//we just wanted it to exists here 
	var address = this.street + ' ' + this.city + ' ' + this.state + ' ' + this.zipCode;
	return address;
};

Contact.prototype.altAddress = function(){
	//we just wanted it to exists here 
	var altAddress = this.altStreet + ' ' + this.altCity + ' ' + this.altState + ' ' + this.altZipCode;
	return altAddress;
};

//STEP 2 : Every input on HTMl will populate a new instance of Contact Object 
 // fetch DOM elements 
 // contain value of the instance of Contact . 
form.submit(function(e){
	e.preventDefault();
	// Create new Contact and push it to our array of Contacts 
	contactsArray.push(new Contact(firstName.val(), lastName.val(), phoneNumber.val(), secondPhoneNumber.val(), street.val(), city.val(), state.val(), zipCode.val(), altStreet.val(), altCity.val(), altState.val(), altZipCode.val()));
	//Empty Input values
	formControl.val('');
	//Apends the link to the contact just created
	var currentContact = contactsArray[contactsArray.length - 1];
	renderContact(currentContact.firstName + ' ' + currentContact.lastName);

});

 // STEP 3: On Click we create a new object and atach a link to the page 
function renderContact(contact){
	//The Name and Last get prettify. both with UpperCase for first letter
	var nameCase = prettyName(contact);
	var newContact = '<li><a href="#" class="contact-link">' + nameCase + '</a href="#"></li>';
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

//STEP 4 : Add behavior on links to update right side of the page : whichs is 
// the contact we want see. Use a form for this. 

function findContact(nameToFind, arrayOfContacts){
	//loops through all the contacts
	for(var i = 0; i < arrayOfContacts.length; i++){
		//Compares each element's first name of the Contacts array with the first word (the name) of the link (a string)
		if(arrayOfContacts[i].firstName.toLowerCase() == nameToFind.toLowerCase().split(' ')[0]){
			//returns the matching object
			return arrayOfContacts[i];
		}
	}
}

function displayDetails(arrayOfContacts){
	//We wrapp all the behavior on the click event listener
	$('#contacts-list').on('click', '.contact-link', function(){
		var linkName = $(this).text();
	//if a name link is clicked, it goes and finds the matching element in the ContactsBook
		var elementToDisplay = findContact(linkName, arrayOfContacts);
	//Once we have the matching contact, we display in the Details section
		titleName.text(elementToDisplay.firstName + ' ' + elementToDisplay.lastName);
		outputName.text(elementToDisplay.firstName);
		outputLastName.text(elementToDisplay.lastName);
		outputPhone.text(elementToDisplay.phoneNumber);
		outputSecondPhone.text(elementToDisplay.secondPhoneNumber)
		addressWrapper.text(elementToDisplay.address());
		altAddressWrapper.text(elementToDisplay.altAddress());
	});
}

displayDetails(contactsArray);

// STEP 5 : Add Form Validations 

// STEP 6 : Refactor to add multiple Contacts per NewContact. 
	// First html add a button to add new contact. Be careful of format behavior instead of button use a span or an input['type=button']
	// add a method to Contact Object that saves new Addresses to 1 single Contact. Array of Object. Address Object 
	// the extra addresses can be removed : requires business logic and a button to remove the element from the DOM
$('#second-address').on('click', function(e) {
	e.preventDefault();
	$('.alt-address').css('display', 'block');
});
// STEP  7 : Add similar funcionality to add extra phone numbers 
$('#second-phone').on('click', function(e) {
	e.preventDefault();
	$('#second-phone-input').css('display', 'block');
});
});