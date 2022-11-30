function mudaFoto(foto) {
    foto = document.querySelector('.foto').src = foto;
  }

  const button = document.getElementById('btn-cadastro')

  button.addEventListener('click', (event) => {
      event.preventDefault()

      const nome1 = document.getElementById('nome1')
      const matricula = document.getElementById('matricula')
      const email1 = document.getElementById('inputEmail4')
      const email2 = document.getElementById('inputEmail5')
      const senha1 = document.getElementById('inputPassword4')
      const senha2 = document.getElementById('inputPassword5')
      const endereco = document.getElementById('inputAddress')
      const complemento = document.getElementById('inputAddress2')
      const cidade = document.getElementById('inputCity')
      const estado = document.getElementById('inputState')
      const cep = document.getElementById('inputZip')
      const termos = document.getElementById('gridCheck')

      if (nome1.value == '') {
          nome1.classList.remove("sucessoInput")
          nome1.classList.add("errorInput")
      } else {
          nome1.classList.remove("errorInput")
          // Divisão =========
          if (matricula.value == '' || matricula.value.length <= 13) {
              matricula.classList.remove("sucessoInput")
              matricula.classList.add("errorInput")
          } else {
              matricula.classList.remove("errorInput")
              // Divisão =========
              if (email1.value.indexOf("@") == -1 || email1.value.indexOf(".com") == -1 || (email1.value.indexOf(".com") - email1.value.indexOf("@") == 1)) {
                  email1.classList.remove("sucessoInput")
                  email1.classList.add("errorInput")
              } else {
                  email1.classList.remove("errorInput")
                  // Divisão =========
                  if (email2.value != email1.value) {
                      email2.classList.remove("sucessoInput")
                      email2.classList.add("errorInput") 
                  } else {
                      email2.classList.remove("errorInput")
                      // Divisão =========
                      if (senha1.value == '' || senha1.value.length <= 4) {
                          senha1.classList.remove("sucessoInput")
                          senha1.classList.add("errorInput")
                      } else {
                          senha1.classList.remove("errorInput")
                          // Divisão =========
                          if (senha2.value != senha1.value) {
                              senha2.classList.remove("sucessoInput")
                              senha2.classList.add("errorInput")
                          } else {
                              senha2.classList.remove("errorInput")
                              // Divisão =========
                              if (endereco.value == '') {
                                  endereco.classList.remove("sucessoInput")
                                  endereco.classList.add("errorInput")
                              } else {
                                  endereco.classList.remove("errorInput")
                                      // Divisão =========
                                      if (cidade.value == '') {
                                          cidade.classList.remove("sucessoInput")
                                          cidade.classList.add("errorInput")
                                      } else {
                                          cidade.classList.remove("errorInput")
                                          // Divisão =========
                                          if (estado.value == 'Escolha...') {
                                              estado.classList.remove("sucessoInput")
                                              estado.classList.add("errorInput")
                                          } else {
                                              estado.classList.remove("errorInput")
                                              // Divisão =========
                                              if (cep.value.length <= 7) {
                                                  cep.classList.remove("sucessoInput")
                                                  cep.classList.add("errorInput")
                                              } else {
                                                  cep.classList.remove("errorInput")
                                                  // Divisão =========
                                                  if (termos.checked == 0) {
                                                      termos.classList.remove("sucessoInput")
                                                      termos.classList.add("errorInput")
                                                  } else {
                                                      termos.classList.remove("errorInput")
                                                      button = window.location.href="../sib-advanced.html"
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
  })

function GerarQrCode() {
	var inputUsuario = document.querySelector('textarea').value;
	var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=';
	var conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputUsuario);
	document.querySelector('#QrCodeImage').src = conteudoQRCode;
}