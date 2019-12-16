@component('mail::message')
    You are almost out of time!
    <br>
    Please log-in to <a href="{{ url('/').'/#/login' }}">iSTART</a> and finish the {{ ucfirst($userRunningOutOfTimeEmail->current_module) }} module as soon as possible to not be removed from the study.
