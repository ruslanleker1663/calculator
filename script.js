// CALCULATOR PROGRAM

// Gunakan let atau pastikan elemen diambil dengan benar
let display;

// Menunggu sampai halaman web selesai dimuat penuh baru mengambil elemen ID
window.onload = function() {
    display = document.getElementById("display");
};

function appendToDisplay(input){
    if (display) {
        display.value += input;
    }
}

function clearDisplay(){
    if (display) {
        display.value = "";
    }
}

function calculate(){
    if (display && display.value !== "") {
        try {
            // eval() akan menghitung string seperti "7+8" menjadi 15
            display.value = eval(display.value);
        }
        catch(error) {
            display.value = "Error";
        }
    }
}
