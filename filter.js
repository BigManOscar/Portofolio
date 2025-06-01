document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.content-item');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
  
        // Add 'active' class to the clicked button
        button.classList.add('active');
  
        // Get the filter category
        const filter = button.getAttribute('data-filter');
  
        // Show/hide items based on the filter
        items.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  });



  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  