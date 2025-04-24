// Gráfico de Cadastros
new Chart(document.getElementById('cadastroChart'), {
    type: 'doughnut',
    data: {
      labels: ['Ativos', 'Inativos'],
      datasets: [{
        data: [85, 15],
        backgroundColor: ['#27ae60', '#bdc3c7']
      }]
    },
    options: { responsive: false, maintainAspectRatio: false }
  });
  
  // Gráfico de Frota
  new Chart(document.getElementById('frotaChart'), {
    type: 'doughnut',
    data: {
      labels: ['Disponíveis', 'Indisponíveis'],
      datasets: [{
        data: [40, 10],
        backgroundColor: ['#2980b9', '#95a5a6']
      }]
    },
    options: { responsive: false, maintainAspectRatio: false }
  });
  
  // Gráfico de Manutenção
  new Chart(document.getElementById('manutencaoChart'), {
    type: 'doughnut',
    data: {
      labels: ['Em manutenção', 'Operacionais'],
      datasets: [{
        data: [5, 45],
        backgroundColor: ['#e67e22', '#2ecc71']
      }]
    },
    options: { responsive: false, maintainAspectRatio: false }
  });
  
  // Gráfico de Motoristas
  new Chart(document.getElementById('motoristasChart'), {
    type: 'doughnut',
    data: {
      labels: ['Ativos', 'Férias'],
      datasets: [{
        data: [30, 5],
        backgroundColor: ['#8e44ad', '#dcdde1']
      }]
    },
    options: { responsive: false, maintainAspectRatio: false }
  });
  
  // Gráfico de Checklists
  new Chart(document.getElementById('checklistChart'), {
    type: 'doughnut',
    data: {
      labels: ['Concluídos', 'Pendentes'],
      datasets: [{
        data: [90, 10],
        backgroundColor: ['#16a085', '#f39c12']
      }]
    },
    options: { responsive: false, maintainAspectRatio: false }
  });
  








