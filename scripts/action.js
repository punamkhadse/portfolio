document.querySelector("#hero-video").setAttribute("autoplay", "true")

let heroCTABtn = document.querySelector("#heroCTABtn");

heroCTABtn.addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});

let indexes = [1, 2, 3, 4]
pointer = 0

let aboutCorouselImage = document.querySelector("#about-corousel")

let prevBtn = document.querySelector("#about-corousel-prev-btn")
let nextBtn = document.querySelector("#about-corousel-next-btn")

prevBtn.addEventListener("click", prevBtnFuction)
nextBtn.addEventListener("click", nextBtnFuction)

function prevBtnFuction() {
    if (pointer != 1) {
        pointer--
    }
    changeImageForCorousel(pointer)
}

function nextBtnFuction() {
    if (pointer != indexes.length) {
        pointer++
    }
    changeImageForCorousel(pointer)
}

function changeImageForCorousel(index) {
    aboutCorouselImage.setAttribute("src", `./media/about-${index}-img.jpg`)
}
let images = document.querySelectorAll(".portfolio-img")

let target = document.querySelector("#pop-over-image")

let changeImage = document.querySelector("#pop-over-image-data")

let closeBtn = document.querySelector("#close-pop-over-btn")

images.forEach((image) => {

    image.addEventListener("click", () => {
        showPopOverImage(image.getAttribute("src"), image.dataset.discription , image.dataset.title)
    })
})

closeBtn.addEventListener("click", hidePopOverImage)

function showPopOverImage(address, discription, title) {
    target.style.display = "initial" 
    document.querySelector("#pop-over-title").innerText = title
    document.querySelector("#pop-over-discription").innerText = discription
    changeImage.setAttribute("src", address)
}
function hidePopOverImage() {
    target.style.display = "none"
}