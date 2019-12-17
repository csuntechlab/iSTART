@component('mail::message')
    Hello there,
    <br>
    Below you will find the goal you wrote for yourself.
    <br>
    <br>
    {!! html_entity_decode($infoFromModuleEmail->info) !!}
