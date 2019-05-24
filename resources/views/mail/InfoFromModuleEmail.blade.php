@component('mail::message')
    You requested the following information to be emailed to you.
    <br>
    <br>
    {!! html_entity_decode($infoFromModuleEmail->info) !!}