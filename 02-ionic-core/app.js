fetch('https://devfest-nantes-2018-api.cleverapps.io/blog')
    .then(function (response) {
        // traiter la réponse
        if (!response.ok) {
            throw Error(response.statusText);
        }
        // lecture du corps de la réponse en tant que JSON.
        return response.json();
    })
    .then(function (articlesAsJson) {
        // traitement de l'objet
        html = "";
        articlesAsJson.forEach(article => {

            html +=
                ` <ion-card >
                
               <img src="https://devfest2018.gdgnantes.com/${article.image}">
               <ion-card-header> <ion-card-title>${article.title}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
               ${article.brief}
            </ion-card-content>
            </ion-card>`

        });

        $('#articles').append(html);


    })
    .catch(function (error) {
        console.log('Il semble avoir un soucis...', error);
    });