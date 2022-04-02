const fbiRequest = {

    /**
     * Méthode qui apelle la requête de base
     * appellée au chargement du dom dans app.init()
     */ 
    onLoadRequest: function()
    {   
        //initialize header
        template.personnalTitleInDivStyle();

        //set the endPoint
        apiEndPoint = app.apiRootUrl()

        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };

        fetch(apiEndPoint, config)
            .then(function(response) {
                return response.json();
        })
        .then(function(myDatas) { 

            for (const itemKey in myDatas.items) {
    
            const myObject =  myDatas.items[itemKey];   
            template.setCardTemplateElmts(myObject.images[0].original, myObject.title, myObject.description, myObject.dates_of_birth_used);
            }
        })
    },

    /**
     * Add Eventlistener
     */
     listenerOnSearchOfficeSubmit: function() 
     {     
         document.getElementById('validate').addEventListener('click', fbiRequest.HandleApiRequest);
     },

    /** 
     * Méthode de requette sur sur les value entrées dans le formulaire
     */
    HandleApiRequest: function() 
    {      
        //reset Header content if no city in ApiRootUrl endPoint
        if(citySearch =! ''){
            template.titleReset()
        };

        //set the endPoint
        apiEndPoint = app.apiRootUrl()

        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };
    
        fetch(apiEndPoint, config)
            .then(function(response) {
                return response.json();
        })

        .then(function(myDatas) { 

            for (const itemKey in myDatas.items) {
            const myObject =  myDatas.items[itemKey];   
            template.setCardTemplateElmts(myObject.images[0].original, myObject.title, myObject.description, myObject.dates_of_birth_used);
            } 
        })//close then callback
    },

    /**
     * Méthode qui apelle UN et UN seul criminel sur la recherche de base
     */ 
    showOneCriminalRequest: function()
    {        

        apiEndPoint = app.apiRootUrl(); 

        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };
    
        fetch(apiEndPoint, config)
            .then(function(response) {
                return response.json();
        })

        .then(function(myDatas) { 

            let count = 0; // initialisation du compteur
            const button = document.getElementById('but');
            
            button.addEventListener('click', function() {
               
                // je resete la banner si il y a eu une recherche faite avant
                template.titleReset();

                for (init = 0; count <= myDatas.items.length; count++) {
                
                let myObject = myDatas.items[count++];
                button.innerHTML = `${myObject.title}`;
                document.getElementById('mydiv').innerHTML = `🤩 LAST ${count}/20 🤩`;
                
                template.setCardTemplateElmts(myObject.images[0].original, myObject.title, myObject.description, myObject.dates_of_birth_used);
                template.setCardSoloStyle();

                if(count == myDatas.items.length){
                    count = 0;
                    
                    const message = `C'est fini, on repart au début de la liste ! `;
                    const uppercasemessage = message.toUpperCase();
                    button.classList.remove("btn-primary");
                    button.classList.add("btn-warning");
                    button.innerHTML = uppercasemessage;
                };

                //réinitialisation de la classe du boutton au premier clic si on a fait une boucle
                if (count == 1){
                    button.classList.remove("btn-warning");
                    button.classList.add("btn-primary");
                    
                };
                
                break

                } //close for      
            }); //close event     
        })//close then callback 
    },

   
}






    

    

