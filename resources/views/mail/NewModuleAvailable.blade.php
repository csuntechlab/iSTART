@extends('master')

@section('content')
    <h2 style="color: #000000; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0 0 30px;">Hello there,</h2>
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">The following new module: <b>{{ ucwords($NewModuleAvailable) }}</b> is available for completion.</p>
    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0 0 15px;">Please log-in to to begin progress on the new module.</p>
@endsection
