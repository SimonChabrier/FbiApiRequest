const app = {
    // Methods need on init
    init: function()
    {
        console.log("init");
        fbiRequest.onLoadRequest();
        formsAction.formSubmit();
        formsAction.showOneCrimalOnClick(); 
    },
  
};

// Call Init function on DOM content loaded
document.addEventListener('DOMContentLoaded', app.init);


