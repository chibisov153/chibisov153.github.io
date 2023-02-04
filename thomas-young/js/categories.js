document.addEventListener("DOMContentLoaded", function() {

  gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

  const headerBlog = document.querySelector('.header-blog');
  const headerBlogImg = document.querySelector('.header-blog_img');
  const blogHh1 = document.querySelector('.header-blog-h1');
  const root = document.documentElement;
  const body = document.querySelector('.body');
  const categoryWrap = document.querySelector('.category-wrap');
  const categoryItem = [...document.querySelectorAll('.category-item')];
  const catalog = document.querySelector('.category-wrap');
  let lazyImages = [...document.querySelectorAll('.category-item')];

  let windowWidth = document.documentElement.clientWidth;
  let scaleH1 = 0.3;
  let normScroll = false;

  for (let value of categoryItem) {
    let item = value.getBoundingClientRect();
    if(item.height > item.width){
      value.classList.add('small');
    } else {
      value.classList.add('big');
    }
  }

  function resizeH1() {
    const a = 151;
    let b = blogHh1.getBoundingClientRect();
    scaleH1 = Math.round(a / (b.width / 100)) / 100
  }
  resizeH1();

  window.addEventListener('resize',()=> {
    windowWidth = document.documentElement.clientWidth;
    if (windowWidth <= 700) {
      //window.location.reload();
      resizeH1();
    }
    window.location.reload();
  });

  windowWidth <= 992 ? normScroll = true : '';

  ScrollSmoother.create({
    wrapper: ".smooth-wrapper_blog",
    content: ".smooth-content_blog",
    smooth: 4,
    normalizeScroll: normScroll,
    smoothTouch: 4,
  });

  function scrollMove(a) {
    return gsap.timeline({
      smoothChildTiming: true,
      scrollTrigger: {
        trigger: headerBlog,
        start: `${a} top`,
        end: "bottom top",
        scrub: true
      }
    })
  }

  scrollMove('top').to(headerBlogImg, {y: '50%', ease: "none"}, 'start')
    .to(blogHh1, {top: '4%', ease: "none"}, 'start');

  let tl = scrollMove('50%').to(blogHh1, {id: "myTween", x: '50%', scale: scaleH1, ease: "none"}, 'start')
    .to(headerBlogImg, {opacity: 0, ease: "none"}, 'start')

  if (windowWidth >= 992) {
    tl.to(root, {'--page-blog-blur': '12px', ease: "none"}, 'start');
  }

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === catalog && !entry.isIntersecting) {
        gsap.to(lazyImages,{duration: 0, y: 150})
      }
      else if (entry.isIntersecting){
        gsap.to(entry.target, {duration: 1, y: 0})
      }
    })
  }

  const options = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
  }

  const observer = new IntersectionObserver(callback, options)
  lazyImages.forEach((image) => observer.observe(image));
  observer.observe(catalog);

  let categoryLink = [...document.querySelectorAll('.category-link')];

  categoryLink.forEach((item)=>{
    item.addEventListener('click', (e) => {
      e.preventDefault();
      let el = e.target;
      body.classList.remove('body-active');
      setTimeout(function () {
        window.location.replace(el.parentNode.href)
      }, 400);
    })
  })
  window.addEventListener("load", function() {
    let msnry = new Masonry(categoryWrap, {
      itemSelector: '.category-item',
      columnWidth: '.small',
    });
  });

});
