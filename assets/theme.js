/* Header Js for Toggle and Back to top btn */
document.addEventListener('DOMContentLoaded', () => {
  // Toggle code
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleDarkIcon.classList.remove('hidden');
  }

  const themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  });

  // Header scroll effect

  const header = document.querySelector('#header');
  let previousScrollY = 0; // Store previous scroll position
  console.log(header);
  window.addEventListener('scroll', function () {
    let currentScrollY = window.scrollY;
    const scrollDirection = currentScrollY > previousScrollY ? 'down' : 'up';
    // const scrollNegativeDirection = currentScrollY < previousScrollY
    if (scrollDirection === 'down') {
      header.style.transform = "translate(0px,-100%)"
    } else{
      header.style.transform = "translate(0px,0px)"
    }
    // if(scrollNegativeDirection) {
    //   header.style.transform = "translate(0px,0px)"
    // }

    previousScrollY = currentScrollY;
  });

  //JS for Back to top btn

  const backToTop = document.querySelector('#go-back-top');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 200) {
      backToTop.classList.remove('hidden');
    } else {
      backToTop.classList.add('hidden');
    }
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

// Scroll Reveal Animation

// Card animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: '1000',
  delay: '300',
  easing: 'ease-in-out',
});
sr.reveal('.headline');
sr.reveal('.cardAnimation', { interval: 200 });
