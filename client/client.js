async function exampleGETRequest (e) {
    try {
        const teamColour = await fetch('http://127.0.0.1:8090/team/current/colour');
        const teamColourText = await teamColour.text();
    } catch (e) {
        console.log(e);
    }
}

async function examplePOSTRequest (e) {
    try {
        const currentTeam = await fetch('http://127.0.0.1:8090/team/current');
        const currentTeamText = await currentTeam.text();
        await fetch('http://127.0.0.1:8090/team/newEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ day: `${date}`, time: `${timeInfo}`, teamID: currentTeamText })
        });
    } catch (e) {
        console.log(e);
    }
}

// Write your code here: