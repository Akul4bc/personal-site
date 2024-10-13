function copyEmailToClipboard() {
  const email = "djsinglebookings@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(function () {
      // Use SweetAlert to show success message
      Swal.fire({
        icon: "success",
        title: "Copied!",
        text: "Email copied to clipboard!",
        timer: 2000,
        showConfirmButton: false,
      });
    })
    .catch(function (err) {
      console.error("Error copying text: ", err);
    });
}
