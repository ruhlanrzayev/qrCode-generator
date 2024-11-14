document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("input");
    const button = document.querySelector("button");
    const imgBox = document.querySelector(".imgBox");

    button.addEventListener("click", function () {
        const data = input.value.trim();

        if (data) {
            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;

            const existingQRCode = imgBox.querySelector("img");
            if (existingQRCode) {
                existingQRCode.remove();
            }

            const qrImage = document.createElement("img");
            qrImage.src = qrCodeUrl;
            qrImage.alt = "QR Code";
            qrImage.classList.add("qr-code");
            imgBox.appendChild(qrImage);

            input.classList.remove("error");
        } else {
            input.classList.add("error");

            setTimeout(() => {
                input.classList.remove("error");
            }, 300);
        }
    });
});
