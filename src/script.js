const nav_dialog=document.getElementById("nav_dialog")
function handleMenu(){
    nav_dialog.classList.toggle("hidden")
}


document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileUrl = 'Assets/bird-download.jpg'; // file ka path
    const a = document.createElement('a'); // temporary <a> tag
    a.href = fileUrl;
    a.download = 'Assets/bird-download.jpg'; // download name
    document.body.appendChild(a);
    a.click(); // trigger click
    document.body.removeChild(a); // clean up
})

