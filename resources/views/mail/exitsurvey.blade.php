@extends('master')

@section('content')
    <h2 style="color: #000000; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0 0 30px;">Hello there,</h2>
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">Thank you@if($user->getUserGroup->user_group !== 'control'). You have now completed all web-app modules! @elseif($user->getUserGroup->user_group === 'comparison') . You have now completed the web module! @else for being in the control group. @endif If you haven't done so already, please take the Exit survey now (it will take around 10 minutes).</p>
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">After you complete the survey, you will receive a $25 Amazon.com gift card via email. Access the survey below:</p>
    @if ($user->getUserGroup->user_group === 'intervention')
        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;"> <a href="https://www.surveymonkey.com/r/Exit_Survey_Participants" target="_blank" rel="noreferrer" style="color: rgb(55, 113, 220); font-size: 14px; font-weight: bold; text-align: center; text-decoration: underline;">https://www.surveymonkey.com/r/Exit_Survey_Participants</a>.</p>
    @elseif ($user->getUserGroup->user_group === 'control')
        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;"> <a href="https://www.surveymonkey.com/r/postcontrolcsun" target="_blank" rel="noreferrer" style="color: rgb(55, 113, 220); font-size: 14px; font-weight: bold; text-align: center; text-decoration: underline;">https://www.surveymonkey.com/r/postcontrolcsun</a>.</p>
    @else
        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;"> <a href="https://www.surveymonkey.com/r/postcomparison" target="_blank" rel="noreferrer" style="color: rgb(55, 113, 220); font-size: 14px; font-weight: bold; text-align: center; text-decoration: underline;">https://www.surveymonkey.com/r/postcomparison</a>.</p>
    @endif
@endsection
