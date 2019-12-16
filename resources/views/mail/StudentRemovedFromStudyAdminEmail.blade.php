@component('mail::message')
    Hello Admin,
    <br>
    The following user:
    <br>
    {{ $studentRemovedFromStudyAdminEmail->email }} did not complete the  {{ ucfirst($studentRemovedFromStudyAdminEmail->current_module) }} module and has been removed from the study.
