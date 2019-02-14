
let SubmitB = document.getElementById("submitButton");
SubmitB.addEventListener("click",function(event){
	event.preventDefault();
});

let CancelB = document.getElementById("cancelButton");
CancelB.addEventListener("click",function(event){
	event.preventDefault();
});

let fullName = document.getElementById("CompleteName").value;
let email = document.getElementById("UserEmail").value;

let password = document.getElementById("pass").value;
let passwordConf = document.getElementById("passConf").value

let pattern = new RegExp("((A-z)+(0-9)+)+|((0-9)+(A-z)+)+");

pattern.exec(password);
	//null on fail
	//text on succes te regresa lo que habias mandado 
pattern.exec(passwordConf);

let selCountry = document.getElementById("country");
let country = selCountry.options[selCountry.selectedIndex].value;

let gender = getCheckedValue("gender")

function getCheckedValue(groupName){
	var radio = document.getElementsByName(groupName);
	for(i=0; i < radio.length; i++){
		if (radio[i].checked){
			return radio[i].value;
		}
	}
	return null;
}
