@component('mail::message')
    You requested the following information to be emailed to you.
    <br>
    <br>
    {{ $infoFromModuleEmail->info }}