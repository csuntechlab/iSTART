@component('mail::message')
    Hello Admin,
    User with Participant ID: {{$userCompletesModuleEmailToAdmin->participant_id}} has completed the {{$userCompletesModuleEmailToAdmin->current_module}} module

