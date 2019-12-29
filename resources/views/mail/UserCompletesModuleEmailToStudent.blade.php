@extends('master')

@section('content')
    <h2 style="color: #000000; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0 0 30px;">Congratulations {{ $userCompletesModuleEmailToStudent->student }},</h2>
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">
        You have completed the {{ ucfirst($userCompletesModuleEmailToStudent->current_module) }} module.
    </p>
@endsection
