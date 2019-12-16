@component('mail::message')
    Hello,
    <br>
    The following new module: <b>{{ ucfirst($NewModuleAvailable) }}</b> is available for completion. Please log-in to <a href="{{ url('/').'/#/login' }}">iSTART</a> to begin progress on the new module.
