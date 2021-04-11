var backdrop = document.querySelector(".backdrop")
var modal = document.querySelector(".modal")
var buttons = document.querySelectorAll(".plan .plan__btn")
var cancelPlan = document.querySelector('.modal .modal__action.modal__action--negative')
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        // backdrop.style.display = 'block'
        // modal.style.display = 'block'
        backdrop.classList.add("open")
        modal.classList.add('open')
    })
}

var closeModalBackdrop = function () {
    backdrop.classList.remove("open")
    modal && modal.classList.remove('open')
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open')
    closeModalBackdrop()
})

cancelPlan && cancelPlan.addEventListener('click', closeModalBackdrop)

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block'
    mobileNav.classList.add('open')
    backdrop.classList.add("open")
})