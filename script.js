// This file can be used for any interactive elements you might want to add
document.addEventListener("DOMContentLoaded", () => {
  // You can add JavaScript functionality here

  // Example: Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  // Publication filters
  const filterButtons = document.querySelectorAll(".filter-btn")
  const publicationItems = document.querySelectorAll(".publication-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      button.classList.add("active")

      const filter = button.getAttribute("data-filter")

      // Show/hide publications based on filter
      publicationItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-type") === filter) {
          item.style.display = "flex"
        } else {
          item.style.display = "none"
        }
      })
    })
  })

  // Portfolio item hover effect
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const overlay = item.querySelector(".portfolio-overlay")
      overlay.style.transform = "translateY(0)"
    })

    item.addEventListener("mouseleave", () => {
      const overlay = item.querySelector(".portfolio-overlay")
      overlay.style.transform = "translateY(100%)"
    })
  })

  // Current year for copyright
  const currentYear = new Date().getFullYear()
  const copyrightElement = document.querySelector("footer p")
  if (copyrightElement) {
    copyrightElement.textContent = copyrightElement.textContent.replace("2023", currentYear)
  }
})

