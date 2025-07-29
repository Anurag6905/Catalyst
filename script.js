
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.menu-close');
  const menuLinks = document.querySelectorAll('.mobile-menu a');
  const plan1 = document.getElementById('Call');
  const plan2 = document.getElementById('PremiumPlus');
  const plan3 = document.getElementById('Premium');
  const Physics = document.getElementById('Physics');
  const Chemistry = document.getElementById('Chemistry');
  const Maths = document.getElementById('Maths');
  const Short = document.getElementById('Short');
  const getnotes = document.getElementById('getnotes');
  
  function openMenu() {
    mobileMenu.classList.add('active');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.style.overflow = ''; 
  }

  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if(window.innerWidth > 900) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  let couponLinks = {
    "MS500": {
      plan2: "https://rzp.io/rzp/BcSmBHX",
      plan3: "https://rzp.io/rzp/yqGspxi"
    },
    "PS10": {
      plan2: "https://rzp.io/rzp/BcSmBHX",
      plan3: "https://rzp.io/rzp/AzefUwL"
    },
    "PS500": {
      plan2: "https://rzp.io/rzp/BcSmBHX",
      plan3: "https://rzp.io/rzp/AzefUwL"
    },
    "KS500": {
      plan2: "https://rzp.io/rzp/0wI0XTX",
      plan3: "https://rzp.io/rzp/qBvLQh08"
    },
    "SD500": {
      plan2: "https://rzp.io/rzp/kS0jsovP",
      plan3: "https://rzp.io/rzp/NkIo0G5"
    },
    "VK500": {
      plan2: "https://rzp.io/rzp/FWlEZkB",
      plan3: "https://rzp.io/rzp/wWddD9Ds"
    },
  };

  function Click () {
    if (plan2) {
      plan2.addEventListener('click', () => {
        let input = prompt("Enter your coupon code:");
        if (!input) return;
  
        input = input.trim().toUpperCase();
        if (couponLinks[input] && couponLinks[input].plan2) {
          window.open(couponLinks[input].plan2, '_blank');
        } else {
          alert("Invalid coupon code. Try again.");
        }
      });
    }
  
    if (plan3) {
      plan3.addEventListener('click', () => {
        let input = prompt("Enter your coupon code:");
        if (!input) return;
  
        input = input.trim().toUpperCase();
        if (couponLinks[input] && couponLinks[input].plan3) {
          window.open(couponLinks[input].plan3, '_blank');
        } else {
          alert("Invalid coupon code. Try again.");
        }
      });
    }

    if (plan1) {
      plan1.addEventListener('click', () => {
        window.open("https://rzp.io/rzp/Ur3JcBIW", '_blank');
      });
    }

    if (getnotes) {
      getnotes.addEventListener('click', () => {
        window.open("https://rzp.io/rzp/LlUa6de", '_blank');
      });
    }
  }

  function downloadPDF(href, filename) {
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
function Preview () {
  if (Chemistry) {
    Chemistry.addEventListener("click", () => {
      downloadPDF("/assets/Chemistry.pdf", "Chemistry.pdf");
    });
  }

  if (Maths) {
    Maths.addEventListener("click", () => {
      downloadPDF("/assets/Mathematics.pdf", "Mathematics.pdf");
    });
  }

  if (Physics) {
    Physics.addEventListener("click", () => {
      downloadPDF("/assets/Physics.pdf", "Physics.pdf");
    });
  }

  if (Short) {
    Short.addEventListener("click", () => {
      downloadPDF("/assets/Short.jpeg", "Short.jpeg");
    });
  }
}

Preview();
Click();



