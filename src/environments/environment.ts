// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "Insert your API key here",
    authDomain: "Insert Domain here",
    databaseURL: "Insert data base url here",
    projectId: "Insert project id here",
    storageBucket: "Insert storage bucket link",
    messagingSenderId: "Insert Messaing Sender Id"
  }
};
