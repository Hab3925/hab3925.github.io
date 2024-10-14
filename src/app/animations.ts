import { showClearButton } from './../components/navbar';

export const launchRocket = () => {
    const rocket = document.createElement('div');
    rocket.textContent = '🚀';
    rocket.style.position = 'fixed';
  
    // Generate a random starting position between 10% and 90% of the screen width
    const minStartX = window.innerWidth * 0.1;
    const maxStartX = window.innerWidth * 0.9 - 50;
    const randomStartX = Math.random() * (maxStartX - minStartX) + minStartX;
    rocket.style.left = `${randomStartX}px`;
    rocket.style.bottom = '0';
    rocket.style.fontSize = '3rem';
    rocket.style.transformOrigin = 'center';
    rocket.classList.add('animated-emoji');
    document.body.appendChild(rocket);
  
    showClearButton();
  
    let positionY = 0;
    let positionX = randomStartX;
    let velocityY = 1;
    let velocityX = 1.5;
    let accelerationY = 0.1;
  
    let smokeCounter = 0;
    const smokeRate = 5;
  
    const createSmokeTrail = (x: number, y: number) => {
      const smoke = document.createElement('div');
      smoke.textContent = '☁️';
      smoke.style.position = 'fixed';
      smoke.style.left = `${x}px`;
      smoke.style.top = `${y}px`;
      smoke.style.fontSize = '1.5rem';
      smoke.style.opacity = '1';
      smoke.classList.add('animated-emoji');
      document.body.appendChild(smoke);
  
      let opacity = 1;
      const fadeInterval = setInterval(() => {
        opacity -= 0.05;
        smoke.style.opacity = opacity.toString();
  
        if (opacity <= 0) {
          clearInterval(fadeInterval);
          document.body.removeChild(smoke);
        }
      }, 50);
    };
  
    const animateRocket = () => {
      positionY += velocityY;
      positionX += velocityX;
      velocityY += accelerationY;
  
      rocket.style.bottom = `${positionY}px`;
      rocket.style.left = `${positionX}px`;
  
      let angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);
      angle -= 90;
      rocket.style.transform = `rotate(${angle}deg)`;
  
      smokeCounter++;
      if (smokeCounter % smokeRate === 0) {
        createSmokeTrail(positionX, window.innerHeight - positionY - 30);
      }
  
      if (positionY < window.innerHeight && positionX < window.innerWidth) {
        requestAnimationFrame(animateRocket);
      } else {
        document.body.removeChild(rocket);
      }
    };
  
    animateRocket();
  };
  
  export const bounceBall = () => {
    const ballEmojis = ['⚽', '🏀', '🏈', '⚾', '🧶', '🏐', '🥎', '🪩', '🔮'];
    const randomBallEmoji = ballEmojis[Math.floor(Math.random() * ballEmojis.length)];
  
    const ball = document.createElement('div');
    ball.textContent = randomBallEmoji;
    ball.style.position = 'fixed';
    ball.style.left = '10%';
    ball.style.top = '0';
    ball.style.fontSize = '2rem';
    ball.classList.add('animated-emoji');
    document.body.appendChild(ball);
  
    showClearButton();
  
    let positionY = 0;
    let velocityY = 0;
    let gravity = 0.5;
    let damping = 0.7;
    let bounceCount = 0;
    let maxBounces = 6;
    let floorHeight = window.innerHeight - 50;
  
    let positionX = window.innerWidth * 0.1;
    let velocityX = 6;
  
    const animateBall = () => {
      velocityY += gravity;
      positionY += velocityY;
      positionX += velocityX;
  
      if (positionY >= floorHeight) {
        positionY = floorHeight;
        velocityY = -velocityY * damping;
        bounceCount++;
  
        if (bounceCount >= maxBounces) {
          document.body.removeChild(ball);
          return;
        }
      }
  
      if (positionX <= 0 || positionX >= window.innerWidth - 50) {
        velocityX = -velocityX;
      }
  
      ball.style.top = `${positionY}px`;
      ball.style.left = `${positionX}px`;
  
      requestAnimationFrame(animateBall);
    };
  
    animateBall();
  };

  export const stackBooks = () => {
    const bookEmojis = ['📚', '📖', '📓', '📕', '📗', '📘', '📙'];
    const numBooks = 5; // Number of books to spawn per click
    const maxBooks = 150; // Maximum number of books allowed on the screen
    const footer = document.querySelector('footer');

    let existingBooks = document.querySelectorAll('.book');
    if (existingBooks.length >= maxBooks) {
      // Remove oldest books if maxBooks limit is reached
      const booksToRemove = existingBooks.length + numBooks - maxBooks;
      for (let i = 0; i < booksToRemove; i++) {
        existingBooks[i].remove();
      }
    }

    showClearButton();

    for (let i = 0; i < numBooks; i++) {
      const randomBookEmoji = bookEmojis[Math.floor(Math.random() * bookEmojis.length)];

      const book = document.createElement('div');
      book.textContent = randomBookEmoji;
      book.classList.add('book', 'animated-emoji');
      book.style.position = 'fixed';
      book.style.left = `${Math.random() * (window.innerWidth * 0.8) + window.innerWidth * 0.1}px`; // Random position between 10% and 90% of screen width
      book.style.top = '0';
      book.style.fontSize = '2rem';
      document.body.appendChild(book);

      let positionY = 0;
      const gravity = 2; // Speed of falling

      const animateBook = () => {
        const footerRect = footer ? footer.getBoundingClientRect() : null;
        const footerVisible = footerRect && footerRect.top < window.innerHeight;
        const floorHeight = footerVisible ? footerRect.top - 50 : window.innerHeight - 50;

        positionY += gravity;

        if (positionY >= floorHeight) {
          positionY = floorHeight;
          book.style.top = `${positionY}px`;
        } else {
          book.style.top = `${positionY}px`;
        }

        requestAnimationFrame(animateBook);
      };

      const handleScroll = () => {
        const footerRect = footer ? footer.getBoundingClientRect() : null;
        const footerVisible = footerRect && footerRect.top < window.innerHeight;
        const floorHeight = footerVisible ? footerRect.top - 50 : window.innerHeight - 50;
        positionY = Math.min(positionY, floorHeight);
        book.style.top = `${positionY}px`;
      };

      window.addEventListener('scroll', handleScroll);
      animateBook();
    }
  };

