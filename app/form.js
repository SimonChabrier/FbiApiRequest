const formsAction = {

/**
 * Méthode qui pose un eventlistener sur le clic du bouton search in post offices list
 */
formSubmit: function() {
    document.getElementById('validate').addEventListener ('click', function (event) {
    //clean page template
    template.cardGroupDivReset();
    //stop curent submit until next click event
    event.preventDefault();
    //set current post office in header div
    if (document.getElementById('mydiv').innerHTML == ''){
        template.curentOfficeTitleInDiv()
    };
    
    });
},

showOneCrimalOnClick: function() {
    fbiRequest.showOneCriminalRequest()
    document.getElementById('but').addEventListener('click', function (event) {
    //clean page template
    template.cardGroupDivReset();
    //stop curent submit until next click event
    event.preventDefault();
    });
},


}//closure class

