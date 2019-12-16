@component('mail::message')
    Hello there,
    <br>
    You requested the following information to be emailed to you.
    <br>
    <br>
    {!! html_entity_decode($infoFromModuleEmail->info) !!}
