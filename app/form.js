const getFormValue = {

/**
 * Méthode qui pose un eventlistener sur le clic du bouton validate
 * pour soumettre la requête au clic
 */



formSubmit: function() {
    //j'apelle la méthode fbiApiRequest pour lancer la requête
    //AVANT de bloquer le chargement de la page
    fbiRequest.fbiApiRequest();

    const button = document.getElementById('validate');
    button.addEventListener('click', function (event) {
    getFormValue.DivReset();
    event.preventDefault();
    console.log('formSubmit')
    // je contrôle que la div soit vidée pour valider la dynamisation du titre avec le current post officce
    if (document.getElementById('mydiv').innerHTML == ''){
        console.log('je passe ici dans le if de formSubmit')
        template.personnalTitleInDiv(' BESTOF FBI WANTED IN ')
    }
    
    });
},


OneCriminalformSubmit: function() {
    //j'apelle la méthode fbiApiRequest pour lancer la requête
    //AVANT de bloquer le chargement de la page
    fbiRequest.showOneCriminalRequest();
    const button = document.getElementById('but');
    button.addEventListener('click', function (event) {
    getFormValue.DivReset();
    event.preventDefault();
    //console.log('OneCriminalformSubmit')
    });
},


/**
 * vide la div template a chaque requête
 */
 DivReset: function(){
    document.getElementById('card-group').innerHTML = ''
},

/**
 * vide la div du Titre de la banner
 */
titleReset: function(){
    document.getElementById('mydiv').innerHTML = ''
},


}//closure class

