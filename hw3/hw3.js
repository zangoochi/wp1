	function cleanForm(){
		document.getElementById("otherPlaceholder").innerHTML="";
	}

	//Add text box if other is chosen as a major
	function addTextBox(element){
		if(element.id == "other")
		{
			//If checkbox other is checked then place an text input in the placeholder div element
			if(element.checked)
			{
				document.getElementById("otherPlaceholder").innerHTML="<input id='otherText' name='otherText' type='text' placeholder='Enter other major: ' pattern='^[A-Za-z ]+$' > <span id='other_errors'></span>";
				
			}
		//If checkbox other is not checked set placeholder div to empty so it is not shown
		}else{
			document.getElementById("otherPlaceholder").innerHTML="";
		}
	}


	function formErr(location, msg)
	{ 
		//Sets span to empty so only the new message shows
		document.getElementById(location).innerHTML="";

		//Sets span error tag to display msg
		document.getElementById(location).innerHTML= msg;
	}

	//Used to validate form data 
	function checkForm(form)
	{ 
		//Regex Patterns for first and last name, email, and position text boxes
		var name_pattern = new RegExp("^[A-Z][a-z]*$");
		var email_pattern = new RegExp(/[0-9a-zA-Z._]+@[0-9a-zA-Z._]+\.[a-zA-Z]{2,4}/g);
		var position_pattern = new RegExp("^[A-Za-z ]+$");
		var other_pattern = new RegExp("^[A-Za-z ]+$");
		var date_pattern = new RegExp(/(0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])[-](19|20)\d\d/g);
		var graduation_pattern = new RegExp(/(0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])[-](19|20)\d\d/g);
		var passed = true; 

		//Error messages for First Name
		var first_name = processForm.first_name.value;
		if(first_name == ""){
			var msg = "Cannot have an empty name field.";
			formErr("first_name_errors", msg);
			passed = false;

		}else if(!name_pattern.test(first_name)){
			var msg = "Must contaion only alphabetical characters.";
			formErr("first_name_errors", msg);
			passed = false;
		}
		else
		{
			var msg = "";
			formErr("first_name_errors", msg);
			
		}


		//Error messages for Last Name
		var last_name = processForm.last_name.value;
		if(last_name == ""){		
			var msg = "Cannot have an empty name field.";
			formErr("last_name_errors", msg);
			passed = false;

		}else if(!name_pattern.test(last_name)){			
			var msg = "Must contaion only alphabetical characters.";
			formErr("last_name_errors", msg);
			passed = false;
		}
		else
		{
			var msg = "";
			formErr("last_name_errors", msg);
				
		}

		//Error messages for email
		var email = processForm.email.value;
		if(email == ""){
			var msg = "Cannot have an empty name field.";
			formErr("email_errors", msg);
			passed = false;

		}else if(!email_pattern.test(email)){
			var msg = "Email is not in correct format xxxx@xxxx.xxx ";
			formErr("email_errors", msg);
			passed = false;
		}
		else
		{
			var msg = "";
			formErr("email_errors", msg);	
		}

		var major = document.getElementsByName('major');
		var major_checked = false;
		for(var i=0; i<major.length; ++i){
			if(major[i].checked){
				major_checked = true;
				break;
			}
		}
		if(major_checked == false){
			var msg = "Must select one";
			formErr("major_errors", msg);
			passed = false;
		}
		else{
			var msg = "";
			formErr("major_errors", msg);
		}


		//Check if other radio button is checked. If it is checked, run validation on the textbox
		if(document.getElementById("other").checked){
			//Error messages for OtherText
			var otherText = document.getElementById("otherText").value;
			if(otherText == ""){
				var msg = "Cannot have an empty field.";
				formErr("other_errors", msg);
				passed = false;
			}
			else if(!other_pattern.test(otherText)){
				var msg = "Only allows alphabetical letters.";
				formErr("other_errors", msg);
				passed = false;
			}
			else{
				var msg = "";
				formErr("other_errors", msg);
			}	
		}

		var degree = document.getElementsByName('degree');
		var degree_checked = false;
		for(var i=0; i<degree.length; ++i){
			if(degree[i].checked){
				degree_checked = true;
			}
		}
		if(degree_checked == false){
			var msg = "Must select one";
			formErr("degree_errors", msg);
			passed = false;
		}
		else{
			var msg = "";
			formErr("degree_errors", msg);	
		}

		//Error messages for Admission date
		var admitted = processForm.entered.value;
		if(admitted == ""){
			var msg = "Cannot have an empty date field.";
			formErr("admitted_errors", msg);
			passed = false;

		}else if(!date_pattern.test(admitted)){
			var msg = "Must be in format mm-dd-yyyy";
			formErr("admitted_errors", msg);
			passed = false;
		}
		else
		{
			var msg = "";
			formErr("admitted_errors", msg);
		}	

		//Error messages for Graduation date
		var graduated = processForm.graduated.value;
		if(graduated == ""){
			var msg = "Cannot have an empty date field.";
			formErr("graduation_errors", msg);
			passed = false;
		}else if(!graduation_pattern.test(graduated)){
			var msg = "Must be in format mm-dd-yyyy";
			formErr("graduation_errors", msg);
			passed = false;
		}
		else
		{
			var msg = "";
			formErr("graduation_errors", msg);
		}	

		if(checkDates(graduated, admitted) == false){
			passed = false;
		}

		var activities = document.getElementsByName('activities');
		var activities_checked = false;
		for(var i=0; i<activities.length; ++i){
			if(activities[i].checked){
				activities_checked = true;
			}
		}
		if(activities_checked == false){
			var msg = "Must select one";
			formErr("activities_errors", msg);
			passed = false;
		}
		else{
			var msg = "";
			formErr("activities_errors", msg);	
					
		}	

		var internship = document.getElementsByName('internship');
		var internship_checked = false;
		for(var i=0; i<internship.length; ++i){
			if(internship[i].checked){
				internship_checked = true;
			}
		}
		if(internship_checked == false){
			var msg = "Must select one";
			formErr("internship_errors", msg);
			passed = false;
		}
		else{
			var msg = "";
			formErr("internship_errors", msg);
						
		}	


		//Error messages for position
		var position = processForm.position.value;
		if(position == ""){
			var msg = "Cannot have an empty position field.";
			formErr("position_errors", msg);
			passed = false;
		}else if(!position_pattern.test(position)){
			var msg = "Position only allows alphabetical letters.";
			formErr("position_errors", msg);
			passed = false;
		}
		else
		{
			var msg = "";
			formErr("position_errors", msg);
				
		}

		//Error messages for location
		var location = processForm.selected_location.value;
		if(location == ""){
			var msg = "Please select a location";
			formErr("location_errors", msg);
			passed = false;
		}
		else
		{
			var msg = "";
			formErr("location_errors", msg);	
			
		}
		if(passed){
			form.setAttribute('action', 'process.php');
		}
	return passed;
	}

	function checkDates(graduation, admission)
	{ 
		var admitted_array = admission.split("-");

		var graduation_array = graduation.split("-");
		//if graduation year is greater than admission year set to true
		if(graduation_array[2] < admitted_array[2]){
			var msg = "Graduation date must be after Admission date. Check Year!";
			formErr("graduation_errors", msg);
			return false;

		//If the years match, check if the month is greater
		}else if(graduation_array[2] == admitted_array[2] && graduation_array[0] < admitted_array[0] ){
			var msg = "Graduation month must be after Admission date. Check Month!";
			formErr("graduation_errors", msg);
			return false;
		}

		//If year and month match, finally check the day
		else if(graduation_array[2] == admitted_array[2] && graduation_array[0] == admitted_array[0] && graduation_array[1] < admitted_array[1]){
			var msg = "Graduation date must be after Admission date. Check Day!";
			formErr("graduation_errors", msg);
			return false;
		}
		//If graduation date is after admission date
		else{
			return true;
		}
		return false;
	}	
