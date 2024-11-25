// Registrasi: Simpan data akun ke localStorage
document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    if (username && password) {
      // Simpan akun ke localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Akun berhasil dibuat! Silakan login.");
      window.location.href = "login.html";
    } else {
      alert("Harap isi semua kolom!");
    }
  });

// Login: Validasi dengan data di localStorage
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("Login berhasil!");
    window.location.href = "menu.html";
  } else {
    alert("Username atau password salah!");
  }
});
