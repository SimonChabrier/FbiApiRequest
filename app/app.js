const app = {
    // Methods need on init
    init: function()
    {
        console.log("init");
        fbiRequest.onLoadRequest();
        fbiRequest.listeninCurrentOfficeSubmit();
        formsAction.listeningSubmit();
        formsAction.listeningNextButton(); 
    },
  
};

// Call Init function on DOM content loaded
document.addEventListener('DOMContentLoaded', app.init);


