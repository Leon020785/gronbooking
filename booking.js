import { supabase } from './supabase.js'
document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const booking = {
    user_id: null,
    service_text: document.getElementById("service").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };
  console.log("Booking data:", booking);

  const { error } = await supabase
    .from('bookings')
    .insert([booking]);
  console.log("Insert error:", error);

  if (error) {
    alert("Noget gik galt: " + error.message);
  } else {
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
  }
});
