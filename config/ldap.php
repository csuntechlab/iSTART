<?php

return [

    /*
    |--------------------------------------------------------------------------
    | LDAP version
    |--------------------------------------------------------------------------
    |
    | The version of LDAP to use when performing operations. The default is to
    | use version 3.
    |
    */
    'version' => env("LDAP_VERSION", 3),

	/*
    |--------------------------------------------------------------------------
    | LDAP host
    |--------------------------------------------------------------------------
    |
    | The hostname/IP address of the LDAP server
    |
    */
	'host' => env("LDAP_HOST"),

	/*
    |--------------------------------------------------------------------------
    | LDAP base DN
    |--------------------------------------------------------------------------
    |
    | The base DN that will be used for searching for people
    |
    */
    'basedn' => env("LDAP_BASE_DN"),

    /*
    |--------------------------------------------------------------------------
    | LDAP admin DN
    |--------------------------------------------------------------------------
    |
    | The admin DN to use when searching for people. This is only used when
    | user password validation is turned off (so searching can still happen) or
    | as a fallback for user account manipulation.
    |
    */
    'dn' => env("LDAP_DN", ""),

    /*
    |--------------------------------------------------------------------------
    | LDAP admin password
    |--------------------------------------------------------------------------
    |
    | The admin password to use when searching for people. This is only used
    | when user password validation is turned off (so searching can still happen)
    | or as a fallback for user account manipulation.
    |
    */
    'password' => env("LDAP_PASSWORD", ""),

    /*
    |--------------------------------------------------------------------------
    | LDAP password validation
    |--------------------------------------------------------------------------
    |
    | True to turn off password validation (and therefore use the admin DN and
    | password for searching for people). When false, binding and searching is
    | done with the username and password passed to Auth::attempt(). Default is
    | false.
    |
    */
    'allow_no_pass' => env("LDAP_ALLOW_NO_PASS", false),

    /*
    |--------------------------------------------------------------------------
    | LDAP employee ID attribute
    |--------------------------------------------------------------------------
    |
    | The field to use when looking-up a person in LDAP by their user ID; this
    | is typically a numeric field. Default is "employeeNumber". This is the
    | field value that will be used when checking for a user in the associated
    | data model and database table/view.
    |
    | This can also be the same as the search_username value if you want to
    | perform both the LDAP and database lookups with the same value.
    |
    */
    'search_user_id' => env("LDAP_SEARCH_USER_ID", "employeeNumber"),

    /*
    |--------------------------------------------------------------------------
    | LDAP username (POSIX ID) attribute
    |--------------------------------------------------------------------------
    |
    | The field to use when looking-up a person in LDAP by their username; this
    | is typically the POSIX ID. Default is "uid". This is the value that will
    | be used to perform the search operation as the username passed to the
    | call to Auth::attempt().
    | 
    | If password validation is turned on, this is also the username that will
    | be used for the bind operation when combined with the base DN.
    |
    */
    'search_username' => env("LDAP_SEARCH_USERNAME", "uid"),

    /*
    |--------------------------------------------------------------------------
    | LDAP email attribute
    |--------------------------------------------------------------------------
    |
    | The field to use when looking-up a person in LDAP by their email address.
    | Default is "mail".
    |
    */
    'search_user_mail' => env("LDAP_SEARCH_MAIL", "mail"),

    /*
    |--------------------------------------------------------------------------
    | LDAP email array attribute
    |--------------------------------------------------------------------------
    |
    | The field to use when looking-up a person in LDAP by all valid email
    | addresses and aliases; this is typically an array attribute. Default is
    | "mailLocalAddress".
    |
    */
    'search_user_mail_array' => env("LDAP_SEARCH_MAIL_ARRAY", "mailLocalAddress"),

    /*
    |--------------------------------------------------------------------------
    | LDAP custom user search query
    |--------------------------------------------------------------------------
    |
    | Optional search query that will replace the default query executed by the
    | package during user directory searches. If not specified, the query that
    | will be used is the equivalent of (|(uid=%s)(mailLocalAddress=%s))
    | depending on the values of LDAP_SEARCH_USERNAME and LDAP_SEARCH_MAIL_ARRAY.
    |
    | If specified, this query needs to be a vsprintf()-compatible string and
    | use %s placeholder for the search value.
    |
    */
    'search_user_query' => env("LDAP_SEARCH_USER_QUERY", ""),

    /*
    |--------------------------------------------------------------------------
    | LDAP/DB user ID prefix
    |--------------------------------------------------------------------------
    |
    | Optional prefix before the value of the employee ID in the associated
    | database table/view. Default is blank (no prefix).
    |
    */
    'search_user_id_prefix' => env("LDAP_DB_USER_ID_PREFIX", ""),

    /*
    |--------------------------------------------------------------------------
    | LDAP/DB return user instance for provisioning
    |--------------------------------------------------------------------------
    |
    | Determines whether to return an actual user instance if the user was
    | found in the directory but not in the database.
    |
    | If true, a user instance will be returned with LDAP attributes that can
    | then be used to create the user in the database.
    |
    | If false, the authentication attempt will fail outright if the user is
    | not in the database because Auth::attempt() will return false.
    |
    | Default is false.
    |
    */
    'return_fake_user_instance' => env("LDAP_DB_RETURN_FAKE_USER", false),

    /*
    |--------------------------------------------------------------------------
    | LDAP overlay DN for the subtrees
    |--------------------------------------------------------------------------
    |
    | Optional overlay DN to give a consistent logical root for the search, add
    | and modify subtrees in the directory.
    |
    */
    'overlay_dn' => env("LDAP_OVERLAY_DN", ""),

    /*
    |--------------------------------------------------------------------------
    | LDAP add object base DN
    |--------------------------------------------------------------------------
    |
    | The base DN that will be used for adding objects to a subtree. If this
    | value is left blank, the value of LDAP_BASE_DN will be used instead.
    |
    */
    'add_base_dn' => env("LDAP_ADD_BASE_DN", ""),

    /*
    |--------------------------------------------------------------------------
    | LDAP add object DN
    |--------------------------------------------------------------------------
    |
    | The admin DN to use when adding objects to the LDAP_ADD_BASE_DN subtree.
    | If this value is left blank, the value of LDAP_DN will be used instead.
    |
    */
    'add_dn' => env("LDAP_ADD_DN", ""),

    /*
    |--------------------------------------------------------------------------
    | LDAP add object password
    |--------------------------------------------------------------------------
    |
    | The password to use when adding objects to the LDAP_ADD_BASE_DN subtree.
    | If this value is left blank, the value of LDAP_PASSWORD will be used
    | instead.
    |
    */
    'add_pw' => env("LDAP_ADD_PW", ""),

    /*
    |--------------------------------------------------------------------------
    | LDAP modify object method
    |--------------------------------------------------------------------------
    |
    | The method that will be used for modifying objects in the subtree from
    | the LDAP_MODIFY_BASE_DN value. Allowed values are "self" and "admin".
    |
    | If the value is "self" then the binding user would be able to modify his
    | own attributes in the directory.
    |
    | If the value is "admin" then the bind used would be made up of the
    | combination of LDAP_MODIFY_DN and LDAP_MODIFY_PW.
    |
    | The default value is "self".
    |
    */
    'modify_method' => env("LDAP_MODIFY_METHOD", "self"),

    /*
    |--------------------------------------------------------------------------
    | LDAP modify object base DN
    |--------------------------------------------------------------------------
    |
    | The base DN that will be used for modifying objects in a subtree. If this
    | value is left blank, the value of LDAP_ADD_BASE_DN will be used instead.
    |
    */
    'modify_base_dn' => env("LDAP_MODIFY_BASE_DN", ""),

    /*
    |--------------------------------------------------------------------------
    | LDAP modify object DN
    |--------------------------------------------------------------------------
    |
    | The admin DN to use when modifying objects in the LDAP_MODIFY_BASE_DN
    | subtree. If this value is left blank, the value of LDAP_ADD_DN will be
    | used instead.
    |
    */
    'modify_dn' => env("LDAP_MODIFY_DN", ""),

    /*
    |--------------------------------------------------------------------------
    | LDAP modify object password
    |--------------------------------------------------------------------------
    |
    | The password to use when modifying objects in the LDAP_MODIFY_BASE_DN
    | subtree. If this value is left blank, the value of LDAP_ADD_PW will be
    | used instead.
    |
    */
    'modify_pw' => env("LDAP_MODIFY_PW", ""),

];