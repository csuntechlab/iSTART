@component('mail::message')
    Hello there.
    Please make sure to log-in to the iSTART web app by visting the link below so that you can continue
    participating in the study.
{{ url('/').'#/login' }}
