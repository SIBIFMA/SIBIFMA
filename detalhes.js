if(nome1.value == '') {
    nome1.classList.remove("sucessoInput")
    nome1.classList.add("errorInput")
  }else {
    nome1.classList.remove("errorInput")
    // Divisão ==========
    if(cpf.value == '' || cpf.value.length <= 10 || cpf.value.length >= 13 || cpf.value != int) {
    cpf.classList.remove("sucessoInput")
    cpf.classList.add("errorInput")
    } else {
      cpf.classList.remove("errorInput")
      // Divisão ==========
      if(email.value == '') {
      email.classList.remove("sucessoInput")
      email.classList.add("errorInput")
    } else {
      if (email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1 || (email.value.indexOf(".com") - email.value.indexOf("@") == 1)) {
          email.classList.remove("sucessoInput")  
          email.classList.add("errorInput")
        }else {
            email.classList.add("sucessoInput")
            // Divisão ==========
            if(password.value == '') {
              password.classList.remove("sucessoInput")
                password.classList.add("errorInput")
            } else {
              if (password.value.length <= 4) {
                  password.classList.remove("sucessoInput")
                  password.classList.add("errorInput")
                }else {
                    password.classList.add("sucessoInput")
                    // Divisão ==========
                    if(endereco.value == '') {
                      endereco.classList.remove("sucessoInput")
                        endereco.classList.add("errorInput")
                    }else {
                        endereco.classList.add("sucessoInput")
                        // Divisão ==========
                        if(turma.value == 'Turma') {
                          turma.classList.remove("sucessoInput")
                            turma.classList.add("errorInput")
                        }else {
                            turma.classList.remove("errorInput")
                            //Divisão ==========
                            if(cidade.value == '') {
                              cidade.classList.remove("sucessoInput")
                                cidade.classList.add("errorInput")
                            }else {
                              cidade.classList.add("sucessoInput")
                              //Divisão ==========
                              if(estado.value == 'Selecione...') {
                                estado.classList.remove("sucessoInput")
                                estado.classList.add("errorInput")
                              }else {
                                estado.classList.remove("errorInput")
                                if(cep.value.length <= 7) {
                                    cep.classList.remove("sucessoInput")
                                    cep.classList.add("errorInput")
                                }else {
                                  cep.classList.add("sucessoInput")
                                  //Divisão ==========
                                  if(check.checked == 0) {
                                      check.classList.add("errorInput")
                                  }else {
                                    check.classList.remove("errorInput")
                                    button = window.location.href="index.html"
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
    }