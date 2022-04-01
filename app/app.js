const app = {
    
    simImage: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/270571204_10220725660523906_5911561484170591715_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3Ag8If_Yy0gAX95LoXj&_nc_ht=scontent-cdt1-1.xx&oh=00_AT93rq7HGGHCoDxyvTV9Ti0ApDqtn1YkuoFbusYVpmaCYg&oe=61E6C369',
    text: 'A mordu son chat pour un problème de partage de fromage blanc avant d\'immoler l\'animal ',
    simNom:'SIMON DIT LA BUCHE',
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
         * Appel méthodes de ma classe fbiRequest
         */
        fbiRequest.onLoadRequest();
    
        /**
         * Appel méthodes de ma classe getFormValue
         */
        getFormValue.formSubmit();
        getFormValue.OneCriminalformSubmit();
  
        /**
         * Appel méthodes de ma classe template
         */
         template.personnalTitleInDivStyle(); 
         //template.setFocusOnButtons();
        //template.setCardSoloStyle()
    },

    
};

// init est apellée ici au chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);


