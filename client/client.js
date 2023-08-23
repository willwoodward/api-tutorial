// Write your code here:
window.addEventListener("DOMContentLoaded", exampleGETRequest);

async function exampleGETRequest (e) {
    try {
        const test = await fetch('http://localhost:8090/test/get');
        const testText = await test.text();
        console.log(testText);
        // Change the h1 element text to testText:

    } catch (e) {
        console.log(e);
    }
}

async function examplePOSTRequest (e) {
    try {
        await fetch('http://localhost:8090/test/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ message: 'Hello World 2!' })
        });
    } catch (e) {
        console.log(e);
    }
}