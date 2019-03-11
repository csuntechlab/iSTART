<?php
/**
 * Created by PhpStorm.
 * User: mbendandour
 * Date: 2/18/19
 * Time: 4:54 PM
 */

namespace App\Contracts;


interface AuthenticationContract
{

    public function authenticateUser($credentials);
}