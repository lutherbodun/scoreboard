export default class scoreboardView {
    constructor(root, teamOneName, teamTwoName, onControlButtonClick) {
        this.root = root;
        this.root.innerHTML = `
        <div class="scoreboard">
        <div class="scoreboard__name scoreboard__name--one">${teamOneName}</div>
        <div class="scoreboard__name scoreboard__name--two">${teamTwoName}</div>
        <div class="scoreboard__score" data-for-player="one">0</div>
        <div class="scoreboard__score" data-for-player="two">0</div>
        <div class="scoreboard__controls" data-for-player="one">
            <button class="scoreboard__control-button">-</button>
            <button class="scoreboard__control-button">+</button>
        </div>
        <div class="scoreboard__controls" data-for-player="two">
            <button class="scoreboard__control-button">-</button>
            <button class="scoreboard__control-button">+</button>
    
     </div>  

</div>
        `;

        this.root.querySelectorAll(".scoreboard__control-button").forEach(controlButton => {
           controlButton.addEventListener("click", () => {
            const direction = controlButton.textContent === "-" ? "minus" : "plus";
            const player = controlButton.closest(".scoreboard__controls").dataset.forPlayer;

            onControlButtonClick(player, direction);
           })    
        });
    }

    update(teamOneScore, teamTwoScore) {
        this.root.querySelector(".scoreboard__score[data-for-player='one']").textContent = teamOneScore;
        this.root.querySelector(".scoreboard__score[data-for-player='two']").textContent = teamTwoScore;
    }
}