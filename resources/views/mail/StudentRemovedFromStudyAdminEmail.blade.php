@extends('master')

@section('content')
    <h2 style="color: #000000; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0 0 30px;">Hello Admin,</h2>
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">
        @if ($studentRemovedFromStudyAdminEmail->current_module === null)
            The following participant {{ $studentRemovedFromStudyAdminEmail->email }} did not log-in on time and was dropped from the study.
        @else
            The following participant {{ $studentRemovedFromStudyAdminEmail->email }} did not complete the
            {{ ucwords($studentRemovedFromStudyAdminEmail->current_module) }} module and has been dropped from the study.
        @endif
    </p>
@endsection
