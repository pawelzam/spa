// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAz1JN9S3CnqETnp9cfW6LTTSlw9SzNzis",
    authDomain: "my-spa-template.firebaseapp.com",
    projectId: "my-spa-template",
    storageBucket: "my-spa-template.appspot.com",
    messagingSenderId: "1098886911186",
    appId: "1:1098886911186:web:b55671718622b8af51090b",
    measurementId: "G-CGGEPZTQQG",
    databaseURL: "https://my-spa-template-default-rtdb.europe-west1.firebasedatabase.app/"
  },
  systemName: 'ACME LTD',
  sections: [
    {
      id: "a",
      name: "About",
      css: "background-image: url('https://firebasestorage.googleapis.com/v0/b/my-spa-template.appspot.com/o/bg1.jpg?alt=media&token=ea28a293-d113-44af-aae5-1825db6494f2'); background-repeat: no-repeat; background-size: cover;",
      blocks: [
        {
          title: "About this project",
          content: "Simple Angular SPA application template which gives possibility to create new application skeleton using configurable sections, blocks and images. Everything you can see here is generated based on configuration, including menu, descriptive blocks, images.",
          css: "max-width: 400px; margin: 0 auto;",
          photos: [{ url: "https://firebasestorage.googleapis.com/v0/b/my-spa-template.appspot.com/o/1.png?alt=media&token=67dc247c-55f6-4b64-8df0-5fdc646d98ec", css: "max-width: 100%; max-height: 100%;" }]
        },
        {
          title: "Sample block with picture",
          content: "Backyard",
          css: "max-width: 400px; margin: 0 auto;",
          photos: [{ url: "https://firebasestorage.googleapis.com/v0/b/my-spa-template.appspot.com/o/2.jpg?alt=media&token=c620c59b-ba29-4273-82e7-5b5eb7f7a142", css: "max-width: 100%; max-height: 100%;" }]
        },
        {
          title: "Long text block",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
          css: "max-width: 600px; margin: 0 auto;"        
        }]      
    },
    {
      id: "b",
      name: "Section",
      css: "background-image: url('https://firebasestorage.googleapis.com/v0/b/my-spa-template.appspot.com/o/bg1.jpg?alt=media&token=ea28a293-d113-44af-aae5-1825db6494f2'); background-repeat: no-repeat; background-size: cover;",
      blocks: [
        {
          title: "Block with map",
          content: "<style>.mapouter{ margin: auto; width: 50%; height: auto!important; } .gmap_canvas{ border: 2px solid grey; padding: 5px; height: 300px!important; }</style><div class='mapouter'><div class='gmap_canvas'><iframe style='width: 100%; height: 100%;' id='gmap_canvas' src='https://maps.google.com/maps?q=Green%20Gate%20House&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe><a href='https://fmovies2.org'>fmovies</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href='https://www.embedgooglemap.net'>embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>",
          css: "max-width: 800px"
        },
        {
          title: "Only picture",
          css: "max-width: 600px; margin: 0 auto;",
          photos: [{ url: "https://firebasestorage.googleapis.com/v0/b/my-spa-template.appspot.com/o/1.png?alt=media&token=67dc247c-55f6-4b64-8df0-5fdc646d98ec", css: "max-width: 100%; max-height: 100%;" }]
        },]
    },
    {
      id: "c",
      name: "Concact",
      css: "background-image: url('https://firebasestorage.googleapis.com/v0/b/my-spa-template.appspot.com/o/bg1.jpg?alt=media&token=ea28a293-d113-44af-aae5-1825db6494f2'); background-repeat: no-repeat; background-size: cover;",
      blocks: [
        {
          title: "Contact us",
          content: "<div class='t-a-c'><div><h3>ACME LTD</h3><div><div>Szkolna 15B</div><div>05-250 Radzymin, Poland</div><div>",
          css: "max-width: 500px"
        }],
      photos: [{ url: "https://firebasestorage.googleapis.com/v0/b/my-spa-template.appspot.com/o/1.png?alt=media&token=67dc247c-55f6-4b64-8df0-5fdc646d98ec", css: "max-width: 100%; max-height: 100%;" }]
    },
  ]
};