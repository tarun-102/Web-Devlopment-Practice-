const box = document.querySelectorAll(".box")
const form = document.querySelector(`form`);
let count = 10;
let  effectId;

let intervalId;

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = document.querySelector(`#number`).value;
    const color = document.querySelector(`#color`).value;

    const box = document.getElementById(number);

    if (box) {
        box.style.backgroundColor = color;
    }
    if (showbox.checked) {
        box.style.display = "flex";
        console.log("showbox");

    } if (hidebox.checked) {
        box.style.display = "none";
        hidebox.checked = false;
    } else {
        box.style.display = "flex";

    }


})

function addboxf() {
    const boxcontainer = document.getElementsByClassName("box-container")[0];
    for (let i = 1; i <= 10; i++) {
        count++
        const newdiv = document.createElement('div');
        newdiv.id = count
        newdiv.className = "box"
        newdiv.textContent = `box${count}`
        boxcontainer.appendChild(newdiv);

    }
}


function removeBox() {
    for (let i = 0; i < 10; i++) {
        if (count <= 10) break;

        const box = document.getElementById(count);

        if (box) {
            box.remove();
            count--;
        }
    }
}



function removeallboxs() {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach(box1 => {
        if (box1.id > 10)
            box1.remove()
    })

    count = 10;
}



function circleBox() {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach((box) => {
        box.style.borderRadius = "50%"
    })
}

function squreBox() {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach((box) => {
        box.style.borderRadius = "0"
    })
}
0
function colorgenerator() {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach((box) => {
        const randomecolor = "#" + Math.floor(Math.random() * 12345678).toString(16);

        box.style.backgroundColor = randomecolor
    })
}

function removecolobox() {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach((box) => {
        const randomecolor = "#" + Math.floor(Math.random() * 12345678).toString(16);

        box.style.backgroundColor = ""
    })
}


function startColor() {
    intervalId = setInterval(colorgenerator, 200);
}

function stopColor() {
    clearInterval(intervalId);
}


function startEffect() {
    effectId = setInterval(() => {
        const boxes = document.querySelectorAll(".box")

        boxes.forEach((box) => {
            box.style.borderRadius = isCircle ? "50%" : "0";
        })
        isCircle = !isCircle;
        colorgenerator()
    }, 200)
}

let effectInterval;
let isCircle = false;

function stopEffect() {
    clearInterval(effectId)
}


addbox.addEventListener("click", () => {

    addboxf();
});

removebox.addEventListener("click", () => {
    removeBox()
});

remallbox.addEventListener("click", () => {
    removeallboxs()
})

circlebox.addEventListener("click", () => {
    circleBox()
})

squarebox.addEventListener("click", () => {
    squreBox()
})

randomebox.addEventListener("click",  colorgenerator)

remcolbox.addEventListener("click", () => {
    removecolobox()
})

startfun.addEventListener("click", startColor);

stopfun.addEventListener("click", stopColor);

starteffect.addEventListener("click", startEffect)

stopeffect.addEventListener("click", stopEffect)