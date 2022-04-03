const fbiRequest = {

    apiRootUrl: function ()
    {
        citySearchValue = document.getElementById('selectCity').value
        
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
         document.getElementById('searchInput').addEventListener('click', fbiRequest.HandleApiRequest);
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

    listeninCurrentOfficeSubmit: function() 
    {     
        document.getElementById('searchInput').addEventListener('click', fbiRequest.handleShowOneCriminalRequest);
        
    },

    /**
     * Loop to display only One criminal on base request
     */ 
    handleShowOneCriminalRequest: function()
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
            const button = document.getElementById('nextBut');

            document.getElementById('searchInput').addEventListener ('click', function(){
                count = 0
                currentInputValue = document.getElementById('selectCity').value
                if (currentInputValue){
                button.innerHTML = `CLICK FOR DETAILS`;
                button.classList.remove("btn-warning");
                button.classList.add("btn-primary"); 
                console.log(count)
                } else {
                    button.innerHTML = 'LAST 20 MOST WANTED';
                }
            })
            
            button.addEventListener('click', function() {
               
                // je resete la banner si il y a eu une recherche faite avant
                template.titleReset();
                // je resete la template
                template.cardGroupDivReset();

                for (init = 0; count <= myDatas.items.length; count++) {
                let myObject = myDatas.items[count++];

                button.innerHTML = `${myObject.title}`;
                document.getElementById('mydiv').innerHTML = `🤩 LAST WANTED ${count} ON ${myDatas.items.length}  🤩`;

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






    

    

