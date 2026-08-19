/* =========================================================
   VOLTIZE
   JavaScript principal
========================================================= */


/* =========================================================
   ELEMENTOS DO DOM
========================================================= */

const header = document.querySelector(".header");

const navLinks = document.querySelectorAll(".nav a");

const sections = document.querySelectorAll(
    "main section[id]"
);

const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
);


/* =========================================================
   HEADER DINÂMICO
========================================================= */

function updateHeader() {

    if (window.scrollY > 50) {

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");

    }
}

window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =========================================================
   SCROLL SUAVE
========================================================= */

internalLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        /*
         * Ignora links vazios.
         */

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        /*
         * Se o elemento não existir,
         * não executa nada.
         */

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   NAVEGAÇÃO ATIVA
========================================================= */

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   ANIMAÇÕES AO ROLAR
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .benefit, .process-item, .about-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "js-show"
                    );

                    entry.target.classList.remove(
                        "js-hidden"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(element => {

    element.classList.add(
        "js-hidden"
    );

    observer.observe(
        element
    );

});


/* =========================================================
   WHATSAPP
========================================================= */

/*
 * COLOQUE AQUI O NÚMERO DA VOLTIZE.
 *
 * Exemplo:
 *
 * const whatsappNumber = "5537999999999";
 *
 * Não coloque:
 * +55
 * espaços
 * parênteses
 * hífen
 */

const whatsappNumber =
    "553791986675";


const whatsappMessage =
    "Olá! Gostaria de solicitar um orçamento para contratar o serviço. ";


const whatsappButtons =
    document.querySelectorAll(
        ".whatsapp-button"
    );


whatsappButtons.forEach(button => {

    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            if (
                whatsappNumber ===
                "SEU_NUMERO_AQUI"
            ) {

                alert(
                    "Configure o número do WhatsApp no arquivo script.js."
                );

                return;
            }


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

});


/* =========================================================
   BOTÕES DE ORÇAMENTO
========================================================= */

const budgetButtons =
    document.querySelectorAll(
        ".header-button, .primary-button, .service-link"
    );


budgetButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            /*
             * Os botões continuam usando
             * o sistema de navegação por âncora
             * do HTML.
             */

        }
    );

});


/* =========================================================
   LOG NO CONSOLE
========================================================= */

console.log(
    "Voltize carregada com sucesso."
);