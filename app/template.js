const template = {

/**
 * First Create all HTML tags for cards
 * Second append all values in HTML tags
 * Accept values from for loop of api.js file
 * Method called in api.js file before api request response
 * @param { String }
 */
setCardTemplateElmts: function(image, titre, description, date){
          
      //création de la div card-group
      const myDivCardGroup = document.createElement('div');
      myDivCardGroup.classList.add('card-group');

      //création de la div card-group
      const myDivCard = document.createElement ('div');
      myDivCard.classList.add('card');

      //création de la balise img - ici à la fin j'ai toutes mes images avec la bonne class et le lien de chaque image
      const myImg = document.createElement ('img')
      myImg.classList.add('card-img-top');
      myImg.src = image;

      //création de la div card-body
      const myDivCardBody = document.createElement ('div');
      myDivCardBody.classList.add('card-body');

      //création de la div card-title
      const myDivCardTitle = document.createElement ('h5');
      myDivCardTitle.classList.add('card-title');

      //création de la balise p pour la description
      const myDivCardText = document.createElement ('p');
      myDivCardText.classList.add('card-text');

      //création de la balise p pour la date
      const myDivCardTextDate = document.createElement ('p');
      myDivCardTextDate.classList.add('card-text');

      //création de la balise small pour insérer la date dedans
      const mySmallBalise = document.createElement('small')
      mySmallBalise.classList.add('text-muted');

      //! INSERTIONS
      //ici je me positionne par rapport à card-group 
      const cardGroup = document.getElementById('card-group')

      //ici j'ajoute myDivCard à cardGroup
      cardGroup.append(myDivCard)

      if (myImg != null){
      myDivCard.append(myImg);
      } else {
      myDivCard.append('Pas d\'image');
      }
      
      myDivCard.append(myDivCardBody);
      myDivCardBody.append(myDivCardTitle);

      if (titre =! null){
        myDivCardTitle.append(titre)
      }else{
        myDivCardTitle.append('pas de titre')
      }
      
      myDivCardBody.append(myDivCardText);

      if(description != null){
        myDivCardText.append(description);
      }else{
        myDivCardText.append('pas de description');
      }
      
      myDivCardBody.append(myDivCardText);
      myDivCardBody.append(myDivCardTextDate);
      myDivCardTextDate.append(mySmallBalise);

      if (date != null)
      mySmallBalise.append(date);
      else {
      mySmallBalise.append('YALLAHHHHH');  
      }

},

   /**
     * Méthode créer une div à l'intérieur de la div
     * ayant l'id myDiv dans le code HTML
     */
  personnalTitleInDiv: function (myText){
      let myElement = document.createElement ('div');
      // je passe myElement dans myDiv
      myDiv = document.getElementById('mydiv').append(myElement);
      let currentOffice = document.getElementById('input').value;
      //console.log(currentOffice)
      //ici je passe l'office courrant pour l'afficher dans la banière
      let myContent = document.createTextNode(myText + currentOffice.toUpperCase());
      //console.log(currentOffice.toUpperCase())
      // je passe myContent dans myElement
      myElement.append(myContent);
  },

  /**
   * Méthode pour appliquer un style à la div
   * ayant l'id'myDiv dans le code HTML
   */
  personnalTitleInDivStyle: function() {
      myDivStyle = document.getElementById('mydiv');
      myDivStyle.style.background = '#3C3B6E';
      myDivStyle.style.textAlign = "center";
      myDivStyle.style.fontSize = "2em";
      myDivStyle.style.fontWeight = "400";
      myDivStyle.style.padding = '20px';
      myDivStyle.style.color = 'white';
      myDivStyle.style.marginBottom = '10px';
      myDivStyle.style.marginTop = '15px';
  },


  setCardSoloStyle: function(){
     
      soloCardStyle = document.querySelector('img');
      soloCardStyle.style.width = '550px';
      soloCardStyle.style.height = 'auto';
      console.log('teplate.js Methode setCardSoloStyle ligne 102')
  },

    // setFocusOnButtons: function(){

    // const buttonFocusonValidateButton = document.getElementById("validate");
    // buttonFocusonValidateButton.addEventListener('mouseover', function(){
    // buttonFocusonValidateButton.focus();
    // console.log('setFocusOnButtons')
    // });
    
    // const buttonFocusonResetButton = document.getElementById("onload");
    // buttonFocusonResetButton.addEventListener('mouseover', function(){
    // buttonFocusonResetButton.focus();
    // console.log('setFocusOnButtons')
    // });
    // },

};