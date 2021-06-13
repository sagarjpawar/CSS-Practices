var backdrop = document.querySelector(".backdrop")
var modal = document.querySelector(".modal")
var buttons = document.querySelectorAll(".plan .button")
var cancelPlan = document.querySelector('.modal .modal__action.modal__action--negative')
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        backdrop.style.display = 'block'
        // modal.style.display = 'block'
        setTimeout(function () {
            backdrop.classList.add("open")
        }, 200)
        modal.classList.add('open')
    })
}

var closeModalBackdrop = function () {
    modal && modal.classList.remove('open')
    backdrop.classList.remove("open")
    setTimeout(function () {
        backdrop.style.display = 'none'
    }, 200)
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open')
    closeModalBackdrop()
})

cancelPlan && cancelPlan.addEventListener('click', closeModalBackdrop)

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block'
    mobileNav.classList.add('open')
    backdrop.style.display = 'block'
    setTimeout(function () {
        backdrop.classList.add("open")
    }, 200)
})