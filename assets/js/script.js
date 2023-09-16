const imagePreview = document.getElementById("ImagePreview");
const imagePreviewInput = document.getElementById("ImageInput");
const imagePreviewText = imagePreview.nextElementSibling;

imagePreviewInput.addEventListener("change",function(){
    const file = this.files[0];
    if(file)
    {
        const reader = new FileReader();
        imagePreviewText.classList.add("hidden");
        imagePreview.classList.remove("hidden");
        imagePreview.classList.add("flex");        
        reader.readAsDataURL(file);
        reader.addEventListener("load",function(){
            console.log("reader : "+this.result)
            imagePreview.setAttribute('src',this.result);
        });
    }
    else{
        imagePreviewText.classList.remove("hidden");
        imagePreview.classList.add("hidden");
        imagePreview.classList.remove("flex");
    }
});