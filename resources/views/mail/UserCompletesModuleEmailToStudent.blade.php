@component('mail::message')
    Congratulations {{ $userCompletesModuleEmailToStudent->student->getUserGroup()->display_name }},
    <br>
    You have completed the {{ ucfirst($userCompletesModuleEmailToStudent->current_module) }} module.
    You will recieve another email with the next steps shortly.
