# NgEcommerce

This an Angular Project for an E-Commerce Store front.


## Requirements

1. Node v12+
2. Angular v15+
3. Angular Material
4. Firebase Realtime Database

## Authentication
The project uses Firebase realtime database SDK for signup and signin process. A user token is sent back as part of the response and the system uses it for authetication. The token is sent as an auth payload for each request to Firebase.

## Project Set up

1. Fork the project
2. Clone the project
3. Navigate into project folder and run `npm install`
4. Run the project `ng serve`
5. Open any broswer and navigate to `http://localhost:4200`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
