  // Hamburger menu toggle with animation and close button
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.menu-close');
  const menuLinks = document.querySelectorAll('.mobile-menu a');
  const plan1 = document.querySelector('#Premium');
  const plan2 = document.querySelector('#PremiumPlus');

  function openMenu() {
    mobileMenu.classList.add('active');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.style.overflow = ''; // Restore scroll
  }

  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  // Close on link click
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Responsive: hide mobile menu on resize
  window.addEventListener('resize', () => {
    if(window.innerWidth > 900) {
      closeMenu();
    }
  });

  // Optional: Close menu with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  function Click() {
    if (plan1) {
        plan1.addEventListener('click', () => {
            window.open("https://rzp.io/rzp/Ur3JcBIW", '_blank');
        });
    }
    if (plan2) {
        plan2.addEventListener('click', () => {
            window.open("https://rzp.io/rzp/wQaVA2Mu", '_blank');
        });
    }
}

Click();
