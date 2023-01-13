var my_score_display = document.getElementById("my_score_display")
var computer_score_display = document.getElementById("computer_score_display")
var me = document.getElementById("me")
var computer = document.getElementById("computer")
var start = document.getElementById("start")
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")

var interval = ""
var index = ""
var my_score = 0
var computer_score = 0



function hideBtns(){
    rock.style.display = "none"
    paper.style.display = "none"
    scissors.style.display = "none"
}

hideBtns()

function showBtns(){
    rock.style.display = "block"
    paper.style.display = "block"
    scissors.style.display = "block"
}

function youWin(){
    setTimeout(function(){
        alert("you win")
    })

    my_score++
    my_score_display.innerHTML = my_score
    
}
function computerWins(){
    setTimeout(function(){
        alert("computer wins")
    })

    computer_score++
    computer_score_display.innerHTML = computer_score
   
}

function draw(){
    setTimeout(function(){
        alert("it is a tie")
    })
    
}

var images = [
    "./rps/rock.png",
    "./rps/paper.png",
    "./rps/scissors.png",
]


start.addEventListener("click", function(){
    showBtns()
    start.style.display = "none"
    interval =  setInterval(function() {
        var random = Math.random() * 3;
        index = Math.floor(random);
        computer.setAttribute("src", images[index]);
        console.log("change")
    }, 100);
});

rock.addEventListener("click", function(){
    me.setAttribute("src", "./rps/rock.png")
    clearInterval()
    if(images[index] == "./rps/rock.png"){
        draw()
    }else if(images[index] == "./rps/paper.png"){
        computerWins()
    }else if(images[index] == "./rps/scissors.png"){
        youWin()
    }
})


paper.addEventListener("click", function(){
    me.setAttribute("src", "./rps/paper.png")
    clearInterval()
    if(images[index] == "./rps/rock.png"){
        youWin()
    }else if(images[index] == "./rps/paper.png"){
        draw()
    }else if(images[index] == "./rps/scissors.png"){
        computerWins()
    }
})

scissors.addEventListener("click", function(){
    me.setAttribute("src", "./rps/scissors.png")
    clearInterval()
    if(images[index] == "./rps/rock.png"){
        computerWins()
    }else if(images[index] == "./rps/paper.png"){
        youWin()
    }else if(images[index] == "./rps/scissors.png"){
        draw()
    }
})

