

// faire défiler les éléments du carousel sur la page d'accueil
$(document).ready(function(){
    // Déclenche le carousel toutes les 3 secondes
    $('#header-carousel').carousel({
        interval: 3000
    });
});

// rendre le lien activable
$(document).ready(function(){
    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');

    });
});