const d = document,
    $iconShare = d.querySelector(".avatar__icon__share"),
    $avatarSocial = d.querySelector(".avatar__social")


d.addEventListener("click", (e) => {
    
    if(e.target.matches(".avatar__icon__share") || e.target.matches(".avatar__icon__share svg") || e.target.matches(".avatar__icon__share svg path")) {
       $iconShare.classList.toggle("avatar__social__share--active") 
       $avatarSocial.classList.toggle("avatar__social--disabled")
    }
})
