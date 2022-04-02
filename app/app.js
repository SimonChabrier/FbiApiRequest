const app = {
    
    //requête de base
    apiRootUrl: 'https://api.fbi.gov/wanted/v1/list?field_offices=', 

    /**
     * Méthode init
     * Apellée au chargement du DOM
     * contient les appels aux méthodes que je veux initialiser 
     * dès le chragement du DOM chargement 
     */
    init: function() {
        console.log("init");

        /**
         * Appel de la reqête primaire au chargement avant tout action.
         */
        fbiRequest.onLoadRequest();
    
        /**
         * Appel méthodes de ma classe formsAction
         */
         formsAction.formSubmit();
         formsAction.showOneCrimalOnClick();
  
        /**
         * Appel méthodes de ma classe template
         */
         template.personnalTitleInDivStyle(); 

    },

    
};

// init est apellée ici au chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);


