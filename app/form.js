const formsAction = {


listeningSubmit : function (){
    document.getElementById('searchInput').addEventListener ('click', formsAction.handleFormSubmit())
},

handleFormSubmit: function() {
    //todo ici reseter le compteur etc

    fbiRequest.listenerOnSearchOfficeSubmit();
    
    document.getElementById('searchInput').addEventListener ('click', function (event) {
    //clean page template
    template.cardGroupDivReset();
    //stop curent submit until next click event
    event.preventDefault();
    //set current post office in header div
    if (document.getElementById('mydiv').innerHTML == ''){
        template.curentOfficeTitleInDiv()
    };
    
    });
},


listeningNextButton: function (){
    document.getElementById('nextBut').addEventListener('click', formsAction.handleShowOneCrimalOnClick())  
},

handleShowOneCrimalOnClick: function() {
    
    fbiRequest.handleShowOneCriminalRequest()
    
    document.getElementById('nextBut').addEventListener('click', function (event) {
    //clean page template
    template.cardGroupDivReset();
    //stop curent submit until next click event
    event.preventDefault();
    });
},


}//closure class

