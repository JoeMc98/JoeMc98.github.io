//IMAGE 1
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('image1');
var modalImg = document.getElementById("img01");
img.onclick = function ()
{
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function ()
{
    modal.style.display = "none";
}

//IMAGE 2
// Get the modal
var modal2 = document.getElementById('myModal02');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('image2');
var modalImg2 = document.getElementById("img02");
img2.onclick = function ()
{
    modal2.style.display = "block";
    modalImg2.src = this.src;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span2.onclick = function ()
{
    modal2.style.display = "none";
}

//IMAGE 3
// Get the modal
var modal3 = document.getElementById('myModal03');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('image3');
var modalImg3 = document.getElementById("img03");
img3.onclick = function ()
{
    modal3.style.display = "block";
    modalImg3.src = this.src;
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span3.onclick = function ()
{
    modal3.style.display = "none";
}