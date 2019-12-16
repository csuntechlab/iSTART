@component('mail::message')
Hello!
<br>
Welcome to the {{ config('app.name') }} web application.
<br>
Please make sure to keep the link to the application handy:
<br>
<center>{{ url('/') . '/#/login' }}</center>
