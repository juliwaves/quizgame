const personalities = { 
    "sun": 0, // The Innovator
    "mercury": 0, // The Strategist
    "Corn": 0, // The Empath
    "venus": 0, // The Leader
    "mars": 0, // The Adventurer
    "Kale": 0, // The Analyst
    "uranus": 0, // The Connector
    "Sweet dwarf hotot": 0, // The Caregiver
    "pluto": 0, // The Visionary
    "Lotus Root": 0, // The Organizer
    "Bitter melon": 0, // The Maverick
    "dwarf hotot": 0, // The Realist
    "neptune": 0, // The Sage
    "himalayan": 0, // The Harmonizer
    "holland lop": 0, // The Performer
    "Okra": 0 // The Investigator
};
const gameData = {
    "1": {
        "text": "You and your vegetable friends want to plan a hangout in VeggieVille. What snacks are you bringing?",
        "choices": {
            "Beef sticks": [2,["mars","Bitter melon","holland lop"]],
            "Granola": [2,["mercury", "Kale", "neptune", "Sweet dwarf hotot"]],
            "Cucumbers and carrots": [2,["sun", "dwarf hotot", "mars", "Lotus Root", "Okra"]],
            "Crackers and cheese": [2, ["uranus", "pluto", "Corn"]]
        }
    },
    "2": {
        "text": "Where are you guys going to go?",
        "choices": {
            "The beach": [3,["sun", "Corn", "uranus", "holland lop"]],
            "A cute book store": [3, ["mercury", "Kale","neptune","Okra", "pluto"]],
            "Your friend's apartment": [3, ["Sweet dwarf hotot", "Lotus Root", "dwarf hotot", "himalayan"]],
            "Mount Evergetable": [3, ["venus", "mars", "Bitter melon", "sun"]]
        }
    },
    "3": {
        "text": "After gearing up with sunglasses and sunscreen, what are you going to do?",
        "choices": {
            "Build a sandcastle with your friends!": [0,["mars", "Lotus Root", "Bitter melon"]],
            "Set up a beach picnic": [0,["uranus", "holland lop", "Sweet dwarf hotot"]],
            "Explore tide pools and collect shells": [0,["sun", "Bitter melon"]],
            "Read the book you've been eyeing": [0,["neptune", "mercury", "Kale"]]
        }
    }, 
    "0" : {

    }
};

let currentState = 1;

function renderState(state) {
    console.log("b");
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');

    storyText.textContent = gameData[state].text;
    choicesContainer.innerHTML = '';

    for (const [choice, info] of Object.entries(gameData[state].choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        let nextState = info[0];
        button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
        choicesContainer.appendChild(button);
    }
}

function changeState(newState, selectedPersonalities) {
    console.log("changing states");
    console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedPlanet();
    } else {
        renderState(currentState);
    }
}

function revealMostSelectedPlanet() {
    console.log("calculating fate");
    let maxCount = 0;
    let maxPlanet = '';

    for (const [planet, count] of Object.entries(personalities)){
        if (count > maxCount) {
            maxCount = count;
            maxPlanet = planet;
        }
    }
    console.log(maxPlanet);
    const storyText = document.getElementById('story-text');
    storyText.textContent = `You are a ${maxPlanet}`;
    document.getElementById('choices').style.display = 'none';
}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    console.log("e");
    renderState(currentState);
};
