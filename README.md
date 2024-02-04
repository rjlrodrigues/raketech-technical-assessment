# Raketech-Technical-Assessment
- [Description](#Description)
- [Instalation](#Instalation)
    - [Installing Node](#Installing-Node)
    - [Node installation on Windows](#Node-installation-on-Windows)
    - [Node installation on Ubuntu](#Node-installation-on-Ubuntu)
    - [Node installation on macOS](#Node-installation-on-macOS)
    - [Project installation dependencies](#Project-installation-dependencies) 
- [Run](#Run)

## Description
The objective of this project is to write two tests, one for the User Interface (UI) where I used ``playwright`` framework with JavaScript for this, another for the Application Programming Interface (API) where I used ``postman/newman``.
- ### UI Test 
The test consists of starting on the https://raketech.com/ home page and navigate through the products subpage and from there access the CasinoGuide product, and after we enter the https://www.casinoguide.se/ webpage, the test should be completed.   
My approach to this was, first to find all the locators that we need to use with ``playwright`` to interact with the webpage, this step was made with ``playwright codegen``. 
After finding all the locators I created the actual test ``./tests/ui-test.spec.js``,  taking into consideration that we should always assert every step of the way. It was allso created a class with all the locators from the base page https://raketech.com/. This way, if we need to create another test that will have some action, like clicks and hover mouse, with the same locators the test will be simpler to create and to read.

- ### API Test 
``Postman`` was used to create the collection, but in this case, with just one request inside. The test was created inside ``Postman`` getting the response from  https://swapi.dev/api/people/ and acerting the ``skin_color`` of R2D2 was White and Blue. To be easier to run inside the project without having to install Postman, ``newman`` was added to the project  to run the API test.
    
## Installation
### Installing Node
- #### Node installation on Windows 

  Just go to [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Node installation on macOS

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ brew install node
      $ brew install npm

### Project installation dependencies 
This will install all the dependencies needed for the project. (``newman`` and ``playwright``). 

```
$ npm install 
```
## Run

To run the UI test just run the following command:

```
$ npm run ui-test
```

If we want to check the playwright report just run:
```
$ npm run report
```

To run the API test just run the following command:

```
$ npm run api-test
```
