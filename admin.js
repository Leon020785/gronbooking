import { supabase } from './supabase.js'

async function fetchBookings() {
  const { data, error } = await supabase.from('bookings').select('*')

  console.log("Bookinger hentet:", data) // ← HER logger du dataen

  if (error) {
    console.error("Fejl ved hentning:", error.message)
    return
  }

  const table = document.getElementById("bookingTable")
  table.innerHTML = "" // ryd "Indlæser..."

  if (data.length === 0) {
    table.innerHTML = "<tr><td colspan='3'>Ingen bookinger fundet</td></tr>"
    return
  }

  // Konverter service values til læsbare navne
  const serviceNames = {
    'privat': 'Privat rengøring',
    'kontor': 'Kontorrengøring',
    'vindue': 'Vinduespudsning',
    'efter': 'Efter håndværkere'
  }

  data.forEach(booking => {
    const row = document.createElement("tr")
    
    // Konverter service_text til læsbar tekst, eller vis den som den er hvis ikke fundet
    const serviceName = serviceNames[booking.service_text] || booking.service_text || 'Ukendt service'
    
    row.innerHTML = `
      <td>${serviceName}</td>
      <td>${booking.date || 'Ingen dato'}</td>
      <td>${booking.time || 'Ingen tid'}</td>
    `
    table.appendChild(row)
  })
}

fetchBookings()
