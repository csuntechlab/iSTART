@extends('master')

@section('content')
    <h2 style="color: #000000; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0 0 30px;">Hello there,</h2>
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">Thank you for participating in the iSTART substance use prevention study!</p>
    @if ($userInUserGroup->user_group === 'intervention')
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">
        You have been randomized into <b>Group 1: Prevention</b>.
        You will participate in 5 substance use prevention modules (approximately 1 module per week).
        <ol type="A">
            <li>The first module is available now, and takes about 15 minutes to complete.</li>
            <li>You will have 7 days to complete each module, with a 5 day rest period after completion of each module.</li>
            <li>After the 5th and final module, you will receive an EXIT survey via email, and then a 90-day follow-up survey.</li>
        </ol>
    </p>
    @elseif ($userInUserGroup->user_group === 'comparison')
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">
        You have been randomized into <b>Group 2: Comparison</b>.
        You will participate in one substance use prevention module, available immediately.
        The module lasts about 20 minutes. You will have 30 days to complete it.
        On day 30, if you completed the module, you will receive an EXIT survey via email, and then a 90-day follow-up survey.
    </p>
    @else
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">
        You have been randomized into <b>Group 3: Control</b>.
        You are not required to participate in the web-application modules. You may view the iSTART website for more information.
        In about 30 days, you will receive an EXIT survey via email, and then a 90-day follow-up survey.
    </p>
    @endif
@endsection
