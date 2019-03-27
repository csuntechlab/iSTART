<?php
/**
 * Created by PhpStorm.
 * User: mbendandour
 * Date: 3/27/19
 * Time: 2:38 PM
 */

namespace App\Contracts;


interface UserAssignedGroupEmailContract
{

    public function sendMail();
}