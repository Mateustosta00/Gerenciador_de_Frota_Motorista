document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    // Aqui você pode substituir por uma API ou sistema real de autenticação
    if (username === 'admin' && password === '123456') {
      window.location.href = 'dasboard.html'; // Página do sistema
    } else {
      errorMessage.textContent = 'Usuário ou senha inválidos';
    }
  });
  