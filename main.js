let email=document.getElementById("email")
let submit=document.getElementById("submit");
let correct=document.querySelector(".correct");
let false_item=document.querySelector(".false")


// email.classList.add()
// email.classList.replace()
email.addEventListener('focus',function(){
    correct.classList.replace('show','hidden')
    false_item.classList.replace('show','hidden')
    email.style.border='2px solid hsl(223, 100%, 88%)'
})
submit.addEventListener('click',function(){
    let em=/\w+@\w+\.com/ig;
    if(em.test(email.value)){
        correct.classList.replace('hidden','show')
        console.log("correct");
        email.style.border='2px solid rgb(14, 207, 14)'

        // correct.classList.add()
    }else{
        false_item.classList.replace('hidden','show')
        email.style.border='2px solid hsl(354, 100%, 66%)'
        console.log("not correct");

    }
});

