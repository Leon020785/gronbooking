document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const booking = {
    service: document.getElementById("service").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };

  // Simuler API-kald
  console.log("Sender booking:", booking);

  // Vis bekræftelse
  document.getElementById("bookingForm").style.display = "none";
  document.getElementById("confirmation").style.display = "block";
});
