const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let room = document.getElementById("room").value;
        let checkin = document.getElementById("checkin").value;
        let checkout = document.getElementById("checkout").value;

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            room === "" ||
            checkin === "" ||
            checkout === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        alert("🎉 Booking Successful!\nThank you for choosing Royal Stay Hotel.");
        bookingForm.reset();
    });
}