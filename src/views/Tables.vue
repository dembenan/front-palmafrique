<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Data Tables</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small overflow-hidden mb-4">
          <div class=" border-bottom bg-success">
            <div class="col-sm-6">
              <a href="#addSite" class="btn btn-light m-2"  data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Ajouter</span></a>
              <a href="#deleteDirecteur" class="btn btn-danger m-1" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Suprimer tous</span></a>							
            </div>

            <button style="float:right;" class="btn btn-secondary" onclick="printDiv('printableArea')"><i class="fa fa-print" aria-hidden="true" style="font-size: 17px; "> Imprimer</i></button>
          </div>
          
    <!-- Edit Modal HTML -->
          <div id="addSite" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <form>
                  <div class="modal-header">						
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div class="modal-body">					
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control" required>
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" required>
                    </div>
                    <div class="form-group">
                      <label>Address</label>
                      <textarea class="form-control" required></textarea>
                    </div>
                    <div class="form-group">
                      <label>Phone</label>
                      <input type="text" class="form-control" required>
                    </div>					
                  </div>
                  <div class="modal-footer">
                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                    <input type="submit" class="btn btn-success" value="Add">
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="card-body p-0 pb-3 text-center ">
            <div class="title">
            <h6 class="m-0 m-2">Liste element</h6>

            </div>

            <table class="table table-striped  mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">First Name</th>
                  <th scope="col" class="border-0">Last Name</th>
                  <th scope="col" class="border-0">Country</th>
                  <th scope="col" class="border-0">City</th>
                  <th scope="col" class="border-0">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Russian Federation</td>
                  <td>Gdańsk</td>
                  <td>107-0339</td>
                  <td>
                      <a href="#viewModal" class="m-1"  data-toggle="modal"><i class="fas fa-eye" ></i></a>							
                      <a href="#editModal" class="m-1"   data-toggle="modal"><i class="fas fa-edit"></i></a>
                      <a href="#editModal" class="m-1"  data-toggle="modal"><i class="fas fa-trash-alt"></i></a>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

     

    <!-- Default Dark Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small overflow-hidden mb-4">
           <div class=" border-bottom bg-success">
            <div class="col-sm-6">
              <a href="#addSite" class="btn btn-light m-2 "  data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Ajouter</span></a>
              <a href="#deleteDirecteur" class="btn btn-danger m-1 " data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Suprimer tous</span></a>							
            </div>

            <button style="float:right;" class="btn btn-secondary" onclick="printDiv('printableArea')"><i class="fa fa-print" aria-hidden="true" style="font-size: 17px; "> Imprimer</i></button>
          </div>

    <!-- Edit Modal HTML -->
          <div id="addDirecteur" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <form>
                  <div class="modal-header">						
                    <h4 class="modal-title">Ajouter une Derection</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div class="modal-body">					
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control" required>
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" required>
                    </div>
                    <div class="form-group">
                      <label>Address</label>
                      <textarea class="form-control" required></textarea>
                    </div>
                    <div class="form-group">
                      <label>Phone</label>
                      <input type="text" class="form-control" required>
                    </div>					
                  </div>
                  
                  <div class="modal-footer">
                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                    <input type="submit" class="btn btn-success" value="Add">
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="card-body p-0 pb-3  text-center">
            <h6 class="m-0 m-2">Liste element</h6>

            <table class="table table-striped  mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">First Name</th>
                  <th scope="col" class="border-0">Last Name</th>
                  <th scope="col" class="border-0">Country</th>
                  <th scope="col" class="border-0">City</th>
                  <th scope="col" class="border-0">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Russian Federation</td>
                  <td>Gdańsk</td>
                  <td>107-0339</td>
                  <td>
                      <a href="#viewModal" class="m-1"  data-toggle="modal"><i class="fas fa-eye" ></i></a>							
                      <a href="#editModal" class="m-1"   data-toggle="modal"><i class="fas fa-edit"></i></a>
                      <a href="#editModal" class="m-1"  data-toggle="modal"><i class="fas fa-trash-alt"></i></a>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


    <!-- Default Dark Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small overflow-hidden mb-4">
           <div class=" border-bottom bg-success">
            <div class="col-sm-6">
              <a href="#addSite" class="btn btn-light m-2 "  data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Ajouter</span></a>
              <a href="#deleteDirecteur" class="btn btn-danger m-1 " data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Suprimer tous</span></a>							
            </div>

            <button style="float:right;" class="btn btn-secondary" onclick="printDiv('printableArea')"><i class="fa fa-print" aria-hidden="true" style="font-size: 17px; "> Imprimer</i></button>
          </div>

    <!-- Edit Modal HTML -->
          <div id="addDirecteur" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <form>
                  <div class="modal-header">						
                    <h4 class="modal-title">Ajouter une Derection</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div class="modal-body">					
                   				
                  </div>
                  
                  <div class="modal-footer">
                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                    <input type="submit" class="btn btn-success" value="Add">
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="card-body p-0 pb-3  text-center">
            <h6 class="m-0 m-2">Liste element</h6>

            <table class="table table-striped  mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">First Name</th>
                  <th scope="col" class="border-0">Last Name</th>
                  <th scope="col" class="border-0">Country</th>
                  <th scope="col" class="border-0">City</th>
                  <th scope="col" class="border-0">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Russian Federation</td>
                  <td>Gdańsk</td>
                  <td>107-0339</td>
                  <td>
                      <a href="#viewModal" class="m-1"  data-toggle="modal"><i class="fas fa-eye" ></i></a>							
                      <a href="#editModal" class="m-1"   data-toggle="modal"><i class="fas fa-edit"></i></a>
                      <a href="#editModal" class="m-1"  data-toggle="modal"><i class="fas fa-trash-alt"></i></a>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


    <!-- Default Dark Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small overflow-hidden mb-4">
           <div class=" border-bottom bg-success">
            <div class="col-sm-6">
              <a href="#add" class="btn btn-light m-2 "  data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Ajouter</span></a>
              <a href="#deleteDirecteur" class="btn btn-danger m-1 " data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Suprimer tous</span></a>							
            </div>

            <button style="float:right;" class="btn btn-secondary" onclick="printDiv('printableArea')"><i class="fa fa-print" aria-hidden="true" style="font-size: 17px; "> Imprimer</i></button>
          </div>

    <!-- Edit Modal HTML -->
          <div id="add" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <form>
                  <div class="modal-header">						
                    <h4 class="modal-title">Ajouter une Derection</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div class="modal-body">					
                    <!-- Form Validation -->
                  <d-col >
                    <d-form validated>
                      
                      <div class="row">
                          <div class="form-group col-md-12">
                            <d-input placeholder="Username" required />
                            <d-form-invalid-feedback>The username is taken.</d-form-invalid-feedback>
                          </div>
                          <div class="form-group col-md-12">
                            <d-input placeholder="Username" required />
                            <d-form-invalid-feedback>The username is taken.</d-form-invalid-feedback>
                          </div>
                          <div class="form-group col-md-12">
                            <d-input placeholder="Username" required />
                            <d-form-invalid-feedback>The username is taken.</d-form-invalid-feedback>
                          </div>
                          <div class="form-group col-md-12">
                            <d-select required>
                              <option>Choose</option>
                              <option>...</option>
                            </d-select>
                            <d-form-invalid-feedback>Please select your state</d-form-invalid-feedback>
                          </div>
                      </div>
                      
                    </d-form>
                  </d-col>				
                  </div>
                  
                  <div class="modal-footer">
                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                    <input type="submit" class="btn btn-success" value="Add">
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="card-body p-0 pb-3  text-center">
            <h6 class="m-0 m-2">Liste element</h6>

            <table class="table table-striped  mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">First Name</th>
                  <th scope="col" class="border-0">Last Name</th>
                  <th scope="col" class="border-0">Country</th>
                  <th scope="col" class="border-0">City</th>
                  <th scope="col" class="border-0">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Russian Federation</td>
                  <td>Gdańsk</td>
                  <td>107-0339</td>
                  <td>
                      <a href="#viewModal" class="m-1"  data-toggle="modal"><i class="fas fa-eye" ></i></a>							
                      <a href="#editModal" class="m-1"   data-toggle="modal"><i class="fas fa-edit"></i></a>
                      <a href="#editModal" class="m-1"  data-toggle="modal"><i class="fas fa-trash-alt"></i></a>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h6{
  text-transform: uppercase;
  font-weight: bold;
}
</style>
