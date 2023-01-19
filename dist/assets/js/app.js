document.addEventListener("DOMContentLoaded", () => {

  SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях 
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение 
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
  })


  let scrollWidth = (window.innerWidth - document.body.clientWidth + 'px')
  let desctopHelper = document.querySelector('.main-services__desctopHelper')
  let acc = document.querySelectorAll(".main-services__btn");


  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      acc.forEach(e => {
        e.classList.remove("activeTab")

        e.nextElementSibling.style.maxHeight = null;
      })
      this.classList.add("activeTab");
      const tl16 = gsap.timeline();

      tl16.from('.main-services__desctopHelper', { opacity: 0, duration: 1.5 })

      acc.forEach(element => {
        element.classList.remove('deleteHover')
        if (element.classList.contains('activeTab')) {
          element.classList.add('deleteHover')
        }
      })

      let panel = this.nextElementSibling;
      desctopHelper.innerHTML = panel.innerHTML
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }





  // if (acc.length > 0) {
  //   acc[0].click()
  // }



  let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiperButtonNext',
      prevEl: '.swiperButtonPrev',
    },
    loop: true,
    loopedSlides: 4,
    watchOverflow: true,
  });
  let galleryThumbs = new Swiper('.gallery-thumbs', {
    // spaceBetween: 60,
    // centeredSlides: true,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;




  let accrordeonBtn = document.querySelectorAll(".main-firstStep__accrordeonBtn");

  for (let i = 0; i < accrordeonBtn.length; i++) {
    accrordeonBtn[i].addEventListener("click", function () {
      this.classList.toggle("paddingActiveTab");
      let panel2 = this.nextElementSibling;
      if (panel2.style.maxHeight) {
        panel2.style.maxHeight = null;
      } else {
        panel2.style.maxHeight = panel2.scrollHeight + "px";
      }
    });
  }



  const swiperFunction = function () {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 80,
      loop: true,
      navigation: {
        nextEl: '.main-gallery__buttonPrev',
        prevEl: '.main-gallery__buttonNext',
      },
      breakpoints: {
        850: {
          slidesPerView: 1.45,
          spaceBetween: -25,
        },
      }
    });
  }


  let tabHeader = document.querySelectorAll('.main-gallery__tabHeader')
  let galleryHelper = document.querySelector('.main-gallery__helper')

  tabHeader.forEach(e => {
    e.addEventListener('click', el => {
      galleryHelper.innerHTML = e.nextElementSibling.innerHTML
      swiperFunction()
      tabHeader.forEach(elem => {
        elem.classList.remove('activeTab')
      })
      e.classList.add('activeTab')

    })
  })

  if (tabHeader.length != 0) {
    tabHeader[0].click()
  }


  let headerPadding = document.querySelector('.header-content')
  let burger = document.querySelectorAll('.header-content__burger')
  let burgerHelper = document.querySelector('.header-menu__helpCrossContainer')
  let burgerTransition = document.querySelector('.header-content__burgerTransition')
  let menuContent = document.querySelector('.header-menu__content')
  let page = document.getElementsByTagName('body')

  if (window.matchMedia("(min-width: 850px)").matches) {
    document.body.style.setProperty("--scrollWidth", scrollWidth)
  }


  burger.forEach(e => {
    e.addEventListener('click', () => {
      menuContent.classList.add('showMenu')
      page[0].classList.add('blockScroll')

      if (window.matchMedia("(min-width: 850px)").matches) {
        headerPadding.style.marginRight = scrollWidth
      }
    })
  })


  burgerHelper.addEventListener('click', () => {
    menuContent.classList.remove('showMenu')
    page[0].classList.remove('blockScroll')
    headerPadding.style.marginRight = "0"
  })



  let menuTabsHelper = document.querySelector('.header-menu__tabsHelper')
  let tabsFirstLvlTitle = document.querySelectorAll('.header-menu__tabsFirstLvlTitle')



  if (window.matchMedia("(min-width: 850px)").matches) {

    tabsFirstLvlTitle.forEach(e => {
      e.addEventListener('click', el => {
        menuTabsHelper.innerHTML = e.nextElementSibling.innerHTML
        tabsFirstLvlTitle.forEach(elem => {
          elem.classList.remove('header-menu__tabsFirstLvlTitle_hover')
        })

        e.classList.add('header-menu__tabsFirstLvlTitle_hover')

        let headerAccBtn = document.querySelectorAll(".header-menu__accordionBtn");

        for (let i = 0; i < headerAccBtn.length; i++) {
          headerAccBtn[i].addEventListener("click", function () {

            headerAccBtn.forEach(element => {
              element.classList.remove('header-menu__accordionBtn_hover')
            })

            this.classList.add('header-menu__accordionBtn_hover')

            var panel = this.nextElementSibling;

            headerAccBtn.forEach(e => {
              e.nextElementSibling.style.maxHeight = null;
            })

            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
      })
    })

    if (tabsFirstLvlTitle.length != 0) {
      tabsFirstLvlTitle[0].click()
    }
  }

  if (window.matchMedia("(max-width: 850px)").matches) {

    let i

    for (i = 0; i < tabsFirstLvlTitle.length; i++) {
      tabsFirstLvlTitle[i].addEventListener("click", function () {
        let panelSecond = this.nextElementSibling;

        tabsFirstLvlTitle.forEach(e => {
          e.nextElementSibling.style.maxHeight = null;
          e.classList.remove('header-menu__tabsFirstLvlTitle_hover')
        })

        this.classList.add('header-menu__tabsFirstLvlTitle_hover')

        if (panelSecond.style.maxHeight) {
          panelSecond.style.maxHeight = null;
        } else {
          panelSecond.style.maxHeight = panelSecond.scrollHeight + "px";
        }
      });
    }

    let headerAccBtn = document.querySelectorAll(".header-menu__accordionBtn");

    for (let j = 0; j < headerAccBtn.length; j++) {
      headerAccBtn[j].addEventListener("click", function () {
        let panel = this.nextElementSibling;


        headerAccBtn.forEach(e => {
          e.nextElementSibling.style.maxHeight = null;
          e.classList.remove('header-menu__accordionBtn_hover')
        })

        this.classList.add('header-menu__accordionBtn_hover')

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }





  let realizationSwiper2 = new Swiper(".secondPage-realization__swiper", {
    slidesPerView: 1.8,
    spaceBetween: 11,
    navigation: {
      nextEl: ".secondPage-realization__arrowRight",
      prevEl: ".secondPage-realization__arrowLeft",
    },
    pagination: {
      el: ".secondPage-realizationSwiper-pagination",
    },

    breakpoints: {
      500: {
        spaceBetween: 72,
      }
    }
  });

  let realizationSlides = document.querySelectorAll('.secondPage-realization__swiper .swiper-slide')
  let realizationPagination = document.querySelectorAll('.secondPage-realizationSwiper-pagination .swiper-pagination-bullet')
  let realizationArrows = document.querySelectorAll('.secondPage-realization__arrowsContainer svg')
  console.log(realizationArrows)


  realizationSlides.forEach(el => {
    el.addEventListener('mousemove', e => {
      realizationPagination.forEach(elem => {
        elem.classList.remove('activeBlack')
      })
      let black = document.querySelector('.secondPage-realization__swiper .swiper-pagination-bullet-active');
      while (black = black.previousElementSibling) {
        black.classList.add('activeBlack');
      }
    })
  })

  realizationArrows.forEach(e => {
    e.addEventListener('click', elem => {
      realizationPagination.forEach(elem => {
        elem.classList.remove('activeBlack')
      })
      let black = document.querySelector('.secondPage-realization__swiper .swiper-pagination-bullet-active');
      while (black = black.previousElementSibling) {
        black.classList.add('activeBlack');
      }
    })
  })




  const findElements = (object) => {
    const instance = object;
    const { node, select } = instance;
    instance.toggle = node.children[0];
    instance.holder = node.children[1];
    instance.isActive = false;
    instance.options = select.options;
    instance.active = select.selectedIndex >= 0 ? select.selectedIndex : 0;
    return instance;
  };

  const isOption = (target, { className }) => target.classList.contains(`${className}__option`);

  const shouldDropdown = (target, { className }) => target.classList.contains(`${className}__option`);

  const createBaseHTML = (value, className) => (`
	<div class="${className}">
		<button class="${className}__toggle" type="button">${value}</button>
		<div class="${className}__options"></div>
    <span><img src="./assets/images/services/arrowDown.svg"></span>
	</div>
`);

  const insertBase = (select, className) => {
    const selectedIndex = select.selectedIndex >= 0 ? select.selectedIndex : 0;
    const value = select.options[selectedIndex].textContent;
    const html = createBaseHTML(value, className);
    select.insertAdjacentHTML('afterend', html);
  };

  const renderOption = (html, option, index, active, className) => {
    const activeClassName = index === active ? `${className}__option--active` : '';
    return `
    ${html}
		<button class="${className}__option ${activeClassName}" type="button" data-index="${index}">${option.textContent}</button>
  `;
  };

  const renderOptions = (options, active, className) => {
    return [...options].reduce((acc, option, index) => renderOption(acc, option, index, active, className), '');
  };

  const pickOption = (object) => {
    const instance = object;
    const { select, active, customOptions, className } = instance;
    select.selectedIndex = active;
    instance.optionActive.classList.remove(`${className}__option--active`);
    instance.optionActive = customOptions[active];
    instance.optionActive.classList.add(`${className}__option--active`);
    instance.toggle.textContent = instance.optionActive.textContent;
  };

  const onOptionsClick = (event, object) => {
    event.preventDefault();
    const instance = object;
    const { select, hideDropdown } = instance;
    const { target } = event;
    if (isOption(target, instance)) {
      instance.active = target.dataset.index;
      pickOption(instance);
    }
    if (shouldDropdown(target, instance)) {
      hideDropdown();
    }
  };

  const initOptionsEvents = (instance) => {
    instance.holder.addEventListener('click', event => onOptionsClick(event, instance));
  };

  const render = (object) => {
    const instance = object;
    const { holder, options, className, active } = instance;
    const html = renderOptions(options, active, className);
    holder.insertAdjacentHTML('afterbegin', html);
    instance.customOptions = [...holder.children];
    instance.optionActive = instance.customOptions[active];
    initOptionsEvents(instance);
  };

  const hideSelect = ({ node, select }) => node.appendChild(select);

  const wrapSelect = (object) => {
    const instance = object;
    const { select, className } = instance;
    return new Promise((resolve) => {
      requestIdleCallback(() => {
        insertBase(select, className);
        instance.node = select.nextElementSibling;
        hideSelect(instance);
        resolve(instance);
      });
    });
  };

  const unsubscribeDocument = ({ hideDropdown }) => document.removeEventListener('click', hideDropdown);
  const subscribeDocument = ({ hideDropdown }) => document.addEventListener('click', hideDropdown);

  const hideOptions = (object) => {
    const instance = object;
    const { node, className } = instance;
    instance.isActive = false;
    node.classList.remove(`${className}--active`);
    unsubscribeDocument(instance);
  };

  const showOptions = (object) => {
    const instance = object;
    const { node, className } = instance;
    instance.isActive = true;
    node.classList.add(`${className}--active`);
    subscribeDocument(instance);
  };

  const toggleOptions = (instance) => {
    if (instance.isActive) hideOptions(instance);
    else showOptions(instance);
  };

  const onNodeClick = event => event.stopPropagation();

  const initEvents = (object) => {
    const instance = object;
    const { node, toggle } = instance;
    const showDropdown = () => { showOptions(instance); };
    const hideDropdown = () => { hideOptions(instance); };
    const toggleDropdown = () => { toggleOptions(instance); };
    instance.showDropdown = showDropdown;
    instance.hideDropdown = hideDropdown;
    instance.toggleDropdown = toggleDropdown;
    toggle.addEventListener('click', toggleDropdown);
    node.addEventListener('click', onNodeClick);
    return instance;
  };

  const constructor = (select) => {
    const instance = {
      select,
      className: select.dataset.customSelectClass,
    };

    const init = () => {
      wrapSelect(instance)
        .then(findElements)
        .then(initEvents)
        .then(render);
    };

    init();
  };

  const selects = document.querySelectorAll('[data-custom-select-class]');
  selects.forEach(constructor);

  let organizationOfSpaceSwiper = new Swiper(".organizationOfSpace-include__swiper", {
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".organizationOfSpace-include__next",
      prevEl: ".organizationOfSpace-include__prev",
    },
  });

  let designSwiper = new Swiper(".design-include__swiper", {
    slidesPerView: 1.4,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".organizationOfSpace-include__next",
      prevEl: ".organizationOfSpace-include__prev",
    },

    breakpoints: {
      500: {
        slidesPerView: 2,
      }
    }
  });

  let realizationSwiper = new Swiper(".realizationSwiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 60,

    navigation: {
      nextEl: ".realization-swiper__next",
      prevEl: ".realization-swiper__prev",
    },

    breakpoints: {
      850: {
        slidesPerView: 1.6,
      }
    }
  });




  let secondPageSwiper = new Swiper(".secondPageSwiper", {
    navigation: {
      nextEl: ".secondPage__arrowRight",
      prevEl: ".secondPage__arrowLeft",
    },

    pagination: {
      el: ".secondPageSwiper-pagination",
    },
  });












  let pagination = document.querySelectorAll('.secondPage-swiperBlock .swiper-pagination-bullet')

  let slides = document.querySelectorAll('.secondPageSwiper .swiper-slide')

  let secondPageArrowContainer = document.querySelectorAll('.secondPage__arrowContainer svg')





  slides.forEach(el => {
    el.addEventListener('mousemove', e => {
      pagination.forEach(elem => {
        elem.classList.remove('activeBlack')
      })
      let red = document.querySelector('.secondPage-swiperBlock .swiper-pagination-bullet-active');
      while (red = red.previousElementSibling) {
        red.classList.add('activeBlack');
      }
    })
  })

  secondPageArrowContainer.forEach(e => {
    e.addEventListener('click', elem => {
      pagination.forEach(elem => {
        elem.classList.remove('activeBlack')
      })
      let red = document.querySelector('.secondPage-swiperBlock .swiper-pagination-bullet-active');
      while (red = red.previousElementSibling) {
        red.classList.add('activeBlack');
      }
    })
  })


  if (window.matchMedia("(max-width: 500px)").matches) {
    let servicesStepSwiper = new Swiper(".services-steps__swiper", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".services-steps__arrowRight",
        prevEl: ".services-steps__arrowLeft",
      },

    });
  }

  let textArea = document.querySelectorAll('.textArea')
  let leftBlockArea = document.querySelector('.main-createEmotions__helper2')

  textArea.forEach(e => {
    e.addEventListener("focusin", () => {
      e.classList.add('areaHeight')
      leftBlockArea.classList.add('leftBlockAreaActive')
    });
    e.addEventListener("focusout", () => {
      e.classList.remove('areaHeight')
      leftBlockArea.classList.remove('leftBlockAreaActive')
    });
  })

  let leftBlockContainer = document.querySelector('.leftBlockContainer__text');
  let mainCreate = document.querySelector('#create')

  let mainServices = document.querySelector('#services')

  let firstStep = document.querySelector('#firstStep')

  let mainGallery = document.querySelector('#gallery')

  let mainInContact = document.querySelector('#inContact')





  const tl2 = gsap.timeline();

  tl2.from('.main-createEmotions__imgContainer img', { opacity: 0, y: -300, duration: 1.8, delay: 2.4 })

  const tl3 = gsap.timeline();

  tl3.from('.main-createEmotions__subtitle', { opacity: 0, duration: 1.3, delay: 1.3 })

  const tl4 = gsap.timeline();

  tl4.from('.main-createEmotions__title', { opacity: 0, duration: 1.3, delay: 0.7 })



  const tl8 = gsap.timeline();

  tl8.from('.leftBlockContainer__imgContainer', { opacity: 0, x: -200, duration: 1, delay: 3.4 })

  const tl9 = gsap.timeline();

  // tl9.from('.leftBlockContainer__horizontalBorder', {width: 0, duration: 0.5, delay: 1})

  const tl10 = gsap.timeline();

  tl10.to('.leftBlockContainer__horizontalBorder', { transform: 'scale(1, 1)', duration: 1, delay: 2.4 })
  tl10.to('.leftBlock__verticalBorder', { transform: 'scale(1, 1)', duration: 1, })


  const tl5 = gsap.timeline();

  tl5.from('.main-solutions__content h2', { opacity: 0 })



  ScrollTrigger.create({
    animation: tl5,
    trigger: '.main-solutions__content',
    start: 'top 90%',
    end: "top 80%",
    // scrub: true,
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play play reverse reverse",
    // markers: true
  })


  const tl7 = gsap.timeline();

  tl7.from('.main-services__borderLine', { width: 0, duration: 1.5, })

  tl7.fromTo(".main-services__btn", { opacity: 0 }, { opacity: 1 })

  ScrollTrigger.create({
    animation: tl7,
    trigger: '.main-services__tabContainer',
    start: 'top 60%',
    end: "top 30%",
  })

  const tl17 = gsap.timeline();

  tl17.fromTo(".main-services__btn", { opacity: 0 }, { opacity: 1, delay: 0.5 })

  ScrollTrigger.create({
    animation: tl17,
    trigger: '.main-services__tabContainer',
    start: 'top 60%',
    end: "top 30%",
  })



  const tl12 = gsap.timeline();

  tl12.fromTo('.main-firstStep__title h2', { opacity: 0, x: 50 }, { opacity: 1, x: 0, delay: 0.2, duration: 0.5 })


  ScrollTrigger.create({
    animation: tl12,
    trigger: '.main-firstStep__content',
    start: 'top 80%',
    end: "top 30%",
  })

  const tl28 = gsap.timeline();

  tl28.fromTo('.main-firstStep__blackLine', { transform: "scale(0, 1)", duration: 1, }, { transform: "scale(1, 1)", duration: 0.6, })

  ScrollTrigger.create({
    animation: tl28,
    trigger: '.main-firstStep__content',
    start: 'top 80%',
    end: "top 30%",
  })
  const tl13 = gsap.timeline();

  tl13.from('.main-gallery__tabsContainer_borderLine', { width: 0, duration: 1.5 })

  ScrollTrigger.create({
    animation: tl13,
    trigger: '.main-gallery__content',
    start: 'top 80%',
    end: "top 30%",
  })


  const tl14 = gsap.timeline();

  tl14.fromTo('.main-contact__content', { opacity: 0 }, { opacity: 1 })

  ScrollTrigger.create({
    animation: tl14,
    trigger: '.main-contact__content',
    start: 'top 70%',
    end: "top 60%",
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play play reverse reverse",
  })


  const tl18 = gsap.timeline()

  tl18.fromTo('.main-result__content h2', { opacity: 0 }, { opacity: 1 })

  ScrollTrigger.create({
    animation: tl18,
    trigger: '.main-result__content',
    start: 'top 90%',
    end: "top 80%",
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play play reverse reverse",
    // scrub: true,
  })


  // const tl19 = gsap.timeline()

  // tl19.fromTo('.main-result__stepsSwiper', { opacity: 0 }, { opacity: 1 })

  // ScrollTrigger.create({
  //   animation: tl19,
  //   trigger: '.main-result__subtitle',
  //   start: 'top 70%',
  //   end: "top 60%",
  //   events: "onEnter onLeave onEnterBack onLeaveBack",
  //   toggleActions: "play play reverse reverse",
  // })


  const tl20 = gsap.timeline()

  tl20.fromTo('.main-firstStep__subtitle', { opacity: 0 }, { opacity: 1 })

  ScrollTrigger.create({
    animation: tl20,
    trigger: '.main-firstStep__subtitle',
    start: 'top 70%',
    end: "top 60%",
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play play reverse reverse",
  })

  const tl30 = gsap.timeline()

  tl30.fromTo('.main-firstStep__accordeonContainer', { opacity: 0 }, { opacity: 1 })

  ScrollTrigger.create({
    animation: tl30,
    trigger: '.main-firstStep__subtitle',
    start: 'top 70%',
    end: "top 60%",
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play play reverse reverse",
  })


  const tl21 = gsap.timeline()

  tl21.fromTo('.leftBlockContainer__text', { opacity: 0, y: 100 }, { opacity: 1, y: 0 })

  ScrollTrigger.create({
    animation: tl21,
    trigger: '.main-createEmotions__textContainer',
    endTrigger: '.main-solutions',
    start: 'top 70%',
    end: "top 70%",
    onEnter: function () {
      leftBlockContainer.innerHTML = "";
    },
    onLeave: function () {
      leftBlockContainer.innerHTML = "";
    },
    onEnterBack: function () {
      leftBlockContainer.innerHTML = "";
    },
    onLeaveBack: function () {
      leftBlockContainer.innerHTML = "";
    },
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play restart restart restart",
  })



  ScrollTrigger.create({
    animation: tl21,
    trigger: '.main-solutions__content',
    endTrigger: ".main-services",
    start: 'top 70%',
    end: "top 70%",
    onEnter: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainCreate.innerHTML
    },
    onLeave: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainCreate.innerHTML
    },
    onEnterBack: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainCreate.innerHTML
    },
    onLeaveBack: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainCreate.innerHTML
    },
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play restart restart restart",
  })

  ScrollTrigger.create({
    animation: tl21,
    trigger: '.main-services',
    endTrigger: ".main-result",
    start: 'top 70%',
    end: "top 70%",
    onEnter: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainServices.innerHTML
    },
    onLeave: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainServices.innerHTML
    },
    onEnterBack: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainServices.innerHTML
    },
    onLeaveBack: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainServices.innerHTML
    },
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play restart restart restart",
  })


  ScrollTrigger.create({
    animation: tl21,
    trigger: '.main-result',
    endTrigger: ".main-firstStep",
    start: 'top 70%',
    end: "top 70%",
    onEnter: function () {
      leftBlockContainer.innerHTML = "";
    },
    onLeave: function () {
      leftBlockContainer.innerHTML = "";
    },
    onEnterBack: function () {
      leftBlockContainer.innerHTML = "";
    },
    onLeaveBack: function () {
      leftBlockContainer.innerHTML = "";
    },
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play restart restart restart",
  })


  ScrollTrigger.create({
    animation: tl21,
    trigger: '.main-firstStep',
    endTrigger: ".main-gallery",
    start: 'top 70%',
    end: "top 70%",
    onEnter: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = firstStep.innerHTML
    },
    onLeave: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = firstStep.innerHTML
    },
    onEnterBack: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = firstStep.innerHTML
    },
    onLeaveBack: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = firstStep.innerHTML
    },
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play restart restart restart",
  })

  ScrollTrigger.create({
    animation: tl21,
    trigger: '.main-gallery',
    endTrigger: ".main-contact",
    start: 'top 70%',
    end: "top 70%",
    onEnter: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainGallery.innerHTML
    },
    onLeave: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainGallery.innerHTML
    },
    onEnterBack: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainGallery.innerHTML
    },
    onLeaveBack: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainGallery.innerHTML
    },
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play restart restart restart",
  })


  ScrollTrigger.create({
    animation: tl21,
    trigger: '.main-contact',
    endTrigger: ".main-contact__btnContainer",
    start: 'top 70%',
    end: "top 70%",
    onEnter: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainInContact.innerHTML
    },
    onLeave: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainInContact.innerHTML
    },
    onEnterBack: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainInContact.innerHTML
    },
    onLeaveBack: function () {
      leftBlockContainer.innerHTML = "";
      leftBlockContainer.innerHTML = mainInContact.innerHTML
    },
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play none none none",
  })




  // const tl22 = gsap.timeline()

  // tl22.fromTo('.leftBlockContainer__text', { opacity: 0, y: 100 }, { opacity: 1, y: 0 })


  // ScrollTrigger.create({
  //   animation: tl22,
  //   trigger: '.main-contact',
  //   endTrigger: ".main-contact__btnContainer",
  //   start: 'top 70%',
  //   end: "top 70%",
  //   onEnter: function(){
  //     leftBlockContainer.innerHTML = "";
  //     leftBlockContainer.innerHTML = mainInContact.innerHTML
  //   },
  //   onLeave: function(){
  //     leftBlockContainer.innerHTML = "";
  //     leftBlockContainer.innerHTML = mainInContact.innerHTML
  //   },
  //   onEnterBack: function(){
  //     leftBlockContainer.innerHTML = "";
  //     leftBlockContainer.innerHTML = mainInContact.innerHTML
  //   },
  //   onLeaveBack: function(){
  //     leftBlockContainer.innerHTML = "";
  //     leftBlockContainer.innerHTML = mainInContact.innerHTML
  //   },
  //   events: "onEnter onLeave onEnterBack onLeaveBack",
  //   toggleActions: "play restart restart restart",
  // })

  const tl22 = gsap.timeline()

  let kkk = document.querySelector('.main-solutions__content');
  let bbb = kkk.offsetHeight;
  let xxx = (bbb * 0.35);
  let zzz = (bbb * 0.2);
  let lll = (bbb * 1.29);

  tl22.fromTo('.main-solutions__content h2', { y: 0 }, { y: xxx })

  ScrollTrigger.create({
    animation: tl22,
    trigger: '.main-solutions__content',
    // endTrigger: ".main-contact__btnContainer",
    start: '-=42%',
    end: `+=${lll + 'px'}`,
    scrub: true,
  })


  const tl23 = gsap.timeline()


  tl23.fromTo('.main-solutions__subtitleText', { y: 0 }, { y: zzz })



  ScrollTrigger.create({
    animation: tl23,
    trigger: '.main-solutions__content',
    start: `+=${bbb - bbb - (bbb * 0.1141) + "px"}`,
    end: `+=${bbb * 1 + 'px'}`,
    scrub: true,
  })

  const tl24 = gsap.timeline()
  tl24.fromTo('.main-solutions__design', { y: 0 }, { y: zzz })

  ScrollTrigger.create({
    animation: tl24,
    trigger: '.main-solutions__content',
    start: `+=${bbb - bbb - (bbb * 0.1141) + "px"}`,
    end: `+=${bbb * 1 + 'px'}`,
    scrub: true,
  })



  const tl25 = gsap.timeline();

  let count = 0

  ScrollTrigger.create({
    animation: tl25,
    trigger: '.main-solutions__content',
    start: 'top 40%',
    end: 'top 20%',
    onEnter: function () {
      count += 1
      if (count <= 1) {
        setTimeout(() => {

          let solutionImgSwiper = new Swiper('.main-solutions__imgContainer', {
            loop: true,
            speed: 1100,
            allowTouchMove: false,
            effect: "creative",
            creativeEffect: {
              prev: {
                translate: ["-5%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            },
            autoplay: {
              delay: 6000,
            },
          })

          solutionImgSwiper.autoplay.stop()

          solutionImgSwiper.slideNext()
          solutionImgSwiper.autoplay.start()
        }, 3000)

      }
    },
    events: "onEnter onLeave onEnterBack onLeaveBack",
    toggleActions: "play play reverse reverse",
    // markers: true,
  })



  let contactHeight = document.querySelector('.main-contact').offsetHeight;
  let mainHeight = document.querySelector('main').offsetHeight;




  // ScrollTrigger.create({
  //   animation: tl29,
  //   trigger: '.main-contact',
  //   endTrigger: '.main-contact__content button',
  //   onEnter: function() {
  //     tl29.fromTo('.leftBlockContainer',{position: 'fixed', top: `${window.innerHeight * 0.2}`}, { position: 'absolute', top: `${mainHeight - contactHeight * 2 + 'px'}`, duration: 0})
  //   },
  //   onLeave: function() {
  //     tl29.to('.leftBlockContainer', { position: 'fixed', top: "20%", duration: 0})
  //   },
  //   onEnterBack: function() {
  //     tl29.to('.leftBlockContainer', { position: 'fixed', top: "20%", duration: 0})
  //   },
  //   onLeaveBack: function() {
  //     tl29.to('.leftBlockContainer', { position: 'fixed', top: "20%", duration: 0})
  //   },
  //   start: 'top 70%',
  //   end: "top 20%",
  //   markers: true,
  // })


  // const tl29 = gsap.timeline()
  // tl29.fromTo('.leftBlockContainer', { position: 'fixed' }, { position: 'fixed' })

  // ScrollTrigger.create({
  //   animation: tl29,
  //   trigger: 'main',
  //   start: "+=0px",
  //   end: `+=${mainHeight - contactHeight * 2 + 'px'}`,
  //   scrub: true,
  //   markers: true,
  // })




  // const tl29 = gsap.timeline()
  // gsap.to('.leftBlockContainer', {
  //   y: mainHeight,
  //   scrollTrigger: {
  //     trigger: 'main',
  //     start: `top 0%`,
  //     end: `bottom 0%`,
  //     scrub: true,
  //     markers: true,
  //   }
  // })

  // ScrollTrigger.create({
  //   animation: tl29,
  //   trigger: 'main',
  //   endTrigger: 'footer',
  //   start: `top 50%`,
  //   end: `top 50%`,
  //   scrub: true,
  //   markers: true,
  // })



  let resultContentHeight = document.querySelector('.main-result__content').offsetHeight
  let resultTextHeight = document.querySelector('.main-result__content h2').offsetHeight
  let resultRightBlockHeight = document.querySelector('.main-result__stepsSwiper').offsetHeight
  let resultSubtitle = document.querySelector('.main-result__subtitle').offsetHeight
  let swiperText = document.querySelector('.main-result__swiperText').offsetHeight

  // const tl31 = gsap.timeline({
  //   pause: true,
  //   scrollTrigger: {
  //     trigger: '.main-result__content',
  //     start: `-=${resultContentHeight * 0.5 + "px"}`,
  //     end: `+=${resultContentHeight * 0.5 + "px"}`,
  //     scrub: true,
  //     markers: true,
  //   }
  // })

  // tl31.fromTo('.main-result__h2Container h2',{y: 0}, { y: (resultContentHeight - resultRightBlockHeight - resultTextHeight + resultSubtitle + 'px') })





  // const tl32 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.main-result__content',
  //     start: `-=${0 + "px"}`,
  //     end: `+=${resultContentHeight * 0.8 + "px"}`,
  //     scrub: true,
  //     markers: true,
  //   }
  // })

  // tl32.fromTo('.main-result__h2Container h2', { y: resultContentHeight - resultRightBlockHeight - resultTextHeight + resultSubtitle + 'px' }, { y: (resultContentHeight - resultTextHeight + "px") })


  const tl31 = gsap.timeline({
    pause: true,
    scrollTrigger: {
      trigger: '.main-result__content',
      // start: `-=${resultContentHeight * 0.2 + "px"}`,
      // end: `+=${resultContentHeight * 1.5 + "px"}`,
      start: 'top 30%',
      end: 'top -120%',
      scrub: true,
      // markers: true,
    }
  })

  tl31.fromTo('.main-result__h2Container h2',{y: 0}, { y: (resultContentHeight - resultTextHeight - swiperText + 'px') })



})