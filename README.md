# Instructions for Use
- If you haven't already, set up Git using [this guide](https://docs.github.com/en/get-started/quickstart/set-up-git)
- If you haven't alread, install NodeJS and NPM using [this guide](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)
- Fork this repository using [this guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- Install dependencies by typing 'npm install' in the command line while in the project
- Start the server with 'npm start' and open http://localhost:8090 in your browser
(NOTE: if this does not work, try using 127.0.0.1 instead of localhost, you'll have to change the endpoint URI's in the client.js too)

When updating front-end code, refresh the page to see changes. I have not set up hot reloading.


# Task
This is a project to practice working with an API and GitHub. I will write down some things I think would be useful to give a go as a rough guideline, but feel free to just have a mess around with the code and come up with something yourself!

### Part 1
This aims to provide a basic introduction into using an API!

1. Select the h1 element with 'Hello!' in it [help](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementbyid) (NOTE: use client.js, not the script tags for your JavaScript)
2. Modify the exampleGETRequest in client.js to change the h1 element text to testText
3. Refresh the page and boom! You have made your first API call! It's that easy!

The typical way that JavaScript is used in the browser is by handling events (such as clicking a button, or in this case, when the page loads) and calling a function (to handle the event, usually involving an API request or some form of action).

4. Make a form in index.html, including one text input and a submit button
5. In client.js, make it so that the submit button will console.log() (this is print() in Python) the text in the input field of the form. To view the console, use Inspect Element in your browser and click on the Console tab. [help](https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/), [more help](https://www.javascripttutorial.net/javascript-dom/javascript-form/)
6. Modify examplePOSTRequest to get the input of the form
7. Modify the form submit event listener to call examplePOSTRequest instead of console.logging the text field on submit
8. Check the test.json file to confirm that you have added a new message to the database!

Well done! POST and GET requests are the two main types that you will use. The next steps are a bit more vague so that you're able to do some of your own digging online. A bit of advice before going onto this section, async functions are used for calling API's. This is because the information won't be returned immediately, and await executes the code whenever the information is ready. If you want to look into this more, read up on promises.

9. Now that you have the GET and POST requests working, change url in the GET request to the other GET request in app.js (the back-end). Get the last element of the array in test.json using this API endpoint.
10. When the form submits, make it so that the POST request is called, then the GET request so that the h1 automatically updates to the submitted value. You may want to research anonymous or arrow functions to use as the callback to make your code a bit tidier.

Your code is saved on your local device, but to publish the changes, use the Source Control tab on the left in VSCode to submit your changes to your repo on GitHub!

### Part 2
This will a lot more loose and feel free to mess around! Make sure to read app.js, it's okay to not understand what every line does, but the necessary endpoints will be in there.