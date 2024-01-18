const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function toggleSingleCheckbox(id) {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var infoElements = document.querySelectorAll(".info");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].id !== id) {
      checkboxes[i].checked = false;
    }
    if (infoElements[i].id !== id) {
      infoElements[i].style.display = "none";
    }
  }
  document.getElementById(id).checked = true;
  document.getElementById(
    id
  ).nextElementSibling.nextElementSibling.style.display = "block";
}

function changeTab(tabIndex) {
  var tabs = document.getElementsByClassName("tab");
  var tabContents = document.getElementsByClassName("tab-content");

  // Скрытие всего содержимого
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    tabContents[i].classList.remove("active");
  }

  // Отображение активной вкладки
  tabs[tabIndex].classList.add("active");
  tabContents[tabIndex].classList.add("active");
}

// Открытие первого таба по умолчанию
changeTab(0);
