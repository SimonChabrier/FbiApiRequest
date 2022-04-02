const formsAction = {

/**
 * Méthode qui pose un eventlistener sur le clic du bouton validate
 * pour soumettre la requête au clic
 */
formSubmit: function() {
    //j'apelle la méthode HandleApiRequestt pour lancer la requête
    //AVANT de bloquer le chargement de la page
    fbiRequest.HandleApiRequest();

    const button = document.getElementById('validate');
    button.addEventListener('click', function (event) {
    formsAction.cardGroupDivReset();
    event.preventDefault();
    // je contrôle que la div soit vidée pour valider la dynamisation du titre avec le current post office
    if (document.getElementById('mydiv').innerHTML == ''){
        template.curentOfficeTitleInDiv()
    }
    
    });
},

showOneCrimalOnClick: function() {
    //j'apelle la méthode showOneCriminalRequest pour lancer la requête
    fbiRequest.showOneCriminalRequest();

    const button = document.getElementById('but');
    button.addEventListener('click', function (event) {
    //je reset la div à chaque click pour avoir les cards les unes après les autres
    formsAction.cardGroupDivReset();
    //je bloque le chargement de la page jusq'au prochain clic
    event.preventDefault();
    });
},


/**
 * vide la div template a chaque requête
 */
cardGroupDivReset: function(){
    document.getElementById('card-group').innerHTML = ''
},

/**
 * vide la div du Titre de la banner
 */
titleReset: function(){
    document.getElementById('mydiv').innerHTML = ''
},


}//closure class

