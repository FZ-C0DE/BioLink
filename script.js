/**
 * Script untuk membuat link bisa di copy
 */ 

const actionlink = document.querySelectorAll(".link-card .link-action");

actionlink.forEach((action) => {
    action.addEventListener("click", (e) => {
        e.preventDefault();

        // console.log("action : ", action.parentElement);
        const url = action.parentElement.getAttribute("href");
        // console.log("url : ", url);
        navigator.clipboard.writeText(url);

        /**untuk memunculkan notifikasi link disalin */
        document.getElementById("toast").innerHTML = `
    <div class="toast-container">
        <p>✅link berhasil disalin!</p>
    </div>
     `;

     /** untul menghilankan notifikasi setelah diclick */
    setTimeout(() => {
        document.querySelector("#toast .toast-container").classList.add("toast-gone")
    }, 300);

    setTimeout(() => {
        document.querySelector("#toast .toast-container").remove();
    }, 1000);
    });
});


/** untuk ganti icon sosmed ketika di hover */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", (e) => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });

    sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    })
});