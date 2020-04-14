let harcer = [
    "a + 2",
    "c + 5",
    "r + 6",
    "d + 7",
    "k - 6",
    "p + 6",
    "t - 9",
    "s - 18",
    "q - 12",
    "f - 3"
];
let patasxanner = [
    ["c", "d", "e", "f"],
    ["h", "d", "e", "f"],
    ["x", "d", "e", "f"],
    ["k", "d", "e", "f"],
    ["e", "d", "a", "f"],
    ["v", "d", "a", "f"],
    ["k", "d", "a", "f"],
    ["a", "d", "c", "f"],
    ["e", "d", "a", "f"],
    ["c", "d", "a", "f"],
];

window.onload = function() {
    startGame(i = 0, harcer, patasxanner, n = 15);
};
function startGame(i, harcer, patasxanner, n) {
    let patasxn = document.querySelectorAll("#patasxn > button");
    harc.innerText = harcer[i];
    for (let j = 0; j < 4; j++){
        patasxn[j].innerText = patasxanner[i][j];
    }
    patasxn.forEach(x => x.onclick = function (event) {
        x.style.backgroundColor = "#F5F342";
        setTimeout(()=> cheackAnsver(event.target, i), 800);
    });
    //setInterval 15->1 count
    timeCount = setInterval(function(){
        if(n <= 0){
            time.style.backgroundColor ="red";
            document.getElementsByClassName("cantainerBlock")[0].style.backgroundColor = "#ffabb3";
            patasxn.forEach(x => x.style.backgroundColor = "red");
            setTimeout(function () {
                alert("End Game");
                location.reload()
            }, 400);
        } else {
            time.innerHTML = n;
        }
        n -= 1;
    }, 1000);
}

//check click button
function cheackAnsver(btn, i) {
    clearInterval(timeCount);
    let right =String.fromCharCode(eval((harcer[i][0]).charCodeAt() +""+ (harcer[i][2]) + (harcer[i][4])));
    if(btn.innerText === right){
        btn.style.backgroundColor = "#1aff0e";
        if (i < harcer.length - 1){
            setTimeout(function () {
                startGame(i + 1, harcer, patasxanner, n = 15);
                btn.style.backgroundColor = "";
            }, 800);

        } else {
            setTimeout(function() {
                alert("You WIN");
                location.reload()
            },800)
        }
    } else {
        btn.style.backgroundColor = "red";
        setTimeout(function () {
            alert("End Game");
            location.reload()
        }, 500);
    }
}
