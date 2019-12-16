@component('mail::message')
Hello Admin,
    User group is: {{ ucfirst($genericEmail->user_group) }}
    User Participant ID is: {{$genericEmail->participant_id}}
