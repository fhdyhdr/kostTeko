document.addEventListener("DOMContentLoaded", function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var root = document.documentElement;
  
    if (isMobile) {
      root.style.setProperty("--device", "mobile");
    } else {
      root.style.setProperty("--device", "desktop");
    }
  });






const counter = document.querySelector(".counter");
let count = 0;
setInterval(() => {
 if(count == 92) {
  clearInterval(count);
 }else {
  count+=1;
  counter.textContent = count + "%";
 }
}, 42);


$(function() {
    Popup.init();
});


var Popup = {
    init: function() {
        this.nav();
        this.close();
    },

    nav: function() {
        this.toggle();
    },

    toggle: function() {
        $(".popup-bar").on("touchstart click", function(e) {
            e.preventDefault();
            $(".popup").show(); // Menampilkan popup
            $(".popup").toggleClass("active");
            $(".popup .popup-overlay").removeClass("fadeOut animated").addClass("fadeIn animated");
        });
        $(".popup .popup-overlay").on("touchstart click", function(e) {
            e.preventDefault();
            Popup.closePopup();
        });
    },

    close: function() {
        $(".popup-close").on("touchstart click", function(e) {
            e.preventDefault();
            Popup.closePopup();
        });
    },

    closePopup: function() {
        $(".popup").removeClass("active");
        $(".popup .popup-overlay").removeClass("fadeIn").addClass("fadeOut");
        // Optionally hide the popup after animation
        setTimeout(function() {
            $(".popup").hide();
        }, 300); // Match the transition duration
    }
    
};


function canceldelete() {
  Popup.closePopup(); // Memanggil fungsi untuk menutup popup
}


function showPopupEdit() {
    // Tampilkan popup
    $(".popupEdit").show(); // Tampilkan elemen popup
    $(".popupEdit").addClass("active"); // Aktifkan kelas untuk menampilkan popup dengan animasi
    $(".popupEdit .popup-overlay").removeClass("fadeOut").addClass("fadeIn"); // Tampilkan overlay dengan animasi
}


function showPopupTambah() {
  // Tampilkan popup
  $(".popupTambah").show(); // Tampilkan elemen popup
  $(".popupTambah").addClass("active"); // Aktifkan kelas untuk menampilkan popup dengan animasi
  $(".popupTambah .popup-overlay").removeClass("fadeOut").addClass("fadeIn"); // Tampilkan overlay dengan animasi
  
}

function showPopupHapus() {
  // Tampilkan popup
  $(".popupHapus").show(); // Tampilkan elemen popup
  $(".popupHapus").addClass("active"); // Aktifkan kelas untuk menampilkan popup dengan animasi
  $(".popupHapus .popup-overlay").removeClass("fadeOut").addClass("fadeIn"); // Tampilkan overlay dengan animasi
}


function editpenyewa(){
    showPopupEdit();
}

function tambahpenyewa(){
  showPopupTambah();
}

function hapuspenyewa() {
  showPopupHapus();
}

const select = document.getElementById('selectOption');

select.addEventListener('focus', function() {
  // Change options when the select is clicked
  select.innerHTML = `
    <option value="" disabled selected>Kamar yang tersedia</option>
    <option value="option1">Kamar 1</option>
    <option value="option2">Kamar 2</option>
    <option value="option3">Kamar 3</option>
  `;
});

select.addEventListener('change', function() {
  // Ensure the placeholder is no longer selected
  if (this.value) {
    this.options[0].disabled = true; // Disable the placeholder
  }
});


function openbar() {
  // Show the leftbar by sliding in
  document.getElementById("leftbar").style.transform = "translateX(200px)";
  // Show the overlay
  document.getElementById("overlay").classList.add("active");
}

function closebar() {
  // Hide the leftbar by sliding it back
  document.getElementById("leftbar").style.transform = "translateX(0)";
  // Hide the overlay
  document.getElementById("overlay").classList.remove("active");
}
