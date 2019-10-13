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
        $this->first_name = $this->sanitize($_firstName);
        $this->last_name = $this->sanitize($_lastName);
        $this->dob = $this->sanitize($_dob);
        $this->address = $this->sanitize($_address);
        $this->phone = $this->sanitize($_phone);
        $this->email = $this->sanitize($_email);
    }
}
?>