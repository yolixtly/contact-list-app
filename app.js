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

/*
 -------------Fetching elements from the DOM---------------
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

// outPut contact
previousContacts = $('#previous-contacts');
outputName = $('#print-name');
outputLastName = $('#print-last-name');
outputPhone = $('#print-phone');
addressWrapper = $('#address-wrapper');

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

submitBtn.click(function(e){
	alert('We are Awesome!!');
	e.preventDefault;
	populateItem(firstName.val(), last);
	 
});

function populateItem (item1) {
	var item1 = new Contact;
	arrayofPeople.push(item1)
},



// how do we store a new Contact???? What Data Type?? 

/*

yoli = Object 
justin = Object 

arrayofPeople = [yoli, justin, ...]

on clink on link we get : arrayofPeople[0];

*/


 // STEP 3: On Click we create a new object and atach a link to the page 


// STEP 4 : Add Form Validations 

//STEP 5 : Add behavior on links to update right side of the page : whichs is 
// the contact we want see. Use a form for this. 



