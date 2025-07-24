document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector('.upper-mainh1');
    const ps = document.querySelectorAll('.upper-main');
    const boxes = document.querySelectorAll('.box');
    const toggleBtn = document.getElementById('manualColorChange');

    const hcolors = ['#00ffe5', '#8ab6ff', '#ff6bcb', '#c3a3ff', '#00ffe5'];
    const pcolors = ['#e0e0e0', '#8ecfff', '#d1b3ff', '#ffccff', '#e0e0e0'];
    const bcolors = ['#ffffff', '#fffaf0', '#f0ffff', '#f0f8ff', '#fffbff', '#fdf5e6', '#fef9ff'];

    let colorIndex = 0;
    let intervalId = null;

    function applyColors() {
        h1.style.color = hcolors[colorIndex % hcolors.length];
        ps.forEach(p => {
            p.style.color = pcolors[colorIndex % pcolors.length];
        });
        boxes.forEach(box => {
            box.style.backgroundColor = bcolors[colorIndex % bcolors.length];
            box.style.transition = "background-color 1s ease";
        });
        colorIndex++;
    }

    toggleBtn.addEventListener('click', () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            toggleBtn.textContent = '🎨Click to start changing color animation.🎨';
        } else {
            applyColors();
            intervalId = setInterval(applyColors, 2000);
            toggleBtn.textContent = '🛑 Click to stop changing color animation.🛑';
        }
    });
});


function easterEgg() {
  document.getElementById("easter").style.display = "flex";
}

function closeEaster() {
  document.getElementById("easter").style.display = "none";
}

const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(bar => {
  const target = parseInt(bar.getAttribute('data-progress'));
  let current = 0;
  const intervalSpeed = 70;
  const interval = setInterval(() => {
    if (current >= target) {
      clearInterval(interval);
      return;
    }
    current++;
    bar.style.width = current + '%';
  }, intervalSpeed);
});

window.addEventListener('load', () => {
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    document.getElementById('blackhole-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';

    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
      const target = parseInt(bar.getAttribute('data-progress'));
      let current = 0;
      const intervalSpeed = 70;
      const interval = setInterval(() => {
        if (current >= target) {
          clearInterval(interval);
          return;
        }
        current++;
        bar.style.width = current + '%';
      }, intervalSpeed);
    });

  }, 3500);
});
