// Mobile menu 

const mobileButton = document.getElementById("mobile-button");
const mainNav = document.getElementById("main-nav");
const mobileIcon = document.getElementById("mobile-icon");

function toggleBurger() {
    if (mobileIcon.classList.contains("fa-bars")) {
        mobileIcon.classList.replace("fa-bars", "fa-chevron-up");
    } else {
        mobileIcon.classList.replace("fa-chevron-up", "fa-bars");
    }
}

function toggleNav(event) {
    if (window.innerWidth >= 768) return;
    mainNav.classList.toggle("display");
    document.body.classList.toggle("overflow");
    toggleBurger();
}

function resetNav() {
    mainNav.classList.remove("display");
    document.body.classList.remove("overflow");
    mobileIcon.classList.replace("fa-chevron-up", "fa-bars");
}

mobileButton.addEventListener("click", toggleNav);

mainNav.addEventListener("click", function(event) {
    if (event.target.hasAttribute("href")) toggleNav();
})

window.addEventListener("resize", function(event) {
    if (window.innerWidth >= 768) resetNav();
})

// Modal services
const cardsList = document.querySelectorAll("#cards-list a.card");
cardsList.forEach(function(card) {
    card.addEventListener("click", function(event) {
        event.preventDefault();
        const modal = createModal();
        const classList = {
            H3: "modal-ttl",
            P: "modal-txt",
            IMG: "modal-icon"
        };
        modal.firstElementChild.innerHTML = '<i class="fa fa-times modal-close" aria-hidden="true"></i>';
        Object.values(this.children).forEach(function(element) {
            const newElement = element.cloneNode(true);
            newElement.className = classList[element.tagName];
            modal.firstElementChild.appendChild(newElement);
        });
    })
})

function createModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "modal";
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modal.appendChild(modalContent);
    
    document.getElementById("services").insertBefore(modal, document.getElementById("cards-list"));
    modal.addEventListener("click", function() {
        this.remove();
    })
    return modal;
}