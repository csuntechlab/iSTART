@component('mail::message')
    Congratulations {{ $userCompletesModuleEmailToStudent->student }},
    <br>
    You have completed the {{ ucfirst($userCompletesModuleEmailToStudent->current_module) }} module.
