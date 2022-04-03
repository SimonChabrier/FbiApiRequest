const fbiRequest = {

    apiRootUrl: function ()
    {
        citySearchValue = document.getElementById('input').value
        
            if (citySearchValue){
                apiRootUrl = 'https://api.fbi.gov/wanted/v1/list?field_offices=' + citySearchValue 
            } else {
                apiRootUrl = 'https://api.fbi.gov/wanted/v1/list?field_offices='
            }
            return apiRootUrl
    }, 

    /**
     * Méthode qui apelle la requête de base
     * appellée au chargement du dom dans app.init()
     */ 
    onLoadRequest: function()
    {   
        //initialize header
        template.personnalTitleInDivStyle();

        //set the endPoint
        apiEndPoint = fbiRequest.apiRootUrl()

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
     * Request on form submit value
     */
    HandleApiRequest: function() 
    {      
        //reset Header content if no city in ApiRootUrl endPoint
        if(citySearch =! ''){
            template.titleReset();
        };

        //set the endPoint
        apiEndPoint = fbiRequest.apiRootUrl();

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
     * Loop to display only One criminal on base request
     */ 
    showOneCriminalRequest: function()
    {        

        apiEndPoint = fbiRequest.apiRootUrl(); 

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
                document.getElementById('mydiv').innerHTML = `🤩 LAST WANTED ${count} ON 20 🤩`;

                template.setCardTemplateElmts(myObject.images[0].original, myObject.title, myObject.description, myObject.dates_of_birth_used);
                //set style for solo cards display
                template.setCardSoloStyle();

                    if(count === myDatas.items.length){
                        count = 0;
                        button.classList.remove("btn-primary");
                        button.classList.add("btn-warning");
                        button.innerHTML = `C'est fini, on repart au début de la liste ! `.toUpperCase();
                    };

                    //réinitialisation de la classe du boutton au premier clic si on a fait une boucle
                    if (count === 1){
                        button.classList.remove("btn-warning");
                        button.classList.add("btn-primary");   
                    };
                
                    break

                } //close for      
            }); //close event     
        })//close then callback 
    },

   
}






    

    

