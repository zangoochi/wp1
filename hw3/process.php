
<!DOCTYPE html>
<html> 

	<head>
		<meta charset="utf-8">
		<title>Process Form</title>
	</head>

	<body>
<?php 

	function test_input($data) {
  		$data = trim($data);
  		$data = stripslashes($data);
  		$data = htmlspecialchars($data);
  	return $data;
	}

	function test_dates($graduation, $admission){
		echo "Date Check";
		$admitted_array = explode("-",$admission);
		$graduation_array = explode("-", $graduation);
		$msg = "";
		//if graduation year is greater than admission year set to true
		if($graduation_array[2] < $admitted_array[2]){
			$msg = "Graduation date must be after Admission date. Check Year!";
			return $msg;

		//If the years match, check if the month is greater
		}else if($graduation_array[2] == $admitted_array[2] && $graduation_array[0] < $admitted_array[0] ){
			$msg = "Graduation month must be after Admission date. Check Month!";
			return $msg;
		}

		//If year and month match, finally check the day
		else if($graduation_array[2] == $admitted_array[2] && $graduation_array[0] == $admitted_array[0] && $graduation_array[1] < $admitted_array[1]){
			$msg = "Graduation date must be after Admission date. Check Day!";
			return $msg;
		}
		//If graduation date is after admission date
		else{
			return $msg;
		}
		return $msg;
	}

	//Variable definitions
	$first_name_err = $last_name_err = $email_err = "";
	$first_name = $last_name = $email = "";

	$major_err = $other_err = $degree_err = $admission_err = $graduation_err = "";
	$major = $other = $degree = $admission = $graduation = "";

	$honors_err = $internship_err = $position_err = $location_err = "";
	$honors = $internship = $position = $location = "";

	$msg = "";


	function run_validation(){
		//Variable definitions
		global $first_name_err, $last_name_err, $email_err;
		global $first_name, $last_name, $email;

		global $major_err, $other_err, $degree_err, $admission_err, $graduation_err;
		global $major, $other, $degree, $admission, $graduation;

		global $honors_err, $internship_err, $position_err, $location_err;
		global $honors, $internship, $position, $location;
		$passed = true;

		//Validate that the form was sent with POST
		if($_SERVER["REQUEST_METHOD"] == "POST"){
			//Validate that first name is not empty and only contains letters
			if(empty($_POST["first_name"])){
				$first_name_err = "First name is required";
				$passed = false;
			} else {
				if(!preg_match("/^[A-Z][a-z]*$/",test_input($_POST["first_name"]))){
					$first_name_err = "Only alphabetical letters are allowed";
					$passed = false;
				}
				else{
					$first_name = test_input($_POST["first_name"]);
				}
			}

			//Validate that last name is not empty and only contains letters
			if(empty($_POST["last_name"])){
				$last_name_err = "Last name is required";
				$passed = false;
			} else {
				$last_name = test_input($_POST["last_name"]);
				if(!preg_match("/^[A-Z][a-z]*$/",test_input($_POST["last_name"]))){
					$last_name_err = "Only alphabetical letters are allowed";
					$passed = false;
				}
				else {
					$last_name = test_input($_POST["last_name"]);
				}
			}

			//Validate that email is correct form
	  		if (empty($_POST["email"])) {
	    		$email_err = "Email is required";
	    		$passed = false;
	  		} else {
	    		// check if e-mail address is well-formed
	    		if (!filter_var(test_input($_POST["email"]), FILTER_VALIDATE_EMAIL)) {
	      			$email_err = "Invalid email format"; 
	      			$passed = false;
	    		}
	    		else{
	    			$email = test_input($_POST["email"]);
	    		}
	  		}

	  		//Validate that a major is selected
	  		if(empty($_POST["major"])){
	  			$major_err = "Must select one";
	  			$passed = false;
	  		} else {
	  			//If other is selected, then validate the text box for other major
	  			if(test_input($_POST["major"]) == "other"){
	  				if(!preg_match("/^[A-Za-z ]+$/",test_input($_POST["otherText"]))){
						$major_err = "Only alphabetical letters and spaces are allowed";
						$passed = false;
					}
					else{
						$major = test_input($_POST["otherText"]);
					}
	  			}
	  			else{
	  				$major = test_input($_POST["major"]);

	  			}
	  		}

	  		if(empty($_POST["degree"])){
	  			$degree_err = "Must select one";
	  			$passed = false;
	  		} else {
	  			$degree = test_input($_POST["degree"]);
	  		}

			//Validate that admission date is not empty and in the format mm-dd-yyyy
			if(empty($_POST["entered"])){
				$admission_err = "Admission date is required";
				$passed = false;
			} else {
				if(!preg_match("/(0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])[-](19|20)[0-9]{2}/",test_input($_POST["entered"]))){
					$admission_err = "Must follow the format: mm-dd-yyyy";
					$passed = false;
				}
				else{
					$admission = test_input($_POST["entered"]);
				}
			}

			//Validate that graduation date is not empty and in the format mm-dd-yyyy
			if(empty($_POST["graduated"])){
				$graduation_err = "Graduation date is required";
				$passed = false;
			} else {
				if(!preg_match("/(0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])[-](19|20)[0-9]{2}/",test_input($_POST["graduated"]))){
					$graduation_err = "Must follow the format: mm-dd-yyyy";
				}
				else{
					$graduation = test_input($_POST["graduated"]);
				}
			}
			$var = test_dates($graduation, $admission);
				if($var != ""){
					$graduation_err = $var;
					$passed = false;

				}

			//Validate that honors is either yes or no
	  		if(empty($_POST["activities"])){
	  			$honors_err = "Must select one";
	  			$passed = false;
	  		} else {
	  			$honors = test_input($_POST["activities"]);
	  		}

			//Validate that internship is either yes or no
	  		if(empty($_POST["internship"])){
	  			$internship_err = "Must select one";
	  			$passed = false;
	  		} else {
	  			$internship = test_input($_POST["internship"]);
	  		}  		

			//Validate that position is not empty and only contains letters
			if(empty($_POST["position"])){
				$position_err = "Position is required";
				$passed = false;
			} else {
				if(!preg_match("/^[A-Za-z ]+$/",test_input($_POST["position"]))){
					$position_err = "Only alphabetical letters and spaces are allowed";
					$passed = false;
				}
				else{
					$position = test_input($_POST["position"]);
				}
			}

			//Validate that a location is selected
	  		if($_POST["selected_location"] == ""){
	  			$location_err = "Must select one";
	  			$passed = false;
	  		} else {
	  			$location = test_input($_POST["selected_location"]);
	  		} 
		}
		return $passed;
	}

	if(run_validation()){

		$from_add = "zmontgom@webdev.cs.kent.edu"; 

		$to_add = "zangoochi0@gmail.com";
		$subject = "Congratulations";
		$message = "The form you submitted has been submitted properly. Thank you for your information";
	
		$headers = "From: $from_add \r\n";
		$headers .= "Reply-To: $from_add \r\n";
		$headers .= "Return-Path: $from_add\r\n";
		$headers .= "X-Mailer: PHP \r\n";
	
	if(mail($to_add,$subject,$message,$headers) == 1) 
	{
		$msg =  "Mail sent OK";
	} 
	else 
	{
 	  $msg =  "Error sending email!";
	}
	}

?>

		First Name: <?php echo $first_name . $first_name_err?><br/>

		Last Name: <?php echo $last_name . $last_name_err?><br/>

		Email: <?php echo $email . $email_err?><br/>

		Major: <?php echo $major . $major_err ?><br/>

		Degree: <?php echo $degree . $degree_err?><br/>

		Admission Date: <?php echo $admission . $admission_err?><br/>

		Graduation Date: <?php echo $graduation . $graduation_err?><br/>

		Honors College: <?php echo $honors . $honors_err?><br/>

		Internship: <?php echo $internship . $internship_err?><br/>

		Position: <?php echo $position . $position_err?><br/>
		
		Location: <?php echo $location . $location_err?><br/>

		<?php echo $msg; ?>
	</body>

</html>








