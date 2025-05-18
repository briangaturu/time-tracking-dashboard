
  const data = {
    daily: {
      work: { current: "5hrs", previous: "Yesterday - 7hrs" },
      play: { current: "1hr", previous: "Yesterday - 2hrs" },
      study: { current: "0hrs", previous: "Yesterday - 1hr" },
      exercise: { current: "1hr", previous: "Yesterday - 1hr" },
      social: { current: "1hr", previous: "Yesterday - 3hrs" },
      selfcare: { current: "0hr", previous: "Yesterday - 1hr" },
    },
    weekly: {
      work: { current: "32hrs", previous: "Last Week - 36hrs" },
      play: { current: "10hrs", previous: "Last Week - 8hrs" },
      study: { current: "4hrs", previous: "Last Week - 7hrs" },
      exercise: { current: "4hrs", previous: "Last Week - 5hrs" },
      social: { current: "5hrs", previous: "Last Week - 10hrs" },
      selfcare: { current: "2hrs", previous: "Last Week - 2hrs" },
    },
    monthly: {
      work: { current: "128hrs", previous: "Last Month - 142hrs" },
      play: { current: "40hrs", previous: "Last Month - 36hrs" },
      study: { current: "13hrs", previous: "Last Month - 20hrs" },
      exercise: { current: "11hrs", previous: "Last Month - 18hrs" },
      social: { current: "21hrs", previous: "Last Month - 23hrs" },
      selfcare: { current: "7hrs", previous: "Last Month - 9hrs" },
    }
  };

  const buttons = document.querySelectorAll(".days p");
  const cards = document.querySelectorAll(".card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Highlight active button
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const period = button.textContent.toLowerCase(); // "daily", "weekly", etc.

      cards.forEach(card => {
        const type = card.classList[1]; // e.g., "work", "play"
        const current = card.querySelector("h2");
        const previous = card.querySelector(".subtext");

        current.textContent = data[period][type].current;
        previous.textContent = data[period][type].previous;
      });
    });
  });

