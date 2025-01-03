function bookTicket() {
  // Get user inputs
  const ticketType = document.getElementById('ticket-type').value;
  const date = document.getElementById('date').value;
  const quantity = document.getElementById('quantity').value;

  // Check if all fields are filled
  if (!date || !quantity) {
    alert('Please fill in all fields.');
    return;
  }

  // Show confirmation
  const confirmation = document.getElementById('confirmation');
  const ticketDetails = document.getElementById('ticket-details');
  ticketDetails.textContent = `You have booked ${quantity} ${ticketType} ticket(s) for ${date}.`;
  confirmation.style.display = 'block';
}
