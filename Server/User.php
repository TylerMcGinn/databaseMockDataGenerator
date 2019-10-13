<?php
class User{
    function sanitize($_param){
        $sanitized_param = stripslashes($_param);
        $sanitized_param = str_replace("'", "\'", $sanitized_param);
        $sanitized_param = trim($sanitized_param);
        $sanitized_param = htmlspecialchars($sanitized_param);
        return $sanitized_param;
    }

    function __construct($_firstName, $_lastName, $_dob, $_address, $_phone, $_email){
        $this->first_name = $_firstName;
        $this->last_name = $_lastName;
        $this->dob = $_dob;
        $this->address = $_address;
        $this->phone = $_phone;
        $this->email = $_email;
    }
}
?>