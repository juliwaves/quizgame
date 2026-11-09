const image = "smaller_images/in_pantry.png";

const gameData = {
    1: {
        text: "it’s a beautiful saturday. what are today’s plans?",
        image: "smaller_images/snackies.png",
        choices: {
            "a picnic with my friends. i’m bringing charcuterie!": [2, { sun: 1, jupiter: 2 }],
            "i’ll go on a walk see where the wind takes me": [2, { mars: 2, uranus: 1, pluto: 1 }],
            "total relaxation… video games, books, anything i want": [2, { neptune: 1 }],
            "finally some time to work on the book i’m writing. yippee!": [2, { venus: 1, mercury: 2, saturn: 1 }]
        }
    },
    2: {
        text: "the sky is getting dark all of a sudden…",
        image: "smaller_images/where_to.png",
        choices: {
            "that doesn’t make any sense. it’s supposed to be sunny all day!": [3, { jupiter: 1, sun: 1, saturn: 2 }],
            "oh, it’d be nice if it rained": [3, { uranus: 1, neptune: 1, pluto: 1 }],
            "no worries, i’ll have a good time regardless of the weather": [3, { mercury: 1, mars: 1 }],
            "i don’t even notice this": [3, { venus: 1 }]
        }
    },
    3: {
        text: "those weren’t clouds. the day is finally here: robots are taking over earth!",
        image: "smaller_images/at_beach.png",
        choices: {
            "AHHHHHH! WHAT DO WE DO": [4, { neptune: 1, pluto: 1 }],
            "i knew this would happen.": [4, { uranus: 1, jupiter: 2, mars: 1 }],
            "good thing i’ve always been nice to my computer": [4, { venus: 2, sun: 1 }, "computer"],
            "can’t we just share?": [4, { mercury: 1, saturn: 1 }, "sharing"]
        }
    },
    4: {
        text: "you and your loved ones gotta escape. what are you bringing?",
        image: "smaller_images/having_beach_fun.png",
        choices: {
            "my box of journals, old photos, and other memories. they’re irreplaceable!": [5, { neptune: 2, venus: 1 }, "journal"],
            "an emergency bag that i keep in my closet. it has food, water, and a space blanket.": [5, { mercury: 1, uranus: 1, saturn: 1 }, "bag"],
            "a cannon attachment for my ship, the RoboSlayer 9000. duh": [5, { mars: 2, sun: 1 }, "gun"],
            "a really complicated board game. we’re gonna need something to do in space": [5, { jupiter: 1, pluto: 2 }, "boardGame"]
        }
    },
    5: {
        text: "as you exit the atmosphere, an alarm sounds from the ship. robot attack imminent!",
        image: "smaller_images/beach_disaster.png",
        choices: {
            "robot, spare us! we have so much left to live for!": [6, { venus: 1, jupiter: 1, neptune: 1, pluto: 1 }],
            "bring it on! i’m ready for battle!": [8, { mars: 1, sun: 1 }, "fought"],
            "our ship is fast, we can speed away": [10, { mercury: 1, uranus: 1 }, "speed"],
            "quick, everyone hide!": [11, { saturn: 1 }, "hiding"]
        }
    },
    6: {
        text: "the robot’s programming is strong, and it’s totally unmoved by emotional pleas. it shoots a hole in your starboard side!",
        choices: {
            "continue": [13, {}]
        }
    },
    7: {
        text: "maybe your memory box can help? you quickly prepare an emotional presentation about the life you loved on earth. it’s so convincing, the robot goes against its programming and let you go.",
        choices: {
            "continue": [12, { sun: 1, venus: 2, saturn: 1 }]
        }
    },
    8: {
        text: "you chose to fight, but your weaponless ship is no match for a robot designed to take over earth.",
        choices: {
            "continue": [13, { sun: 1, mars: 1 }]
        }
    },
    9: {
        text: "good thing your ship has guns! the RoboSlayer 9000 is quite effective. ready, aim...",
        choices: {
            "fire!": [12, { mars: 2, sun: 1 }]
        }
    },
    10: {
        text: "you take control of the ship and floor it! what do you say into the loudspeaker mic?",
        choices: {
            "this is your captain speaking: fasten your seatbelts!": [12, { sun: 1, jupiter: 1, uranus: 1, mars: 1 }],
            "AHHHHHHH": [12, { mercury: 1, neptune: 1 }],
            "(lie) stay calm, everyone! all according to plan": [12, { saturn: 1, pluto: 1, venus: 1 }]
        }
    },
    11: {
        text: "everyone hides from the robot’s sight, making the ship look abandoned…",
        choices: {
            "[shaking in fear]": [12, { mercury: 1, neptune: 1, pluto: 1 }],
            "as long as we stay calm, we’ll be okay": [12, { jupiter: 1, venus: 1, saturn: 1 }],
            "shush!": [12, { sun: 1, mars: 1 }],
            "i’m chilling": [12, { uranus: 1 }]
        }
    },
    12: {
        text: "success! you fly through space unscathed.",
        choices: {
            "let's gooo": [16, {}]
        }
    },
    13: {
        text: "satisfied with your impending doom, the robot turns back. the ship is gonna go down!",
        choices: {
            "all hands on deck! you, over there…": [14, { venus: 1, jupiter: 1 }],
            "i got this! leave the patching up to me": [14, { sun: 1, mercury: 1, mars: 1 }],
            "are there any escape pods?!": [15, { uranus: 1, neptune: 1 }],
            "let’s find the ship’s manual and follow the instructions": [14, { saturn: 1, pluto: 1 }]
        }
    },
    14: {
        text: "with everyone working together (and some luck), you patch up the hole, and you’re flying through space again.",
        choices: {
            "whew, that was close": [16, {}]
        }
    },
    15: {
        text: "no, but luckily there’s a repair crew onboard! soon enough, you’re flying through space again.",
        choices: {
            "whew, that was close": [16, {}]
        }
    },
    16: {
        text: "the journey ahead is long… how are you spending your time?",
        choices: {
            "navigating the stars and keeping us on course!": [17, { jupiter: 1, saturn: 1 }],
            "let’s sing a song, everyone! one, two…": [18, { sun: 1, mercury: 1 }],
            "whipping out that board game and playing with my pals": [19, { jupiter: 1, pluto: 1 }, "requiresBoardGame"],
            "cooking up a meal with my freeze-dried astronaut food": [20, { mercury: 1, uranus: 1, saturn: 1 }, "requiresBag"],
            "watching the stars go by. it’s beautiful out here…": [21, { venus: 1, mars: 1, pluto: 1, neptune: 2 }],
            "taking a nap. i’m exhausted": [22, { uranus: 1 }]
        }
    },
    17: {
        text: "what’s your favorite thing on the navigation console?",
        choices: {
            "the big red button": [23, { sun: 1, venus: 1 }],
            "the lever that controls speed": [23, { mercury: 1, mars: 1 }],
            "the clicky switch that flips between screens on the dashboard": [23, { pluto: 1, uranus: 1 }],
            "the radio for incoming and outgoing transmissions": [23, { jupiter: 1, saturn: 1, neptune: 1 }]
        }
    },
    18: {
        text: "what kind of song do you get everyone to sing?",
        choices: {
            "a love song full of Yearning": [23, { uranus: 1, neptune: 1 }],
            "something easy that everyone can be involved in": [23, { sun: 1, venus: 1, saturn: 1 }],
            "a sea shanty cause we’re on an adventure": [23, { mars: 1, pluto: 1, jupiter: 1 }],
            "my favorite pop song as of today": [23, { mercury: 1 }]
        }
    },
    19: {
        text: "what kind of board game is this?",
        choices: {
            "a murder mystery whodunit. we each play a character, trust no one": [23, { mercury: 1, venus: 1, neptune: 1 }],
            "a co-op battle against a massive alien invasion. if we can’t save earth in real life… we’ll do it in this game": [23, { sun: 1, mars: 1 }],
            "it’s actually a trading card game. my collection is huge": [23, { pluto: 1, uranus: 1 }],
            "a strategy game where each player manages and trades resources to get the most points": [23, { jupiter: 1, saturn: 1 }]
        }
    },
    20: {
        text: "is the meal you made... good?",
        choices: {
            "obviously. i can cook with anything": [23, { pluto: 1, jupiter: 1}],
            "it's decent. we're in space, i'm not a wizard": [23, { venus: 1, neptune: 1}],
            "not really, but i tried my best and there's enough for everyone": [23, { sun: 1, uranus: 1 }],
            "it's terrible. but hey it's nutritious": [23, { mars: 1, saturn: 1, mercury: 1 }]
        }
    },
    21: {
        text: "what catches your eye out the window?",
        choices: {
            "a starburst galaxy. so sparkly!": [23, { sun: 1, mercury: 1, neptune: 1 }],
            "the milky way. iconic for a reason": [23, { venus: 1, jupiter: 1 }],
            "an asteroid flying a little too close. we should turn…": [23, { saturn: 1 }],
            "a distant star that’s a little blue. curious color": [23, { mars: 1, uranus: 1, pluto: 1 }]
        }
    },
    22: {
        text: "what are you dreaming about?",
        choices: {
            "showing up at school and there’s a surprise test (i’m not even a student)": [23, { saturn: 1, mercury: 1 }],
            "getting a pet robot and teaching it to love": [23, { neptune: 1, sun: 1, venus: 1 }],
            "building a socially perfect utopia in space": [23, { jupiter: 1, mars: 1 }],
            "someone i haven’t seen in a long time. wonder what they’re doing…": [23, { pluto: 1, uranus: 1 }]
        }
    },
    23: {
        text: "out the window, you see your new home planet. it’s…",
        choices: {
            "beautiful": [24, { venus: 1, pluto: 1 }],
            "bittersweet": [24, { uranus: 1, neptune: 1 }],
            "uncharted": [24, { saturn: 1, mars: 1 }],
            "full of possibility": [24, { sun: 1, mercury: 1, jupiter: 1 }]
        }
    },
    24: {
        text: "with futuristic technology, your new home planet is magically habitable! and it’s perfect for you…",
        choices: { "what's my planet?": [0, {}] }
    }
};

