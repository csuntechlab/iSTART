@component('mail::message')
@if(count($user) >= 2)
    Hello admin.
    The following participants have not logged in to the system.
    <li>
        @foreach($user as $item)
            <li>{{ $item->user_name }}</li>
        @endforeach
    </li>
@else
    Hello {{ $user->user_name }}!
    Please log-in to the application <a href="{{ url('/') }}">here</a>.
@endif
