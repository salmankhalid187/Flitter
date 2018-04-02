# Flitter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Features

1. This repo demonstrates the integeration of firebase, Angular 5, Bootsrap 4
2. Its using firebase authentication for login and sign up of users.
3. Its fetching lists from Firebase RTD. 
4. All pages are responsive which has been acheived using bootsrap.

## Live Demo

This project has been deployed on this link:

https://flitter-a5ea4.firebaseapp.com/

## Deployment Steps

1. Install npm https://www.npmjs.com/get-npm.
2. Install AngularCli using this command 'npm install -g @angular/cli'
3. Clone the repo and go into the project
4. Execute this command 'npm install'
5. ng serve -—o
Currently this project is using default Firebase configuration. If you want to deploy this project in your own firebase account then continue on these steps.
6. Go to https://console.firebase.google.com and create New project.
7. Go to 'Add Firebase to your web app' from dashboard and copy firebase configurations.
8. Add these configurations to (src/environment.ts and src/environment.prod.ts)
9. Install firebase-tools using this link and deploy your project (https://github.com/firebase/firebase-tools)

NOTE: This project requires public read access for all posts so please make sure to set data base rules as follows:

{
  	"rules": {
	    ".read": "true",
	    ".write": "auth != null"
	  }
}

These rules can be set from database.rules.json and also from firebase Dashboard.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Refrences

https://github.com/angular/angular-cli/wiki
https://angular.io/tutorial/toh-pt2#final-code-review
https://firebase.google.com/docs/hosting/
https://github.com/angular/angularfire2/blob/master/docs/rtdb/querying-lists.md
https://ng-bootstrap.github.io/#/getting-started
https://ng-bootstrap.github.io/#/components/modal/examples
https://scotch.io/tutorials/deploying-an-angular-cli-app-to-production-with-firebase
https://codingthesmartway.com/angular-2-forms-tutorial-validation/
https://angular.io/api/forms/PatternValidator


