const setupAccordion = () => {
  // Os cards não estavam na dom nessa hora
  const accordionCardHeaders = document.querySelectorAll(
    ".accordion-card-header"
  );

  accordionCardHeaders.forEach((accordionCardHeader) => {
    accordionCardHeader.addEventListener("click", (event) => {
      const currentlyActive = document.querySelector(
        ".accordion-card-header.active"
      );
      if (currentlyActive && currentlyActive !== accordionCardHeader) {
        currentlyActive.classList.toggle("active");
        currentlyActive.nextElementSibling.style.maxHeight = 0;
      }
      accordionCardHeader.classList.toggle("active");
      const accordionCardBody = accordionCardHeader.nextElementSibling;
      if (accordionCardHeader.classList.contains("active")) {
        accordionCardBody.style.maxHeight =
          accordionCardBody.scrollHeight + "px";
      } else {
        accordionCardBody.style.maxHeight = 0;
      }
    });
  });
};
