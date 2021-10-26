
// img modal
const allGalleryItem = document.querySelectorAll(".gallery-item");
const imgModalDiv = document.getElementById("img-modal-box");
const modalCloseBtn = document.getElementById("modal-close-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let imgIndex = 0;

allGalleryItem.forEach((galleryItem) => {
    galleryItem.addEventListener("click", () => {
        imgModalDiv.style.display = "block";
        let imgSrc = galleryItem.querySelector("img").src;
        imgIndex = parseInt(imgSrc.split("-")[1].substring(0, 1));
        showImgContent(imgIndex);
    });
});

//   Next-btn
nextBtn.addEventListener("click", () => {
    imgIndex++;
    if (imgIndex > allGalleryItem.length) {
        imgIndex = 1;
    }
    showImgContent(imgIndex);
});

//   Prev-btn
prevBtn.addEventListener("click", () => {
    imgIndex--;
    if (imgIndex <= 0) {
        imgIndex = allGalleryItem.length;
    }

    showImgContent(imgIndex);
});

showImgContent = (index) => {
    imgModalDiv.querySelector(
        "#img-modal img"
    ).src = `./assets/images/gallery-${index}.jpg`;
};

modalCloseBtn.addEventListener("click", () => {
    imgModalDiv.style.display = "none";
});