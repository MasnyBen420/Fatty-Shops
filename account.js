function changePasswordAlert() {
    let pass = document.querySelector('#passwordChange');
    pass.classList.toggle('hidden');
    }
  
    document.querySelector('#xImg').addEventListener('click', changePasswordAlert);
    document.querySelector('#changePassword').addEventListener('click', changePasswordAlert);