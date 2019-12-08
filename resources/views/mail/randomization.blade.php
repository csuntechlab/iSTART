@component('mail::message')
Thank you for participating in the iSTART substance use prevention study.
<br>
@if ($user->getUserGroup->user_group === 'prevention')
    You have been randomized into Group 1: Prevention
    <br>
    You will participate in 5 substance use prevention modules (approximately 1 module per week). You will be able to access the first module immediately.
    <br>
    Each module will last about 15 minutes and will be released 5 days after the previous module is completed. You will have 7 days to complete each module in order to continue in the study and receive your gift cards.
    <br>
    After the 5th and final module, you will receive an EXIT survey via email, and then a 90-day follow-up survey.
@elseif ($user->getUserGroup->user_group === 'comparison')
    You have been randomized into Group 2: Comparison
    <br>
    You will participate in one substance use prevention module, available immediately.
    <br>
    The module lasts about 20 minutes. You will have 30 days to complete it.
    <br>
    On day 30, if you completed the module, you will receive an EXIT survey via email, and then a 90-day follow-up survey.
@else
    You have been randomized into Group 3: Control
    <br>
    You are part of the control group and not required to participate in the web-application modules. You may view the iSTART website for more information.
    <br>
    In about 30 days, you will receive an EXIT survey via email, and then a 90-day follow-up survey.
@endif
