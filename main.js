document.addEventListener("DOMContentLoaded", function () {

    document.body.innerHTML = ` 
<body>
    <!-- Navbar  -->
    <nav class="nav">
        <div class="logo">
            <img src="./assets/favicon.jpg" alt="icon">
        </div>
        <div class="text">
            <h1>QR Code Generator</h1>
            <p>create your own qr code for free</p>
        </div>
    </nav>
    <!--  -->

    <!-- Container -->
    <div class="container">
        <p>Enter your text or URL</p>
        <input type="text" placeholder="Text or URL">
        <div class="imgBox"></div>

        <button>Generate QR Code</button>
    </div>
    <!--  -->
    <script src="main.js"></script>
</body>
`;
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
