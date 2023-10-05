document.addEventListener('DOMContentLoaded', (e) => {
    intersectionObserverHandler();

});

const intersectionObserverHandler = () => {
    const container = document.querySelector('.custom-container');

    const elementsToAnimate = [
        {
            selector: '.text1',
            animationClass: 'slide-up',
        },
        {
            selector: '.img-1',
            animationClass: 'fade-in',
        },
        {
            selector: '.vid-img',
            animationClass: 'translate',
        },
        {
            selector: '.img-2',
            animationClass: 'slide-in',
        },
    ];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                elementsToAnimate.forEach((element) => {
                    const { selector, animationClass } = element;
                    const targetElement = document.querySelector(selector);

                    if (entry.isIntersecting) {
                        targetElement.classList.add(animationClass);
                    } else {
                        targetElement.classList.remove(animationClass);
                    }
                });
            });
        }, { threshold: [0] });

    elementsToAnimate.forEach((element) => {
        observer.observe(document.querySelector(element.selector));
    });
}



