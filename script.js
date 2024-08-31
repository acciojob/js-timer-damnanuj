// write js code here if required

function updateTimer() {
    const timerElement = document.getElementById('timer');
  
    // Get current date and time
    const now = new Date();
  
    // Extract day, month, year, hours, minutes, and seconds
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = now.getFullYear();
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Format the date and time
    const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
  
    // Display the formatted time in the <p> element
    timerElement.textContent = formattedTime;
  }
  
  // Update the timer every second
  setInterval(updateTimer, 1000);
  
  // Initial call to display the timer immediately when the page loads
  updateTimer();
  