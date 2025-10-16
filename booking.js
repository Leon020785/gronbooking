import { supabase } from './supabase.js'
document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const booking = {
    service: document.getElementById("service").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };

  const { error } = await supabase
    .from('bookings')
    .insert([booking]);

  if (error) {
    alert("Noget gik galt: " + error.message);
  } else {
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
  }
});
