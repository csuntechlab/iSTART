@component('mail::message')
    Hello admin.
    The following participant has not logged in to the system.
    <br>
    {{ $user->email }} group: {{ $user->getUserGroup->user_group }}
