const fbiRequest = {
 
/**
 * Add listener
 * and init functions I need
 */
listenerOnSearchOfficeSubmit: function() 
    {     
        document.getElementById('validate').addEventListener('click', fbiRequest.HandleApiRequest);
        formsAction.formSubmit();
        formsAction.showOneCrimalOnClick();
        fbiRequest.onLoadRequest();
        template.personnalTitleInDivStyle(); 
         
    },

 

/**
 * Méthode qui apelle la requête de base
 * appellée au chargement du dom dans app.init()
 */ 
onLoadRequest: function(){

        apiEndPoint = app.apiRootUrl()

        // Préparation de la config pour la requête HTTP
        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };

        // Exécution de la requête HTTP via fetch en lui envoyant la config
        //fetch(app.apiRootUrl, config)
        fetch(apiEndPoint, config)
            // La requête exécutée, alors j'exécute le callback du then
            .then(function(response) {
                // Convertion de la réponse en un objet JS et on le retourne
                return response.json();
        })
        // Récupération d'une une variable js depuis le return response.json() du then précédent
        // On la nomme comme on veut, et on l'utilise dans le callback ici
        .then(function(responseObjects) { 

        for (const objectKey in responseObjects.items) {
  
        const myObjects =  responseObjects.items[objectKey];   
        template.setCardTemplateElmts(myObjects.images[0].original, myObjects.title, myObjects.description, myObjects.dates_of_birth_used);

            } //closure de ma loop for in
        })//closuresecond then 
  
},//function closure


/** 
 * Méthode de requette sur sur les value entrées dans le formulaire
 */
HandleApiRequest: function() 
    {      
 
        //si je n'ai pas de ville je resette le titre pour ne pas afficher de ville
        if(citySearch =! ''){
            console.log(citySearch)
            formsAction.titleReset()
        };

        //document.getElementById('mydiv').innerHTML = `🤩 FBI API REQUEST 🤩`;

        apiEndPoint = app.apiRootUrl()

        // Préparation de la config pour la requête HTTP
        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };
    
        // Exécution de la requête HTTP via fetch en lui envoyant la config
        //fetch(app.apiRootUrl, config)
        fetch(apiEndPoint, config)
            // La requête exécutée, alors j'exécute le callback du then
            .then(function(response) {
                // Convertion de la réponse en un objet JS et on le retourne
                return response.json();
        })
        // Récupération d'une une variable js depuis le return response.json() du then précédent
        // On la nomme comme on veut, eg:data et on l'utilise dans le callback ici
        .then(function(responseObjects) {

        for (const objectsIndexs in responseObjects.items) {
        //myObject contient ici mes 20 objets et leur clés/propriétés à eux  
        const myObjects =  responseObjects.items[objectsIndexs];
        template.setCardTemplateElmts(myObjects.images[0].original, myObjects.title, myObjects.description, myObjects.dates_of_birth_used);
        
                } //closure de ma loop for in 
            })//closuresecond then 
    },//closure function
   
/**
 * Méthode qui apelle UN et UN seul criminel sur la recherche de base
 * appellée au chargement du dom dans app.init()
 */ 
showOneCriminalRequest: function(){        

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

        .then(function(responseObjects) { 
                   
                const button = document.getElementById('but');
                let count = 0; // initialisation du compteur

                button.addEventListener('click', function() {
                    // reset couleur de fond du header si elle a été pasée en rouge avant
                    myDivStyle = document.getElementById('mydiv').style.background = '#3C3B6E';
                    // je resete la banner si il y a eu une recherche faite avant
                    formsAction.titleReset();

                    for (i = 0; count <= 20; count++) {
                    
                        var TheObject = responseObjects.items[count++];
                        button.innerHTML = `${TheObject.title}`;
                        document.getElementById('mydiv').innerHTML = `🤩 LAST ${count}/20 🤩`;
                        
                        template.setCardTemplateElmts(TheObject.images[0].original, TheObject.title, TheObject.description, TheObject.dates_of_birth_used);
                        template.setCardSoloStyle();
       
                        if(count == 20){
                            count = 0;
                           
                            const message = `C'est fini, on repart au début de la liste ! `;
                            const uppercasemessage = message.toUpperCase();
                            button.classList.remove("btn-primary");
                            button.classList.add("btn-warning");
                            button.innerHTML = uppercasemessage;
                        }
                        //réinitialisation de la classe du boutton au premier clic si on a fait une boucle
                        if (count == 1){
                            button.classList.remove("btn-warning");
                            button.classList.add("btn-primary");
                           
                        }

                    break

                } //closure for      
            }); //closure event     
        })//closuresecond then 
 
},//function closure


   
}//fermeture classe






    

    

