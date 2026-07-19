const uploadBox = document.getElementById("uploadBox");
const imageInput = document.getElementById("imageInput");
const previewContainer = document.getElementById("previewContainer");

let selectedImages = [];

// فتح اختيار الصور
uploadBox.addEventListener("click", () => {
    imageInput.click();
});

// عند اختيار الصور
imageInput.addEventListener("change", (event) => {

    const files = Array.from(event.target.files);

    files.forEach(file => {

        selectedImages.push(file);

    });

    displayImages();

});

// عرض الصور
function displayImages(){

    previewContainer.innerHTML = "";

    selectedImages.forEach((file,index)=>{

        const reader = new FileReader();

        reader.onload = function(e){

            const card = document.createElement("div");

            card.className = "preview-card";

            card.innerHTML = `
                <img src="${e.target.result}">

                <button class="delete-btn" onclick="removeImage(${index})">
                    ✖
                </button>
            `;

            previewContainer.appendChild(card);

        };

        reader.readAsDataURL(file);

    });

}

// حذف صورة
function removeImage(index){

    selectedImages.splice(index,1);

    displayImages();

}