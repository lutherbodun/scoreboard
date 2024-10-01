import scoreboardView from "./sb/scoreboardView.js";

let teamOneScore = 0;
let teamTwoScore = 0;
const root = document.querySelector("#app");
const view = new scoreboardView(root, "Team one", "Team Two", (player, direction) => {
    const difference = direction === "minus" ? -1 : 1;

    if (player === "one") {
        teamOneScore = Math.max(teamOneScore + difference, 0);
    } else {
        teamTwoScore = Math.max(teamTwoScore + difference, 0);
    }
    
    
    view.update(teamOneScore, teamTwoScore);


});

