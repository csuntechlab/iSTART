@component('mail::message')
    Hello {{ $user->user_name }}!
    Please log-in to the application <a href="{{ url('/') }}">here</a>.
