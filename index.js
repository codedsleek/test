const info = [
    {
        id: 1,
        name: "Ola Smith",
        img: "./img/image-tanya.jpg",
        quote: `"I've been interested in coding for a while but never taken the jump until now. I couldn't recommend this course enough. I"m now in the job of my dream and so excited about the future."`,
        work: "UI Designer",

    },

    {
        id: 2,
        name: "Ade Toun",
        img: "./img/image-john.jpg",
        quote: `"I'd recommend taking this course, anyday, anytime. The depth the instructor go into is incredible. I now feel so confident about starting up as a professional developer."`,
        work: "Junior Front-end Developer",
    }
]

const feedback = document.querySelector(".details");
const username = document.querySelector(".name");
const image = document.querySelector(".person-img");
const workName = document.querySelector("#job");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");


let current = 0;

window.addEventListener("DOMContentLoaded", () => {
    showDetails()
})

function showDetails(){
    const currentItem = info[current];
    feedback.textContent = currentItem.quote;
    username.textContent = currentItem.name;
    image.src = currentItem.img;
    workName.textContent = currentItem.work;
}

nextBtn.addEventListener("click", () => {
    current++;
    if (current > info.length - 1) {
        current = 0;
    }
    showDetails();
})

prevBtn.addEventListener("click", () => {
    current--;
    if (current < 0) {
        current = info.length - 1;
    }
    showDetails();
})
