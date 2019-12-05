@component('mail::message')
    Hello Admin,
    <br>
    The following user:
    <br>
    {{ $studentRemovedFromStudyAdminEmail->email }} with Participant ID: {{ $studentRemovedFromStudyAdminEmail->participant->participant_id}} has been removed from the study.

