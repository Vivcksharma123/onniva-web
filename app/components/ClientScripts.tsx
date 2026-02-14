'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    if (!scriptsLoaded) return;

    // Back to top button
    const handleScroll = () => {
      const btn = document.getElementById('BackToTop');
      if (btn) {
        if (window.scrollY > 700) {
          btn.classList.add('show');
        } else {
          btn.classList.remove('show');
        }
      }

      // Header sticky
      const header = document.getElementById('myHeader');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Back to top click
    const btn = document.getElementById('BackToTop');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // FAQ Accordion - Re-initialize on route change
    const initFAQ = () => {
      const questions = document.querySelectorAll(".faq_question");
      questions.forEach((question) => {
        const icon = question.querySelector(".icon-shape");
        const handleClick = () => {
          const active = document.querySelector(".faq_question.active");
          const activeIcon = document.querySelector(".icon-shape.active");

          if (active && active !== question) {
            active.classList.remove("active");
            activeIcon?.classList.remove("active");
            const activeAnswer = active.nextElementSibling as HTMLElement;
            if (activeAnswer) activeAnswer.style.maxHeight = '0';
          }

          question.classList.toggle("active");
          icon?.classList.toggle("active");

          const answer = question.nextElementSibling as HTMLElement;
          if (answer) {
            if (question.classList.contains("active")) {
              answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
              answer.style.maxHeight = '0';
            }
          }
        };
        question.addEventListener("click", handleClick);
      });
    };

    // Initialize Owl Carousel
    const initCarousels = () => {
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.owlCarousel) {
        const $ = (window as any).$;
        
        // Feature Slider
        if ($('#FeatureSlider').length && !$('#FeatureSlider').hasClass('owl-loaded')) {
          $('#FeatureSlider').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            responsive: {
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 3 }
            }
          });
        }

        // Stories Slider
        if ($('#StoriesSlides').length && !$('#StoriesSlides').hasClass('owl-loaded')) {
          $('#StoriesSlides').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 3,
            dots: false,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsive: {
              0: { items: 1 },
              600: { items: 2 },
              800: { items: 2 },
              1000: { items: 3 }
            }
          });
        }

        // Highlight Feature Slider
        if ($('#highlightFeature').length && !$('#highlightFeature').hasClass('owl-loaded')) {
          $('#highlightFeature').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            items: 1
          });
        }
      }
    };

    // Initialize FAQ and Carousels after a delay
    const timer = setTimeout(() => {
      initFAQ();
      initCarousels();
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [pathname, scriptsLoaded]);

  return (
    <>
      <Script 
        src="/js/jquery.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="/js/owl.carousel.js" 
        strategy="afterInteractive"
        onLoad={() => setScriptsLoaded(true)}
      />
      <Script src="/js/d3.min.js" strategy="lazyOnload" />
      <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
      <Script src="/js/mainmenu.min.js" strategy="lazyOnload" />
      <Script src="/js/wow.js" strategy="lazyOnload" />
    </>
  );
}
