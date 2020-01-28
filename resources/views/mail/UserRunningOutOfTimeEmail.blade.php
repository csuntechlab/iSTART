@extends('master')

@section('content')
    <h2 style="color: #000000; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0 0 30px;">Hello there,</h2>
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">
        You are almost out of time!
    </p>
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">
        Please log-in to iSTART web app and finish the {{ ucwords($userRunningOutOfTimeEmail->current_module) }} module as soon as possible to not be removed from the study.
    </p>
@endsection
