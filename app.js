    const playerArray = [];

    function buttonSelector(buttons) {
    const playerName = buttons.parentNode.children[0].innerText;
    const playerObj = {playerName: playerName,};
    playerArray.push(playerObj);

    if (playerArray.length <= 5) {
        buttons.style.background = "lightgray";
        buttons.style.color = "black";
        buttons.disabled = true;
        const plyerList = document.getElementById("player-list");
        const createList = document.createElement("li");
        createList.innerText = playerName;

        plyerList.appendChild(createList);
        buttons.setA;
    } else {
        alert("Select your best five player");
        playerArray.pop();
    }
    console.log(playerArray);
    }
    document.getElementById("calculate").addEventListener("click", function () {
    const perPlayersElement = document.getElementById("per-player");
    const perPlayerString = perPlayersElement.value;
    const parPlayer = parseFloat(perPlayerString);

    if (parPlayer >= 0) {
        const firstCalculate = playerArray.length * parPlayer;
        document.getElementById("per-player-display").innerText = firstCalculate;
    } else {
        alert("Please Enter a valid number!");
    }
    perPlayersElement.value = "";
    });

    document.getElementById("calculate-total").addEventListener("click", function () {
        const perPlayerOldTotal = document.getElementById("per-player-display");
        const perPlayerOldTotalString = perPlayerOldTotal.innerText;
        const perPlayerOld = parseFloat(perPlayerOldTotalString);
        const managerElement = document.getElementById("manager-field").value;
        const manager = parseFloat(managerElement);
        const coachElement = document.getElementById("coach-field").value;
        const coach = parseFloat(coachElement);
        if (perPlayerOld >= 0 && manager >= 0 && coach >= 0) {
        const calculateTotal = perPlayerOld + manager + coach;
        document.getElementById("total-price").innerText = calculateTotal;
        } 
        else {
        alert("Please Enter a valid number!");
        }
    });
