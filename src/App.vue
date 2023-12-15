<template>
  <div id="app" class="container mt-3">
    <h3>Dados Pessoais</h3>
    <hr>
    <form>
      <div class="row">

        <div class="col-sm-12 col-md-6 col-lg-5">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nome completo</label>
            <input type="text" required class="form-control" id="exampleFormControlInput1" placeholder="Ex: meu nome">
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-5">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">E-mail</label>
            <input type="email" class="form-control" required id="exampleFormControlInput1" placeholder="Ex:teste@gmail.com">
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-2">
          <h5>Status</h5>
          <div class="d-flex">
            <div class="form-check me-3">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                Activo
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                Inactivo
              </label>
            </div>
          </div>

        </div>

      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Telefone</label>
            <input type="text" class="form-control" required id="exampleFormControlInput1" placeholder="Ex:(+244) 938 893 435">
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Senha</label>
            <input type="password" class="form-control" required id="exampleFormControlInput1" placeholder="Ex:****">
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-5">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Data de nasciment</label>
            <input type="date" class="form-control" required id="exampleFormControlInput1" placeholder="Ex:(+244) 938 893 435">
          </div>
        </div>
      </div>
      <h3 class="mt-2">Morada</h3>
      <hr>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Pais</label>
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">Angola</option>
              <option value="2">Portugal</option>
              <option value="3">Brasil</option>
              <option value="3">Moçambique</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Municipio</label>
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">Bellas</option>
              <option value="2">Viana</option>
              <option value="3">Icolo Ibengo</option>
              <option value="3">Cazenga</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Provincia</label>
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">Luanda</option>
              <option value="2">Malange</option>
              <option value="3">K.sul</option>
              <option value="3">K.Norte</option>
            </select>
          </div>
        </div>
      </div>
      <h3 class="mt-2">Anexos</h3>
      <hr>
      <div class="row">
        <div class="col-sm-12 col-lg-7 col-md-12">
          <div class="mb-3">
            <label for="formFile" class="form-label">Carregar um arquivo</label>
            <input class="form-control" type="file" id="formFile">
          </div>
        </div>
        <div class="col-sm-12 mt-3">
          <button type="button" class="btn btn-warning me-3">Limpar</button>
          <button type="button" class="btn btn-primary">Cadastrar</button>
        </div>
      </div>
    </form>
    <div class="card mt-4">
      <div class="card-header">
        LISTAGEM
      </div>
      <div class="card-body table-responsive">
        <table class="table table-striped table-bordered ">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Data nascimento</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Maria Paulo</th>
              <td>teste@gmil.com</td>
              <td>(+244) 923 456 3452</td>
              <td>20/12/1996</td>
              <td>
                <a class="btn btn-primary me-2" href="#" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</a>
                <a class="btn btn-danger" href="#" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">Eliminar</a>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">EDITAR DADS</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="row">

                            <div class="col-sm-12 col-md-6 col-lg-6">
                              <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nome completo</label>
                                <input type="text" required class="form-control" id="exampleFormControlInput1" placeholder="Ex: meu nome">
                              </div>
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-6">
                              <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">E-mail</label>
                                <input type="email" class="form-control" required id="exampleFormControlInput1" placeholder="Ex:teste@gmail.com">
                              </div>
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-6">
                              <h5>Status</h5>
                              <div class="d-flex">
                                <div class="form-check me-3">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                  <label class="form-check-label" for="flexRadioDefault1">
                                    Activo
                                  </label>
                                </div>

                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                  <label class="form-check-label" for="flexRadioDefault2">
                                    Inactivo
                                  </label>
                                </div>
                              </div>

                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                              <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Telefone</label>
                                <input type="text" class="form-control" required id="exampleFormControlInput1" placeholder="Ex:(+244) 938 893 435">
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                              <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Senha</label>
                                <input type="password" class="form-control" required id="exampleFormControlInput1" placeholder="Ex:****">
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                              <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Data de nascimento</label>
                                <input type="date" class="form-control" required id="exampleFormControlInput1" placeholder="Ex:(+244) 938 893 435">
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                              <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Pais</label>
                                <select class="form-select" aria-label="Default select example">
                                  <option selected></option>
                                  <option value="1">Angola</option>
                                  <option value="2">Portugal</option>
                                  <option value="3">Brasil</option>
                                  <option value="3">Moçambique</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                              <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Municipio</label>
                                <select class="form-select" aria-label="Default select example">
                                  <option selected></option>
                                  <option value="1">Bellas</option>
                                  <option value="2">Viana</option>
                                  <option value="3">Icolo Ibengo</option>
                                  <option value="3">Cazenga</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                              <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Provincia</label>
                                <select class="form-select" aria-label="Default select example">
                                  <option selected></option>
                                  <option value="1">Luanda</option>
                                  <option value="2">Malange</option>
                                  <option value="3">K.sul</option>
                                  <option value="3">K.Norte</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-sm-12 col-lg-6 col-md-12">
                              <div class="mb-3">
                                <label for="formFile" class="form-label">Carregar um arquivo</label>
                                <input class="form-control" type="file" id="formFile">
                              </div>
                            </div>

                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Cadastrar</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header bg-danger">
                        <h5 class="modal-title text-white" id="exampleModalLabel">EXCLUIR DADOS</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <h5 class="text-center">Tens a certeza que deseja excluir?</h5>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>

              </td>
            </tr>
            <tr>
              <th scope="row">Adriana Mariana</th>
              <td>adriana@gmil.com</td>
              <td>(+244) 923 456 3452</td>
              <td>20/12/1996</td>
              <td>
                <a class="btn btn-primary me-2" href="#" role="button">Editar</a>
                <a class="btn btn-danger" href="#" role="button">Eliminar</a>
              </td>
            </tr>
            <tr>
              <th scope="row">Delton Marcos</th>
              <td>delton@gmil.com</td>
              <td>(+244) 923 456 3452</td>
              <td>20/12/1996</td>
              <td>
                <a class="btn btn-primary me-2" href="#" role="button">Editar</a>
                <a class="btn btn-danger" href="#" role="button">Eliminar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App'
}
</script>
