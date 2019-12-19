@extends('master')

@section('content')
    <h2 style="color: #000000; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0 0 30px;">Hello Admin,</h2>
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">
        The following participant {{ $userCompletesModuleEmailToAdmin->student }} has completed the
        {{ ucfirst($userCompletesModuleEmailToAdmin->current_module) }} module.
    </p>
@endsection
