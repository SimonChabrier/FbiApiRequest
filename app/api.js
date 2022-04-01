const fbiRequest = {

    /** 
     * Méthode de requette sur sur les value entrées dans le formulaire
     * apelée dans fbiApiRequestOnFormSubmit()
     */


    fbiApiRequest: function(event) 
    {
        
        const buttonOnClick = document.getElementById('validate');
        buttonOnClick.addEventListener('click', function () {
        
        // On récupère la value de l'élément input du form pour dynamiser le endpoint de la requête
        cityEntry = document.getElementById('input').value;
        const apiDynamicUrl = 'https://api.fbi.gov/wanted/v1/list?field_offices=' + cityEntry;
        
        //si je n'ai pas de ville je resette le titre pour ne pas afficher de ville
        if(cityEntry =! ''){
        getFormValue.titleReset()
        };

        // Préparation de la config pour la requête HTTP
        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };
    
        // Exécution de la requête HTTP via fetch en lui envoyant la config
        //fetch(app.apiRootUrl, config)
        fetch(apiDynamicUrl, config)
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
        console.log(myObjects.title)
        //m'afficher dans les criminels. Ce if crée un doublon en ajoutant le no d'un criminel déjà présent dans la page
            if (myObjects.title.includes('DIANA')) {
            
            template.setCardTemplateElmts(app.simImage, app.simNom, app.text, '04 Octobre 1979');
            }//if closure
        
            //remplacement des valeur null sur la date - il faudrait faire d'autres if pour filtrer chaque valeur si jamais les valeurs photos etc étaient = null !
            if (myObjects.images[0].original == null || myObjects.title == null || myObjects.description == null || myObjects.dates_of_birth_used === null) {
            template.setCardTemplateElmts(myObjects.images[0].original, myObjects.title, myObjects.description, 'Pas de Date');
        
            }//if closure

            //si il y a bien des valeurs alors je passe ici
            if (myObjects.images[0].original && myObjects.title && myObjects.description && myObjects.dates_of_birth_used !== null) {
        
            // je passe mes valeur en argument de ma méthode setCardTemplateElmts
            template.setCardTemplateElmts(myObjects.images[0].original, myObjects.title, myObjects.description, myObjects.dates_of_birth_used);
            } //if closure
        
        } //closure de ma loop for in
        
        })//closuresecond then 

        });//closure 2eme eventlistener et prevent default

    },//closure function
   
 
    /**
     * Méthode qui apelle la requête de base
     * appellée au chargement du dom dans app.init()
     */ 
    onLoadRequest: function(){

    if(app.apiRootUrl === 'https://api.fbi.gov/wanted/v1/list?field_offices=')
    {

        // Préparation de la config pour la requête HTTP
        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };
    
        // Exécution de la requête HTTP via fetch en lui envoyant la config
        //fetch(app.apiRootUrl, config)
        fetch(app.apiRootUrl, config)
            // La requête exécutée, alors j'exécute le callback du then
            .then(function(response) {
                // Convertion de la réponse en un objet JS et on le retourne
                return response.json();
        })
        // Récupération d'une une variable js depuis le return response.json() du then précédent
        // On la nomme comme on veut, et on l'utilise dans le callback ici
        .then(function(responseObjects) { 

        for (const objectsIndexs in responseObjects.items) {

        //myObjects contient ici chaque objet de la propriété items (items = les fiches des criminels)
        // de l'objet retourné par la requête
        const myObjects =  responseObjects.items[objectsIndexs];   

        //m'afficher dans les criminels. Ce if crée un doublon en ajoutant le no d'un criminel déjà présent dans la page
        if (myObjects.title == 'SARA NICOLE GRAHAM') {
        template.setCardTemplateElmts(app.simImage, app.simNom, app.text, '04 Octobre 1979');
        }//if closure
    
        //remplacement des valeur null sur la date - il faudrait faire d'autres if pour filtrer chaque valeur si jamais les valeurs photos etc étaient = null !
        if (myObjects.images[0].original == null || myObjects.title == null || myObjects.description == null || myObjects.dates_of_birth_used === null) {
        template.setCardTemplateElmts(myObjects.images[0].original, myObjects.title, myObjects.description, 'Pas de Date');
        }//if closure

        //si il y a bien des valeurs alors je passe ici
        if (myObjects.images[0].original && myObjects.title && myObjects.description && myObjects.dates_of_birth_used !== null) {
        // je passe mes valeur en argument de ma méthode setCardTemplateElmts
        template.setCardTemplateElmts(myObjects.images[0].original, myObjects.title, myObjects.description, myObjects.dates_of_birth_used);
        } //else closure
        
            } //closure de ma loop for in
        })//closuresecond then 
    } 

},//function closure

    /**
     * Méthode qui apelle UN et UN seul criminel sur la recherche de base
     * appellée au chargement du dom dans app.init()
     */ 
    showOneCriminalRequest: function(){
        
    if(app.apiRootUrl === 'https://api.fbi.gov/wanted/v1/list?field_offices='){
        
        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        };
    
        fetch(app.apiRootUrl, config)
            .then(function(response) {
                return response.json();
        })

        .then(function(responseObjects) { 
                
                //todo mettre ma fonction de compteur ici
             
                // ok récupère le 1er objet de la liste des objets 
                // var Object = responseObjects.items[0];
                //todo ici il faut que je change l'index de l'objet
                const button = document.getElementById('but');
                let count = 0;

                button.addEventListener('click', function() {
                    
                    for (i = 0; count <= 20; count++) {
                        var TheObject = responseObjects.items[count++];
                        button.innerHTML = `${TheObject.title} EST LA RECHERCHE N° ${count}/20 `;
                        
                        
                        //remplacement des valeur null sur la date - il faudrait faire d'autres if pour filtrer chaque valeur si jamais les valeurs photos etc étaient = null !
                        if (TheObject.images[0].original == null || TheObject.title == null || TheObject.description == null || TheObject.dates_of_birth_used === null) {  
                        template.setCardTemplateElmts(TheObject.images[0].original, TheObject.title, TheObject.description, 'Pas de Date');
                        template.setCardSoloStyle();
                        }//if closure
                            
                        if (TheObject.images[0].original && TheObject.title && TheObject.description && TheObject.dates_of_birth_used !== null) {
                        // je passe mes valeur en argument de ma méthode setCardTemplateElmts
                        
                        template.setCardTemplateElmts(TheObject.images[0].original, TheObject.title, TheObject.description, TheObject.dates_of_birth_used);
                        console.log('showOneCriminalRequest')
                        template.setCardSoloStyle();
                        }
                        //reset compteur à 20 je reviens au début
                        //je change le style du bouton
                        if(count == 20){
                            count = 0;
                           
                            const message = `C'est fini mon pote, on repart au début de la liste ! `;
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
    }//if closure
},//function closure

   
}//fermeture classe






    

    

