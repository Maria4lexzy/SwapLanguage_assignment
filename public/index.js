document.addEventListener('DOMContentLoaded', (e) => {
    intersectionObserverHandler();


});

const intersectionObserverHandler = () => {
    const textSlideUp1 = document.querySelectorAll('.text-slide-up');
    const textSlideUp = document.querySelector('.text-slide-up');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');

                }
                else {
                    entry.target.classList.remove('show');

                }
            });
        },
        {
            threshold: 0,

        }
    );

    // textSlideUp.forEach((card) => {
    //     observer.observe(card);
    // });

    observer.observe(textSlideUp);
}


