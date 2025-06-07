let selectedType = "";
let selectedName = "";

function selectItem(btn) {
  const li = btn.parentElement;
  selectedType = li.getAttribute("data-type");
  selectedName = li.getAttribute("data-name");
  document.getElementById("formTitle").innerText = `Book: ${selectedName}`;
  document.getElementById("itemType").value = selectedType;
  document.getElementById("itemName").value = selectedName;
  document.getElementById("customerName").value = "";
  document.getElementById("dateFrom").value = "";
  document.getElementById("dateTo").value = "";
  document.getElementById("bookingFormContainer").style.display = "flex";
}

function closeForm() {
  document.getElementById("bookingFormContainer").style.display = "none";
}

function submitBooking(event) {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const from = document.getElementById("dateFrom").value;
  const to = document.getElementById("dateTo").value;
  const type = document.getElementById("itemType").value;
  const itemName = document.getElementById("itemName").value;

  // Simple validation
  if (!name || !from || !to) {
    alert("Please fill all fields!");
    return;
  }
  // Date format check
  if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to)) {
    alert("Please use correct date format: yyyy-mm-dd");
    return;
  }
  // Add booking to list
  const ul = document.getElementById("bookingsList");
  const li = document.createElement("li");
  li.textContent = `${type}: ${itemName} | Name: ${name} | From: ${from} To: ${to}`;
  ul.appendChild(li);

  closeForm();
}
