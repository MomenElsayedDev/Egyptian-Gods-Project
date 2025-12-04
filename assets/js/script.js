document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("detailModal");
  const modalImg = document.querySelector(".modal-img");
  const modalTitle = document.querySelector(".modal-title");
  const modalText = document.querySelector(".modal-text");
  const closeBtn = document.querySelector(".modal-close");

  // ----- Gods data -----
  const godsData = {
    ra: {
      title: "Ra",
      text: "Sun god and creator of life.",
      img: "images/ra.jpg",
      wiki: "https://en.wikipedia.org/wiki/Ra",
    },
    osiris: {
      title: "Osiris",
      text: "God of the afterlife and resurrection.",
      img: "images/osiris.jpg",
      wiki: "https://en.wikipedia.org/wiki/Osiris",
    },
    isis: {
      title: "Isis",
      text: "Goddess of magic and motherhood.",
      img: "images/isis.jpg",
      wiki: "https://en.wikipedia.org/wiki/Isis",
    },
    horus: {
      title: "Horus",
      text: "Sky god of kingship and protection.",
      img: "images/Horus_standing.jpg",
      wiki: "https://en.wikipedia.org/wiki/Horus",
    },
    anubis: {
      title: "Anubis",
      text: "God of mummification and afterlife.",
      img: "images/anubis.jpg",
      wiki: "https://en.wikipedia.org/wiki/Anubis",
    },
    set: {
      title: "Set",
      text: "God of chaos and storms.",
      img: "images/Set.jpg",
      wiki: "https://en.wikipedia.org/wiki/Set_(deity)",
    },
    sekhmet: {
      title: "Sekhmet",
      text: "Goddess of war and healing.",
      img: "images/skmet.jpg",
      wiki: "https://en.wikipedia.org/wiki/Sekhmet",
    },
    hathor: {
      title: "Hathor",
      text: "Goddess of love, joy, and music.",
      img: "images/hathor.jpg",
      wiki: "https://en.wikipedia.org/wiki/Hathor",
    },
    amun: {
      title: "Amun",
      text: "Creator god of hidden power.",
      img: "images/amon.jpg",
      wiki: "https://en.wikipedia.org/wiki/Amun",
    },
    ptah: {
      title: "Ptah",
      text: "God of craftsmen and builders.",
      img: "images/ptah.jpg",
      wiki: "https://en.wikipedia.org/wiki/Ptah",
    },
    thoth: {
      title: "Thoth",
      text: "God of wisdom, writing, and knowledge.",
      img: "images/thoth.jpg",
      wiki: "https://en.wikipedia.org/wiki/Thoth",
    },
    bastet: {
      title: "Bastet",
      text: "Goddess of home and cats.",
      img: "images/bastet.jpg",
      wiki: "https://en.wikipedia.org/wiki/Bastet",
    },
    sobek: {
      title: "Sobek",
      text: "God of Nile, water, and crocodiles.",
      img: "images/sobek.jpg",
      wiki: "https://en.wikipedia.org/wiki/Sobek",
    },
    maat: {
      title: "Maat",
      text: "Goddess of truth and justice.",
      img: "images/maat.jpg",
      wiki: "https://en.wikipedia.org/wiki/Maat",
    },
    khonsu: {
      title: "Khonsu",
      text: "Moon god of time and healing.",
      img: "images/khonsu.jpg",
      wiki: "https://en.wikipedia.org/wiki/Khonsu",
    },
    neith: {
      title: "Neith",
      text: "Goddess of war and weaving.",
      img: "images/neith.jpg",
      wiki: "https://en.wikipedia.org/wiki/Neith",
    },
    khnum: {
      title: "Khnum",
      text: "God of the Nile and creation on the potter's wheel.",
      img: "images/khnum.jpg",
      wiki: "https://en.wikipedia.org/wiki/Khnum",
    },
    tefnut: {
      title: "Tefnut",
      text: "Goddess of moisture and rain.",
      img: "images/tefnut.jpg",
      wiki: "https://en.wikipedia.org/wiki/Tefnut",
    },
    shu: {
      title: "Shu",
      text: "God of air and sunlight.",
      img: "images/shu.jpg",
      wiki: "https://en.wikipedia.org/wiki/Shu_(god)",
    },
    seshat: {
      title: "Seshat",
      text: "Goddess of writing, knowledge, and measurement.",
      img: "images/seshat.jpg",
      wiki: "https://en.wikipedia.org/wiki/Seshat",
    },
  };

  // ----- Helper function: open/highlight card -----
  function openCard(id) {
    const card = document.getElementById(id);
    if (!card) return;

    // Flip card if not flipped
    if (!card.classList.contains("is-flipped"))
      card.classList.add("is-flipped");

    // Scroll into view
    card.scrollIntoView({ behavior: "smooth", block: "center" });

    // Highlight
    card.classList.add("highlight");
    setTimeout(() => card.classList.remove("highlight"), 1500);
  }

  // ----- Search -----
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.querySelector("form .btn[type='button']");

  function searchGod() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;

    const cards = document.querySelectorAll(".flip-card");
    let found = false;

    cards.forEach((card) => {
      const godName = card
        .querySelector(".front-caption h3")
        .textContent.toLowerCase();
      if (godName.includes(query)) {
        openCard(card.id);
        found = true;
      }
    });

    if (!found) alert("God not found!");
  }

  if (searchBtn) searchBtn.addEventListener("click", searchGod);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchGod();
  });

  // ----- Dropdown links -----
  document.querySelectorAll(".dropdown-item").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      openCard(targetId);
    });
  });

  // ----- More buttons → open Wikipedia -----
  document.querySelectorAll(".btn.more").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-target");
      if (godsData[id]?.wiki) window.open(godsData[id].wiki, "_blank");
    });
  });

  // ----- Flip card on click -----
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("is-flipped"));
  });
});

// Scroll progress
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY; 
  const docHeight = document.documentElement.scrollHeight - window.innerHeight; 
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgress").style.width = scrollPercent + "%";
});
