const daftarDetail = document.querySelectorAll(".detail-item");

if (daftarDetail.length > 0) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const dipilih = id ? document.getElementById(id) : null;

  if (dipilih && dipilih.classList.contains("detail-item")) {
    dipilih.classList.remove("d-none");                  
    const nama = dipilih.querySelector("h1").textContent;
    document.getElementById("namaCrumb").textContent = nama;
    document.title = nama + " | Mamasa Highland";
  } else {
    document.getElementById("tidakAda").classList.remove("d-none");  
  }
}

const form = document.getElementById("formLogin");

if (form) {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const pesan = document.getElementById("pesan");

  function setError(input, errId, teks) {
    document.getElementById(errId).textContent = teks;
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
  }

  function setValid(input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();      
    pesan.innerHTML = "";
    let valid = true;
    const emailPola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
      setError(email, "errEmail", "Email tidak boleh kosong.");
      valid = false;
    } else if (!emailPola.test(email.value.trim())) {
      setError(email, "errEmail", "Format email tidak valid.");
      valid = false;
    } else {
      setValid(email);
    }

    if (password.value === "") {
      setError(password, "errPassword", "Password tidak boleh kosong.");
      valid = false;
    } else if (password.value.length < 8) {
      setError(password, "errPassword", "Password minimal 8 karakter.");
      valid = false;
    } else {
      setValid(password);
    }

    if (valid) {
      pesan.innerHTML = '<div class="alert alert-success">Validasi berhasil! Selamat datang, ' + email.value.trim() + '.</div>';
    } else {
      pesan.innerHTML = '<div class="alert alert-danger">Login gagal. Periksa kembali isian Anda.</div>';
    }
  });
}