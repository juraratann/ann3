function validateForm() {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
      if (input.value === "") {
        input.style.backgroundColor = "red";
        return false;
      }
    }
    const username = document.querySelector("input[name='username']");
    if (username.value.length < 3) {
      username.style.backgroundColor = "red";
      alert('ไม่ถูกต้อง ชื่อผู้ใช้ ห้ามมีตัวเลขนำหน้า \n หรือต้องมีความยาวมากกว่า 3 ตัวอักษร ');
      changeColor('#username');
      return false;
    }
    const password = document.querySelector("input[name='password']");
    if (password.value.length < 4) {
      password.style.backgroundColor = "red";
      alert('ไม่ถูกต้อง รหัสผ่านต้องมากกว่า 4 ตัว และต้องมีทั้งตัวเลขและตัวอักษร');
      changeColor('#password');
      return false;
    }

    return true;
  }
  
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const isValidated = validateForm();
  
    if (!isValidated) {
      return;
    }
    window.location.href = "https://www.example.com";
  });