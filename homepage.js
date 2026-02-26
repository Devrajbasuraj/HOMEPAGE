// Get the contact us button
const contactUsBtn = document.querySelector('.contact-us-btn');

// Add an event listener to the button
contactUsBtn.addEventListener('click', () => {
  // Get the footer element
  const footer = document.getElementById('footer');
  
  // Scroll to the footer
  footer.scrollIntoView({ behavior: 'smooth' });
});
function addToCartMessage() {
  alert("Product added to cart!");
}

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Add event listener to each button
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCartMessage);
});
function addToCartMessage() {
  const toastMessage = document.getElementById("toast-message");
  toastMessage.style.display = "block";
  setTimeout(() => {
    toastMessage.style.display = "none";
  }, 2000);
}

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Add event listener to each button
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCartMessage);
});
