function orderOnWhatsApp(productName) {
  const phoneNumber = '+201024845977'; // Replace with your WhatsApp number
  const message = encodeURIComponent(`Hi! I'm interested in ordering: ${productName}`);
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
}
