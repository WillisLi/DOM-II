const anchors = document.querySelector(".nav");
anchors.addEventListener("mouseover", (event) => {
    event.target.style.color = "green";
    event.preventDefault;
});

anchors.addEventListener("mouseout", (event) => {
    event.target.style.color = "black";
    event.preventDefault;
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
    button.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "silver";
    })
});

function top(event) {
    if (event.keyCode === 87)
        window.scrollTo(0,0);
}

function down(event) {
    if (event.keyCode === 83)
        window.scrollTo(0, document.body.scrollHeight);
}

document.addEventListener("keydown", top);
document.addEventListener("keyup", down);

const ps = document.querySelectorAll("p");
ps.forEach(function(p) {
    p.addEventListener("mouseup", (event) => {
        event.target.style.color = "pink";
    });
});

const bus = document.querySelectorAll("img");

bus[1].addEventListener("dblclick", (event) => {
    event.target.style.width = "20vw";
});

bus[2].addEventListener("dblclick", (event) => {
    event.target.style.width = "20vw";
});

const scroll = document.querySelector("body");
scroll.addEventListener("wheel", (event) => {
    event.target.style.backgroundColor = "gray";
})

const scrollHead = document.querySelector("header");
scrollHead.addEventListener("wheel", (event) => {
    event.target.style.backgroundColor = "lightgray";
    event.stopPropagation();
})

document.addEventListener("copy", (event) => {
    console.log("You copied something!")
});

document.addEventListener('fullscreenchange', (event) => {
    console.log("You just changed your screen size!");
});