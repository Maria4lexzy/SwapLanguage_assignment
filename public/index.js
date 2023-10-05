document.addEventListener('DOMContentLoaded', (e) => {
    intersectionObserverHandler();


});

const intersectionObserverHandler = () => {
    const textSlideUp1 = document.querySelectorAll('.text-slide-up');
    const textSlideUp = document.querySelector('.text-slide-up');
    const image1FadeIn = document.querySelector('.img-1');
    const vidImageTranslate = document.querySelector('.vid-img');
    const img2SlideIn = document.querySelector('.img-2');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    textSlideUp.classList.add('show');
                    image1FadeIn.classList.add('fade-in');

                    img2SlideIn.classList.add('slide-in');
                    vidImageTranslate.classList.add('translate');
                    // setTimeout(() => {

                    // }, 500); 
                }




                else {
                    textSlideUp.classList.remove('show');
                    image1FadeIn.classList.remove('fade-in');
                    vidImageTranslate.classList.remove('translate');
                    img2SlideIn.classList.remove('slide-in');



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
    observer.observe(image1FadeIn);
    observer.observe(vidImageTranslate);
    observer.observe(img2SlideIn);
}


