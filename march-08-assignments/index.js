// alert("hi")



function popup(n) {
    let a = document.getElementById(2*n);
    console.log(a.classList);
    let b = document.getElementById(2*n+1);
    console.log(b);
    let sai = document.getElementsByClassName("container1")[0];
    // console.log(k.classList);
    // console.log(a);
    sai.style.display = "none";
    
    // console.log(body.classList);
    a.classList.remove("d-none");
    a.classList.add("initial");
       
}