const personalities = {
    sun: 0, mercury: 0, venus: 0, mars: 0, jupiter: 0, saturn: 0,
    uranus: 0, neptune: 0, pluto: 0
};

let currentState = 1;
let hasGun = false;
let hasJournal = false;
let hasBoardGame = false;
let hasBag = false;
let escapeIntro = "you and your loved ones gotta escape. what are you bringing?";
let wonIntro = "success! you fly through space unscathed. the journey ahead is long… how are you spending your time?";

function applyScores(scores) {
    for (const [personality, points] of Object.entries(scores)) {
        personalities[personality] += points;
    }
}

function availableChoice(choice) {
    if (choice[2] === "requiresBoardGame") {
        return hasBoardGame;
    }
    if (choice[2] === "requiresBag") {
        return hasBag;
    }
    return true;
}

function renderState(state) {
    const storyText = document.getElementById("story-text");
    const storyImage = document.getElementById("story-image");
    const imageContainer = document.querySelector(".image-container");
    const choicesContainer = document.getElementById("choices");
    const stateData = gameData[state];

    if (state === 4) {
        storyText.textContent = escapeIntro;
    } else if (state === 12) {
        storyText.textContent = wonIntro;
    } else {
        storyText.textContent = stateData.text;
    }
            
    storyImage.src = stateData.image || image;
    imageContainer.style.display = "none";
    choicesContainer.innerHTML = "";

    for (const [choiceText, choice] of Object.entries(stateData.choices)) {
        if (!availableChoice(choice)) {
            continue;
        }
        const button = document.createElement("button");
        button.textContent = choiceText;
        button.className = "choice-button";
        button.onclick = () => changeState(choice[0], choice[1], choice[2]);
        choicesContainer.appendChild(button);
    }
}

