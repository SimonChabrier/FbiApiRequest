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
    // je contrôle que la div soit vidée pour valider la dynamisation du titre avec le current post office
    if (document.getElementById('mydiv').innerHTML == ''){
        template.curentOfficeTitleInDiv()
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

