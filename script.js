let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelectorAll("#resetBtn");
let turnO=true;
let turnX;
let newGame= document.querySelectorAll(".btn");
let msgContainer= document.querySelectorAll(".msg-container")
let message=document.querySelectorAll("#win");
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("BOX was clicked");
    if(turnO){
        box.innerText="O"
        turnO=false;
        }
    else{

    box.innerText="X"
turnO="True";
}
box.disabled=true;
checkWinner();
    }
    );
    
});
const showWinnner=(winner) => {
    msgContainer.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("win");
    console.log(winner); 
};

const checkWinner = () => {
         for (pattern of winPattern){
         let pos1val=  boxes[pattern[0]].innerText;
          let pos2val = boxes[pattern[1]].innerText;
          let pos3val=  boxes[pattern[2]].innerText;
       if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val&& pos2val===pos3val){
        console.log("Winner", pos1val);
        showWinnner(pos1val);
        }
       }

        }
};
