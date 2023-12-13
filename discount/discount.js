function calculateDiscount() {
  const userType = document.getElementById("userType").value;
  const hasGiftCard = document.getElementById("hasGiftCard").checked;
  let discountPercentage = 0;
  let discountMessage = "";

  if (userType === "guest") {
    discountPercentage = 15;
    discountMessage = `As a guest, you get a ${discountPercentage}% discount today.`;
  } else if (userType === "existing") {
    discountMessage = "As an existing customer, no discount is available.";
  }

  if (hasGiftCard && userType !== "guest") {
    discountPercentage = 20;
    discountMessage = `You have a gift card! You get a ${discountPercentage}% discount today.`;
  }

  document.getElementById("discountMessage").innerText = discountMessage;
}
