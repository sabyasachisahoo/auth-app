Installation
This is a Node.js module available through the npm registry.

Before installing, download and install Node.js. Node.js 0.10 or higher is required.

Installation is done using the npm install command:

$ npm install express
Follow our installing guide for more information.

Security Issues
If you discover a security vulnerability in Express, please see Security Policies and Procedures.

Quick Start
The quickest way to get started with express is to utilize the executable express(1) to generate an application as shown below:

Install the executable. The executable's major version will match Express's:

$ npm install -g express-generator@4
Create the app:

$ express /tmp/foo && cd /tmp/foo
Install dependencies:

$ npm install
Start the server:

$ npm start

Philosophy
The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.

Express does not force you to use any specific ORM or template engine. With support for over 14 template engines via Consolidate.js, you can quickly craft your perfect framework.

$ node examples/content-negotiation
Tests
To run the test suite, first install the dependencies, then run npm test:

$ npm install
$ npm test

License 

ISC