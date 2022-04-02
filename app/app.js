const app = {
    
    //set request dynamics params
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
     * Méthode init
     * Call click listener
     */
    init: function()
    {
        console.log("init");
        fbiRequest.listenerOnSearchOfficeSubmit();
        fbiRequest.showOneCriminalRequest()
        formsAction.formSubmit();
        formsAction.showOneCrimalOnClick();
        fbiRequest.onLoadRequest();
        template.personnalTitleInDivStyle(); 
        document.getElementById('mydiv').innerHTML = `🤩 FBI API REQUEST 🤩`;
        
    },
  
};

// I call Init function on DOM content loaded
document.addEventListener('DOMContentLoaded', app.init);


