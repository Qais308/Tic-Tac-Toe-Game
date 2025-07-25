let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
];

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
}

boxes.forEach((box) => {
   box.addEventListener("click", () => {
     if(turnO) {
        box.innerText = "O"
        turnO = false;
    } else {
        box.innerText = "X"
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
   });
});

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
              showWinner(pos1Val);
              boxes.forEach(box => {
                box.disabled = true;
              })
            }
        }
    }
};

reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        turnO = true;
    })
});

newGame.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        turnO = true;
        msgContainer.classList.add("hide");
    })
});


