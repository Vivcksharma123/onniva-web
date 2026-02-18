'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const initCarousels = () => {
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.owlCarousel) {
        const $ = (window as any).$;
        
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

        if ($('#highlightFeature').length && !$('#highlightFeature').hasClass('owl-loaded')) {
          $('#highlightFeature').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            items: 1
          });
        }

        if ($('#slide_screen').length && !$('#slide_screen').hasClass('owl-loaded')) {
          $('#slide_screen').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 3,
            center: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
              0: { items: 1, stagePadding: 60 },
              600: { items: 2, center: false },
              1000: { items: 3 },
              1200: { items: 3 }
            }
          });
        }
      }
    };

    const initMainMenu = () => {
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.stellarNav) {
        (window as any).$('.mainmenu').stellarNav({
          theme: 'light',
          breakpoint: 991,
          position: 'right'
        });
      }
    };

    const initFAQ = () => {
      document.querySelectorAll(".faq_question").forEach((question) => {
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
        (question as HTMLElement).onclick = handleClick;
      });
    };

    const initCanvas = () => {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const stars: any[] = [];
      const FPS = 100;
      const x = 100;
      const mouse = { x: 0, y: 0 };

      for (let i = 0; i < x; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1 + 1,
          vx: Math.floor(Math.random() * 50) - 50,
          vy: Math.floor(Math.random() * 50) - 50
        });
      }

      function draw() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "lighter";

        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = '#46eefa';
          ctx.stroke();
        }

        ctx.beginPath();
        for (let i = 0; i < stars.length; i++) {
          const starI = stars[i];
          ctx.moveTo(starI.x, starI.y);
          if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
          for (let j = 0; j < stars.length; j++) {
            const starII = stars[j];
            if (distance(starI, starII) < 150) {
              ctx.lineTo(starII.x, starII.y);
            }
          }
        }
        ctx.lineWidth = 0.3;
        ctx.strokeStyle = '#46eefa';
        ctx.stroke();
      }

      function distance(point1: any, point2: any) {
        const xs = (point2.x - point1.x) * (point2.x - point1.x);
        const ys = (point2.y - point1.y) * (point2.y - point1.y);
        return Math.sqrt(xs + ys);
      }

      function update() {
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          s.x += s.vx / FPS;
          s.y += s.vy / FPS;
          if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
          if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
      }

      const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };

      canvas.addEventListener('mousemove', handleMouseMove);

      function tick() {
        draw();
        update();
        requestAnimationFrame(tick);
      }

      tick();
    };

    const initGeometricShapes = () => {
      const background = document.getElementById('geometric-background');
      if (!background) return;

      const shapeTypes = ['square', 'circle', 'triangle', 'rectangle'];
      
      for (let i = 0; i < 40; i++) {
        const shape = document.createElement('div');
        const shapeClass = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        shape.className = `shape ${shapeClass}`;
        
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;
        
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        shape.style.animationDelay = `${delay}s`;
        shape.style.animationDuration = `${duration}s`;
        
        background.appendChild(shape);
      }
    };

    const initParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 4 + 4;
        
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
      }
    };

    const initMouseInteraction = () => {
      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach(shape => {
          const speed = 0.05;
          const htmlShape = shape as HTMLElement;
          const shapeX = parseFloat(htmlShape.style.left);
          const shapeY = parseFloat(htmlShape.style.top);
          
          htmlShape.style.left = `${shapeX + (x - 0.5) * speed}%`;
          htmlShape.style.top = `${shapeY + (y - 0.5) * speed}%`;
        });
      };
      
      document.addEventListener('mousemove', handleMouseMove);
    };

    const timer = setTimeout(() => {
      initMainMenu();
      initCarousels();
      initFAQ();
      initCanvas();
      initGeometricShapes();
      initParticles();
      initMouseInteraction();
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('BackToTop');
      if (btn) {
        if (window.scrollY > 700) {
          btn.classList.add('show');
        } else {
          btn.classList.remove('show');
        }
      }

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

    const btn = document.getElementById('BackToTop');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Script src="/js/jquery.js" strategy="beforeInteractive" />
      <Script src="/js/mainmenu.min.js" strategy="beforeInteractive" />
      <Script src="/js/owl.carousel.js" strategy="beforeInteractive" />
      <Script src="/js/d3.min.js" strategy="lazyOnload" />
      <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
      <Script src="/js/wow.js" strategy="lazyOnload" />
    </>
  );
}
