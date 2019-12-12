@component('mail::message')
    Hello Admin,
    <br>
    The following student: {{$userCompletesModuleEmailToAdmin->student->getUserGroup()->display_name}} has
    completed the {{ ucfirst($userCompletesModuleEmailToAdmin->current_module)}} module.
