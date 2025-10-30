document.getElementById("explore-btn").addEventListener("click", () => {
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("successMsg");
  msg.textContent = "✅ Your order has been placed successfully!";
  e.target.reset();
  setTimeout(() => (msg.textContent = ""), 4000);
});

document.querySelectorAll(".order-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#order").scrollIntoView({ behavior: "smooth" });
  });
});
