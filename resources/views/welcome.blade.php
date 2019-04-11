<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="idle-timeout" content="{{ env('IDLE_TIMEOUT')}}">

        <title>iSTART</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div id="app">
            <v-App></v-App>
        </div>
        <script src="{{ asset('js/main.js') }}"></script>
        {{--  @if (getenv('APP_ENV') === 'local')
            <script id="__bs_script__">//<![CDATA[
                document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.3'><\/script>".replace("HOST", location.hostname));
            //]]></script>
        @endif  --}}
    </body>
</html>
