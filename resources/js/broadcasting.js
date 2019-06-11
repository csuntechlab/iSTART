window.Echo.private('user.' + window.Laravel.user)
    .listen('ModulesEvent', (e) => {
        console.log(e);
    });

