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


function setupIntersectionObserver(element,isLTR, speed){
    const intersectionCallback=(entries)=>{
        const isIntersecting=entries[0].isIntersecting
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler)
        }
        else{
            document.removeEventListener('scroll',scrollHandler)
        }
    }
    const intersectionobserver=new IntersectionObserver(intersectionCallback)
    intersectionobserver.observe(element)

    function scrollHandler(){
       const scrollX = window.scrollY * speed;
    const direction = isLTR ? 1 : -1;
    element.style.transform = `translateX(${direction * scrollX}px)`;
    }
}
const line1=document.getElementById('line1')
const line2=document.getElementById('line2')
const line3=document.getElementById('line3')
const line4=document.getElementById('line4')

setupIntersectionObserver(line1,true,0.25)
setupIntersectionObserver(line2,false,0.25)
setupIntersectionObserver(line3,true,0.25)
setupIntersectionObserver(line4,true,0.8)



 document.querySelectorAll(".faq-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector(".faq-icon");

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          icon.classList.remove("rotate-180");
        } else {
          document.querySelectorAll(".faq-content").forEach((c) => c.style.maxHeight = null);
          document.querySelectorAll(".faq-icon").forEach((i) => i.classList.remove("rotate-180"));

          content.style.maxHeight = content.scrollHeight + "px";
          icon.classList.add("rotate-180");
        }
      });
    });