export const tinkerGears = () => {
  const gearEmojis = ['⚙️', '🔧', '🪛', '🔩'];
  const numGears = 3; // Number of gears to spawn per click
  const maxGears = 15; // Maximum number of gears allowed on the screen

  let existingGears = document.querySelectorAll('.gear');
  if (existingGears.length >= maxGears) {
    // Remove oldest gears if maxGears limit is reached
    const gearsToRemove = existingGears.length + numGears - maxGears;
    for (let i = 0; i < gearsToRemove; i++) {
      existingGears[i].remove();
    }
  }

  showClearButton();

  for (let i = 0; i < numGears; i++) {
    const randomGearEmoji = gearEmojis[Math.floor(Math.random() * gearEmojis.length)];

    const gear = document.createElement('div');
    gear.textContent = randomGearEmoji;
    gear.classList.add('gear', 'animated-emoji');
    gear.style.position = 'fixed';
    gear.style.left = `${Math.random() * (window.innerWidth * 0.8) + window.innerWidth * 0.1}px`; // Random position between 10% and 90% of screen width
    gear.style.top = `${Math.random() * (window.innerHeight * 0.8)}px`; // Random position within the screen height
    gear.style.fontSize = '2rem';
    gear.style.transform = `rotate(${Math.random() * 360}deg)`;
    gear.style.transition = 'transform 0.1s linear'; // Smooth rotation to reduce jitter
    document.body.appendChild(gear);

    let angle = Math.random() * 360;
    const rotationSpeed = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1); // Random speed and direction

    const animateGear = () => {
      angle += rotationSpeed;
      gear.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(animateGear);
    };

    animateGear();
  }
};

// Remove all emojis when navigating away from the page
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    const animatedEmojis = document.querySelectorAll('.animated-emoji');
    animatedEmojis.forEach((emoji) => emoji.remove());
  });
}