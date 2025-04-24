// Alterna o formulário com base na seleção
document.getElementById('tipoCadastro').addEventListener('change', function () {
    const tipo = this.value;
    document.getElementById('formVeiculo').style.display = tipo === 'veiculo' ? 'block' : 'none';
    document.getElementById('formMotorista').style.display = tipo === 'motorista' ? 'block' : 'none';
  });
  
  // Formulário de Veículo
  document.getElementById('formVeiculo').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const veiculo = {
      placa: document.getElementById('placa').value.trim(),
      modelo: document.getElementById('modelo').value.trim(),
      marca: document.getElementById('marca').value.trim(),
      ano: document.getElementById('ano').value.trim(),
      tipoCombustivel: document.getElementById('tipoCombustivel').value.trim(),
      capacidade: document.getElementById('capacidade').value.trim(),
    };
  
    const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    veiculos.push(veiculo);
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
  
    alert('Veículo cadastrado com sucesso!');
    this.reset();
  });
  
  // Formulário de Motorista
  document.getElementById('formMotorista').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const motorista = {
      nome: document.getElementById('nome').value.trim(),
      idade: document.getElementById('idade').value.trim(),
      cpf: document.getElementById('cpf').value.trim(),
      cnh: document.getElementById('cnh').value.trim(),
      validade: document.getElementById('validade').value.trim(),
      telefone: document.getElementById('telefone').value.trim(),
    };
  
    const motoristas = JSON.parse(localStorage.getItem('motoristas')) || [];
    motoristas.push(motorista);
    localStorage.setItem('motoristas', JSON.stringify(motoristas));
  
    alert('Motorista cadastrado com sucesso!');
    this.reset();
  });
  