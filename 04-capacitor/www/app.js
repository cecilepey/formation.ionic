const { Plugins } = capacitorExports;
const { Camera, CameraResultType } = Plugins;

document.getElementById('camera').addEventListener('click', async function takePicture() {

    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64
    });
    // image.webPath will contain a path that can be set as an image src. 
    // You can access the original file using image.path, which can be 
    // passed to the Filesystem API to read the raw data of the image, 
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.base64String;
    // Can be set to the src of an image now

    document.getElementById('profil').src = 'data:image/png;base64,' + imageUrl
    //imageElement.src = imageUrl;
}
)


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