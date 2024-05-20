document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");
  const slides = document.querySelector(".slides");
  let currentSlide = 0;

  document.querySelectorAll(".details-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const gameCard = event.target.closest(".game-card");
      const gameData = getGameData(gameCard.dataset.game);

      document.getElementById("modal-title").textContent = gameData.title;
      document.getElementById("modal-description").textContent =
        gameData.description;
      document.getElementById("modal-genre").textContent = gameData.genre;
      document.getElementById("modal-platform").textContent = gameData.platform;
      document.getElementById("modal-distribution").textContent =
        gameData.distribution;
      document.getElementById("modal-price").textContent = gameData.price;
      document.getElementById("modal-link").href = gameData.link;

      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlidePosition();
    }
  });

  document.getElementById("next").addEventListener("click", () => {
    if (currentSlide < slides.children.length - 1) {
      currentSlide++;
      updateSlidePosition();
    }
  });

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentSlide * 300}px)`;
  }

  function getGameData(gameId) {
    const games = {
      game1: {
        title: "Найди Выход: Лабиринт",
        description: "Описание игры Найди Выход: Лабиринт...",
        genre: "Головоломка",
        platform: "PC, Android",
        distribution: "Платформа распространения...",
        price: "Бесплатно",
        link: "#",
      },
      game2: {
        title: "Fortnite: Кликер",
        description: "Описание игры Fortnite: Кликер...",
        genre: "Кликер",
        platform: "PC, Android",
        distribution: "Платформа распространения...",
        price: "Бесплатно",
        link: "#",
      },
      game3: {
        title: "Попади в круг 2",
        description: "Описание игры Попади в круг 2...",
        genre: "Аркада, Казуальный",
        platform: "PC, Android",
        distribution: "Платформа распространения...",
        price: "Бесплатно",
        link: "#",
      },
      game4: {
        title: "Click Dragon Egg",
        description: "Описание игры Click Dragon Egg...",
        genre: "Кликер",
        platform: "PC, Android",
        distribution: "Платформа распространения...",
        price: "Бесплатно",
        link: "#",
      },
    };
    return games[gameId];
  }
});
