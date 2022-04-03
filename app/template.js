const template = {

/**
 * First Create all HTML tags for cards
 * Second append all values in HTML tags
 * Accept values from for loop of api.js file
 * Method called in api.js file before api request response
 * @param { String }
 */
setCardTemplateElmts: function(image, titre, description, date){
          
      //création de la div card-group et des ses classes
      const myDivCardGroup = document.createElement('div');
      myDivCardGroup.classList.add('card-group');
      //création de la div card
      const myDivCard = document.createElement ('div');
      myDivCard.classList.add('card');
      //création de la balise img
      const myImg = document.createElement ('img')
      myImg.classList.add('card-img-top');
      //puis insertion de l'image
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

      //puis j'ajoute myDivCard à cardGroup
      cardGroup.append(myDivCard)

      if (myImg){
      myDivCard.append(myImg);
      } else {
      myDivCard.append('Pas d\'image');
      };
      
      myDivCard.append(myDivCardBody);
      myDivCardBody.append(myDivCardTitle);

      if (titre){
        myDivCardTitle.append(template.limitCaractersLenght(titre, 13))
      } else {
        myDivCardTitle.append('Pas de titre')
      };
      
      myDivCardBody.append(myDivCardText);

      if (description){
        myDivCardText.append(template.limitCaractersLenght(description, 80));
      } else {
        myDivCardText.append('Pas de description');
      };
      
      myDivCardBody.append(myDivCardText);
      myDivCardBody.append(myDivCardTextDate);
      myDivCardTextDate.append(mySmallBalise);

      if (date){
          mySmallBalise.append(date[0]); 
      }
      else {
      mySmallBalise.append('Pas de date renseignée !');  
      };

},

   /**
     * Méthode créer une div à l'intérieur de la div
     * ayant l'id myDiv dans le code HTML
     */
  curentOfficeTitleInDiv: function (){
      let myElement = document.createElement ('div');
      // je passe myElement dans myDiv
      myDiv = document.getElementById('mydiv').append(myElement);
      // je récupère la valeur du current office soummis dans le form
      let currentOffice = document.getElementById('input').value;
      //ici je passe l'office courrant pour l'afficher dans la banière
      if(currentOffice){
        let myContent = document.createTextNode('🤩  MOST WANTED FBI IN ' + currentOffice.toUpperCase() + ' 🤩');
        myDivStyle = document.getElementById('mydiv').style.background = '#3C3B6E';
        myElement.append(myContent);
      } else {
        let myContent = document.createTextNode('🤩  OUPS ! YOU MUST SELECT A CITY IN LIST 🤩'); 
        myDivStyle = document.getElementById('mydiv').style.background = 'red';
        myElement.append(myContent); 
      }

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
     
      soloCardStyle = document.querySelector('.card')
      soloCardStyle.style.width = '100%';
      soloCardPic = document.querySelector('img')
      soloCardPic.classList.remove('card-img-top')
  },

/**
 * vide la div template a chaque requête
 */
 cardGroupDivReset: function(){
  document.getElementById('card-group').innerHTML = ''
},

/**
* vide la div du Titre de la banner
*/
titleReset: function(){
  document.getElementById('mydiv').innerHTML = ''
  myDivStyle = document.getElementById('mydiv').style.background = '#3C3B6E';
},



limitCaractersLenght: function(text, count){

  return text.slice(0, count) + ' ...';
},


};