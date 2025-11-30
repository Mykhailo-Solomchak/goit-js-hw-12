import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions"
const form = document.querySelector(".form");

form.addEventListener("submit", searchImages);

function searchImages(event) {
    event.preventDefault();
    const { searchText } = event.target.elements;
    const userQuery = searchText.value.trim();
    if (userQuery === "") {
        return iziToast.error({
            position: "topRight",
            message: "Please fill in the search field."
        })
    }
    showLoader();
    clearGallery();

    getImagesByQuery(userQuery).then(data => {
        if (data.hits.length === 0) {
            return iziToast.error({
                position: "topRight",
                message: "Sorry, there are no images matching your search query. Please try again!"
            })
        }
        createGallery(data.hits);
        form.reset();
    }).catch(error => iziToast.error({
        position: "topRight",
        message: error.message
    })).finally(() => hideLoader());
}