function changeState(newState, scores, action) {
    applyScores(scores);

    if (action === "journal") {
        hasJournal = true;
    } else if (action === "gun") {
        hasGun = true;
    } else if (action === "boardGame") {
        hasBoardGame = true;
    } else if (action === "bag") {
        hasBag = true;
    } else if (action === "computer") {
        escapeIntro = "the robots don’t care about your computer. you and your loved ones gotta escape. what are you bringing?";
    } else if (action === "sharing") {
        escapeIntro = "the robots are not interested in sharing. you and your loved ones gotta escape. what are you bringing?";
    } else if (action === "hiding") {
        wonIntro = "the robot has been thoroughly outwitted, and you fly through space unscathed.";
    } else if (action === "fought") {
        wonIntro = "bam! robot down! you fly through space unscathed.";
    } else if (action === "speed") {
        wonIntro = "see ya later, slow-bot! you fly through space unscathed.";
    }
    

    if (newState === 6 && hasJournal) {
        newState = 7;
    } else if (newState === 8 && hasGun) {
        newState = 9;
    }

    currentState = newState;
    if (currentState === 0) {
        revealMostSelectedPlanet();
    } else {
        renderState(currentState);
    }
}

function revealMostSelectedPlanet() {
    let maxCount = -1;
    let maxPlanet = "";

    for (const [planet, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxPlanet = planet;
        }
    }

    const storyImage = document.getElementById("story-image");
    const text = document.getElementById("story-text");
    const imageContainer = document.querySelector(".image-container");
    const gameContainer = document.getElementById("game-container");
    const choicesContainer = document.getElementById("choices");
    const planetImage = new Image();
    planetImage.src = `smaller_images/id_cards/${maxPlanet}.png`;
    planetImage.className = "responsive-image";
    planetImage.id = "id-image";

    const shareButton = document.createElement("button");
    shareButton.textContent = "share with friends!";
    shareButton.className = "end-button";
    shareButton.onclick = () => {
        navigator.clipboard.writeText(`if i were a planet, i'd be ${maxPlanet}! find yours at real.juliwaves.com/quizgame`)
            .then(() => alert("planet type + quiz link copied to clipboard! (to share your image, save it to your device!)"))
            .catch(() => alert("failed to copy link. please try again."));
    };

    const startOverButton = document.createElement("button");
    startOverButton.textContent = "start over";
    startOverButton.className = "end-button";
    startOverButton.onclick = () => {
        if (window.confirm("start over? (your result will be erased.)")) {
            window.location.reload();
        }
    };

    const endButtons = document.createElement("div");
    endButtons.className = "end-buttons";
    endButtons.appendChild(shareButton);
    endButtons.appendChild(startOverButton);

    const description = document.createElement("p");
    description.className = "end-description";
    description.innerHTML = 'made for the 2026 <a href="https://magicalingaming.org" target="_blank">magical</a> medium zine, by juliwaves';

    storyImage.style.display = "none";
    choicesContainer.style.display = "none";
    text.textContent = `your planet is: ${maxPlanet}!`;
    planetImage.onerror = () => text.appendChild(document.createTextNode(`(${maxPlanet} image is lost in space. sorry!)`));
    planetImage.onload = () => {
        imageContainer.remove();
        gameContainer.appendChild(planetImage);
        gameContainer.appendChild(endButtons);
        gameContainer.appendChild(description);
    };
}

function startGame() {
    document.querySelector(".title").style.display = "none";
    document.getElementById("homescreen").style.display = "none";
    document.querySelector(".start-button").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    renderState(currentState);
}

window.onload = () => renderState(currentState);
