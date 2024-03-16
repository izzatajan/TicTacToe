function breakTheGame() {
    window.document.getElementById("container").onclick = e => {
        console.log("you already won");
    }
}

function refreshApp() {
    document.getElementById("refreshBtn").style.visibility = "visible"
}

function refreshIt(){
    location.reload()
}

let firstPlayer;
let secondPlayer;
let userTurn = document.getElementById("userTurn");



//for disappering header input and button

function disappearPlayer(param1, param2) {
    if (param1.value !== "" && param2.value !== "") {
        param1.style.backgroundColor = "transparent";
        param2.style.backgroundColor = "transparent";
        param1.style.color = "#ff9900";
        param2.style.color = "#ff9900";

        document.getElementById("disBtn").style.display = "none";
        param1.setAttribute( "disabled", 1 );
        param2.setAttribute("disabled", 1)
    }else{
        return false;
    }
}
//for disappering header input and button

const button1 = document.getElementById('disBtn1');
const button2 = document.getElementById("disBtn2");


    

    let turnCounter = [];
    let clicked = [];

    window.document.getElementById("container").onclick = e => {

        let firstP = document.getElementById("player1");
        let secP = document.getElementById("player2");

    let written  = e.target.id;

    if (clicked.includes(written)) {
        return false;
    }

        if (turnCounter[turnCounter.length - 1] == "X") {
            turnCounter.push("0");
            document.getElementById(`${written}`).innerHTML = "0";
            
        } else{
            turnCounter.push("X");
            document.getElementById(`${written}`).innerHTML = "X";
        }

        let s1 = document.getElementById("square1").innerHTML;
        let s2 = document.getElementById("square2").innerHTML;
        let s3 = document.getElementById("square3").innerHTML;
        let s4 = document.getElementById("square4").innerHTML;
        let s5 = document.getElementById("square5").innerHTML;
        let s6 = document.getElementById("square6").innerHTML;
        let s7 = document.getElementById("square7").innerHTML;
        let s8 = document.getElementById("square8").innerHTML;
        let s9 = document.getElementById("square9").innerHTML;

        let st1 = document.getElementById("square1");
        let st2 = document.getElementById("square2");
        let st3 = document.getElementById("square3");
        let st4 = document.getElementById("square4");
        let st5 = document.getElementById("square5");
        let st6 = document.getElementById("square6");
        let st7 = document.getElementById("square7");
        let st8 = document.getElementById("square8");
        let st9 = document.getElementById("square9"); 
        
        if (s1 !== "" && s1 === s2 && s2 === s3) {
            st1.classList.add("x0animation1");
            st2.classList.add("x0animation1");
            st3.classList.add("x0animation1");
            setTimeout(() => {
                st1.classList.add("x0animation2");
                st2.classList.add("x0animation2");
                st3.classList.add("x0animation2");
            }, 200);
            refreshApp()
            breakTheGame()
        } else if(s4!= "" && s4 === s5 && s5 === s6) {
            st4.classList.add("x0animation1");
            st5.classList.add("x0animation1");
            st6.classList.add("x0animation1");
            setTimeout(() => {
                st4.classList.add("x0animation2");
                st5.classList.add("x0animation2");
                st6.classList.add("x0animation2");
            }, 200);
            refreshApp()
            breakTheGame()
        } else if(s7!= "" && s7 === s8 && s8 === s9) {
            st7.classList.add("x0animation1");
            st8.classList.add("x0animation1");
            st9.classList.add("x0animation1");
            setTimeout(() => {
                st7.classList.add("x0animation2");
                st8.classList.add("x0animation2");
                st9.classList.add("x0animation2");
            }, 200);
            refreshApp()
            breakTheGame()
        } else if(s1!= "" && s1 === s4 && s4 === s7) {
            st1.classList.add("x0animation1");
            st4.classList.add("x0animation1");
            st7.classList.add("x0animation1");
            setTimeout(() => {
                st1.classList.add("x0animation2");
                st4.classList.add("x0animation2");
                st7.classList.add("x0animation2");
            }, 200);
            refreshApp()
            breakTheGame()
        } else if(s2!= "" && s2 === s5 && s5 === s8) {
            st2.classList.add("x0animation1");
            st5.classList.add("x0animation1");
            st8.classList.add("x0animation1");
            setTimeout(() => {
                st2.classList.add("x0animation2");
                st5.classList.add("x0animation2");
                st8.classList.add("x0animation2");
            }, 200);
            refreshApp()
            breakTheGame()
        }  else if(s3!= "" && s3 === s6 && s6 === s9) {
            st3.classList.add("x0animation1");
            st6.classList.add("x0animation1");
            st9.classList.add("x0animation1");
            setTimeout(() => {
                st3.classList.add("x0animation2");
                st6.classList.add("x0animation2");
                st9.classList.add("x0animation2");
            }, 200);
            refreshApp()
            breakTheGame()
        }
        
        else if(s1!= "" && s1 === s5 && s5 === s9) {
            st1.classList.add("x0animation1");
            st5.classList.add("x0animation1");
            st9.classList.add("x0animation1");
            setTimeout(() => {
                st1.classList.add("x0animation2");
                st5.classList.add("x0animation2");
                st9.classList.add("x0animation2");
            }, 200);
            refreshApp()
            breakTheGame()
        } else if(s3!= "" && s3 === s5 && s5 === s7) {
            st3.classList.add("x0animation1");
            st5.classList.add("x0animation1");
            st7.classList.add("x0animation1");
            setTimeout(() => {
                st3.classList.add("x0animation2");
                st5.classList.add("x0animation2");
                st7.classList.add("x0animation2");
            }, 200);
            refreshApp()
            breakTheGame()
        }

        clicked.push(written);
        console.log(clicked);

        

        if (turnCounter[turnCounter.length - 1] === "0") {
            userTurn.innerText = `${document.getElementById("player1").value}'s turn`;
        } else if(turnCounter[turnCounter.length - 1] === "X"){
            userTurn.innerText = `${document.getElementById("player2").value}'s turn`;
        }

        if(s1 == "X" && s2 =="X" && s3 == "X"){
            document.getElementById("userTurn").innerText = `${firstP.value} won`;
        } else if (s1 == "0" && s2 =="0" && s3 == "0") {
            document.getElementById("userTurn").innerText = `${secP.value} won`;
        }

        if(s4 == "X" && s5 =="X" && s6 == "X"){
            document.getElementById("userTurn").innerText = `${firstP.value} won`;
        } else if (s4 == "0" && s5 =="0" && s6 == "0") {
            document.getElementById("userTurn").innerText = `${secP.value} won`;
        }

        if(s7 == "X" && s8 =="X" && s9 == "X"){
            document.getElementById("userTurn").innerText = `${firstP.value} won`;
        } else if (s7 == "0" && s8 =="0" && s9 == "0") {
            document.getElementById("userTurn").innerText = `${secP.value} won`;
        }

        if(s1 == "X" && s4 =="X" && s7 == "X"){
            document.getElementById("userTurn").innerText = `${firstP.value} won`;
        } else if (s1 == "0" && s4 =="0" && s7 == "0") {
            document.getElementById("userTurn").innerText = `${secP.value} won`;
        }

        if(s2 == "X" && s5 =="X" && s8 == "X"){
            document.getElementById("userTurn").innerText = `${firstP.value} won`;
        } else if (s2 == "0" && s5 =="0" && s8 == "0") {
            document.getElementById("userTurn").innerText = `${secP.value} won`;
        }

        if(s3 == "X" && s6 =="X" && s9 == "X"){
            document.getElementById("userTurn").innerText = `${firstP.value} won`;
        } else if (s3 == "0" && s6 =="0" && s9 == "0") {
            document.getElementById("userTurn").innerText = `${secP.value} won`;
        }

        if(s1 == "X" && s5 =="X" && s9 == "X"){
            document.getElementById("userTurn").innerText = `${firstP.value} won`;
        } else if (s1 == "0" && s5 =="0" && s9 == "0") {
            document.getElementById("userTurn").innerText = `${secP.value} won`;
        }

        if(s3 == "X" && s5 =="X" && s7 == "X"){
            document.getElementById("userTurn").innerText = `${firstP.value} won`;
        } else if (s3 == "0" && s5 =="0" && s7 == "0") {
            document.getElementById("userTurn").innerText = `${secP.value} won`;
        }

}