class Page {
    constructor(url, title) {
        this._url = url;
        this._title = title;
        this._navegation = null;
    }

    pintarMenuItems() {
        let miDiv = document.createElement("div");
        let row = `<ul class="nav nav-tabs" role="tablist">
                     <li class="active">
                       <a link="home" href="homes" role="tab" data-toggle="tab" class="menu-item">Home</a>
                     </li>
                     <li>
                       <a link="comidas" href="comidas" role="tab" data-toggle="tab" class="menu-item">Comidas</a>
                     </li>
                     <li>
                      <a link="bebidas" href="bebidas" role="tab" data-toggle="tab" class="menu-item">Bebidas</a>
                     </li>
                     <li id="fat-menu" class="navbar-right">
                         <a href="#" id="drop3" role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Dashboard<span class="caret"></span></a>
                          <ul class="dropdown-menu" role="menu" aria-labelledby="drop3">
                            <li role="presentation"><a role="menuitem" tabindex="-1" link="home" href="home" class="menu-item"><img class="icon" alt="" src="http://bbva-moodle.appspot.com/theme/image.php?theme=bbvaboost&amp;component=core&amp;rev=1500551086&amp;image=i%2Fcourse">Dashboard</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" link="usuario" href="usuario" class="menu-item">Usuario</a></li>
                            <li role="presentation" class="divider"></li>
                            <li role="presentation">
                                <a role="menuitem" tabindex="-1" link="logout" href="logout" class="menu-item"><img class="icon " alt="" src="http://bbva-moodle.appspot.com/theme/image.php?theme=bbvaboost&amp;component=core&amp;rev=1500551086&amp;image=a%2Flogout">Log out</a>
                            </li>
                         </ul>
                     </li>
                    </ul>

                    <div id="contenidoCentral">

                    </div>

                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel"></h4>
                          </div>
                          <div class="modal-body">

                            <div id="inputs"> </div>

                          </div>
                            <div id="btoguardar" class="modal-footer"></div>
                        </div>
                      </div>
                    </div>`;

        miDiv.innerHTML = row;

        var misItems = miDiv.querySelectorAll(".menu-item");

        misItems.forEach((menuItem) => {
            var url = menuItem.getAttribute("link");
            menuItem.addEventListener("click", (event) => {
                event.preventDefault();

                $('.nav li.active').removeClass('active');
                var parent = $(this).parent();
                parent.addClass('active');

                console.log("Navegamos a " + url);

                this._navegation.navigateToUrl(url);
            });
        });

        return miDiv;
    }
}

function porID(idInput) {
    var value = document.getElementById(idInput).value;
    return value;
}

function pintarTag(nombre, tipo, vartype, id, varmin, varmax) {
    var anonimoTag = document.createElement(tipo);
    if (tipo == "input") {
        anonimoTag.id = nombre;
        anonimoTag.name = nombre;
        anonimoTag.type = tipo;
        anonimoTag.textContent = nombre;
        anonimoTag.className = "form-control";
        anonimoTag.setAttribute("type", vartype);  
        anonimoTag.setAttribute("min", varmin);
        anonimoTag.setAttribute("max", varmax);
    }
    if (tipo == "label") {
        anonimoTag.textContent = nombre;
    }
    if (tipo == "select" && id == "tipo") {
        let array = ["Entrante", "Principal", "Postre"];
        anonimoTag.className = "form-control";
        anonimoTag.id = nombre;
        anonimoTag.name = nombre;
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            anonimoTag.appendChild(option);
        }
    }
    if (tipo == "select" && id == "esAlcoholica") {
        let array = ["true", "false"];
        anonimoTag.className = "form-control";
        anonimoTag.id = nombre;
        anonimoTag.name = nombre;
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            anonimoTag.appendChild(option);
        }
    }
    document.getElementById("inputs").appendChild(anonimoTag);
}
class Login {
    constructor() {
        this._url = "login";
        this._title = "Login";
    }
    pintar() {
        let row = `<div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                            <input type = "email" class="form-control" id="email" placeholder="Email">
                        </div>
                    </div>
                    <div class = "form-group">
                        <label for = "inputPassword3" class="col-sm-2 control-label"> Password </label>
                            <div class = "col-sm-10">
                                <input type = "password" class="form-control" id ="clave" placeholder="Password">
                                </div> 
                            </div> 
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox"> Remember me </label>
                            </div>
                         </div>
                     </div>
                    <div class = "form-group" >
                         <div class="col-sm-offset-2 col-sm-10" >
                            <div id="btoAceptar"></div>
                        </div>
                    </div>`;

        var form = document.createElement('form');
        form.className = "form-horizontal";
        form.innerHTML = row;
        var btoAceptar = document.createElement('button');
        btoAceptar.id = 'bto';
        btoAceptar.type = 'button';
        btoAceptar.textContent = 'Aceptar';
        btoAceptar.className = "btn btn-primary btn-sm";
        btoAceptar.addEventListener("click", () => this.funcionBtoAceptar());
        var bto = form.querySelector("#btoAceptar");
        bto.appendChild(btoAceptar)
        document.querySelector("BODY").appendChild(form);
    }
    setUsuarioAtlocalStorage(usuario) {
        var usuarioAsString = JSON.stringify(usuario);
        localStorage.setItem("usuario", usuarioAsString);
    }
    funcionBtoAceptar() {
        let email = porID("email");
        let clave = porID("clave");
        let usuario = new Usuario(email, clave);
        this.setUsuarioAtlocalStorage(usuario);

        /* si todo va bien navego home */
        this._navegation.navigateToUrl("home");
    }
    getUsuarioFromlocalStorage() {
        let user = localStorage.getItem("usuario");
        let usuario = JSON.parse(user);
        console.log("usuario : ", usuario);
        return usuario;
    }
    getNombreFromlocalStorage() {
        let nombre = localStorage.getItem("nombre");
        console.log(nombre);
    }
}
class Comida {
    constructor(id, calorias, existencias, nombre, precio, tipo) {
        this._id = id;
        this._calorias = calorias;
        this._existencias = existencias;
        this._nombre = nombre;
        this._precio = precio;
        this._tipo = tipo;
    }

    getpintar(functVer, functEdi, functDel) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');

        var btoVer = document.createElement('button');
        var btoEditar = document.createElement('button');
        var btoBorrar = document.createElement('button');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);

        td6.appendChild(btoVer);
        td7.appendChild(btoEditar);
        td8.appendChild(btoBorrar);

        btoVer.id = 'btoVer';
        btoVer.type = 'button';
        btoVer.textContent = '';
        btoVer.className = "glyphicon glyphicon-search";
        btoVer.dataset.toggle = "modal"
        btoVer.dataset.target = "#myModal"
        btoVer.addEventListener("click", functVer);

        btoEditar.id = 'btoEditar';
        btoEditar.type = 'button';
        btoEditar.textContent = '';
        btoEditar.className = "glyphicon glyphicon-th-list";
        btoEditar.dataset.toggle = "modal"
        btoEditar.dataset.target = "#myModal"
        btoEditar.addEventListener("click", functEdi);

        btoBorrar.id = 'btoBorrar';
        btoBorrar.type = 'button';
        btoBorrar.textContent = '';
        btoBorrar.className = "glyphicon glyphicon-trash";
        btoBorrar.dataset.toggle = "modal"
        btoBorrar.dataset.target = "#myModal"
        btoBorrar.addEventListener("click", functDel);

        td1.textContent = this._calorias;
        td2.textContent = this._existencias;
        td3.textContent = this._nombre;
        td4.textContent = this._precio;
        td5.textContent = this._tipo;
        return tr;
    }
}
class Bebida {
    constructor(id, calorias, esAlcoholica, existencias, grados, nombre, precio) {
        this._id = id;
        this._calorias = calorias;
        this._esAlcoholica = esAlcoholica;
        this._existencias = existencias;
        this._grados = grados;
        this._nombre = nombre;
        this._precio = precio;
    }
    getpintar(functVer, functEdi, functDel) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');
        var td9 = document.createElement('td');

        var btoVer = document.createElement('button');
        var btoEditar = document.createElement('button');
        var btoBorrar = document.createElement('button');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);

        td7.appendChild(btoVer);
        td8.appendChild(btoEditar);
        td9.appendChild(btoBorrar);

        btoVer.id = 'btoVer';
        btoVer.type = 'button';
        btoVer.textContent = '';
        btoVer.className = "glyphicon glyphicon-search";
        btoVer.dataset.toggle = "modal"
        btoVer.dataset.target = "#myModal"
        btoVer.addEventListener("click", functVer);

        btoEditar.id = 'btoEditar';
        btoEditar.type = 'button';
        btoEditar.textContent = '';
        btoEditar.className = "glyphicon glyphicon-th-list";
        btoEditar.dataset.toggle = "modal"
        btoEditar.dataset.target = "#myModal"
        btoEditar.addEventListener("click", functEdi);

        btoBorrar.id = 'btoBorrar';
        btoBorrar.type = 'button';
        btoBorrar.textContent = '';
        btoBorrar.className = "glyphicon glyphicon-trash";
        btoBorrar.dataset.toggle = "modal"
        btoBorrar.dataset.target = "#myModal"
        btoBorrar.addEventListener("click", functDel);

        td1.textContent = this._calorias;
        td2.textContent = this._esAlcoholica;
        td3.textContent = this._existencias;
        td4.textContent = this._grados;
        td5.textContent = this._nombre;
        td6.textContent = this._precio;
        return tr;
    }
}
class Usuario {
    constructor(nombre, apellido, email, usuario, clave, id) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._usuario = usuario;
        this._clave = clave;
        this._id = id;
    }
    getpintar(functVer, functEdi, functDel) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');
        var td9 = document.createElement('td');

        var btoVer = document.createElement('button');
        var btoEditar = document.createElement('button');
        var btoBorrar = document.createElement('button');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);

        td7.appendChild(btoVer);
        td8.appendChild(btoEditar);
        td9.appendChild(btoBorrar);

        btoVer.id = 'btoVer';
        btoVer.type = 'button';
        btoVer.textContent = '';
        btoVer.className = "glyphicon glyphicon-search";
        btoVer.dataset.toggle = "modal"
        btoVer.dataset.target = "#myModal"
        btoVer.addEventListener("click", functVer);

        btoEditar.id = 'btoEditar';
        btoEditar.type = 'button';
        btoEditar.textContent = '';
        btoEditar.className = "glyphicon glyphicon-th-list";
        btoEditar.dataset.toggle = "modal"
        btoEditar.dataset.target = "#myModal"
        btoEditar.addEventListener("click", functEdi);

        btoBorrar.id = 'btoBorrar';
        btoBorrar.type = 'button';
        btoBorrar.textContent = '';
        btoBorrar.className = "glyphicon glyphicon-trash";
        btoBorrar.dataset.toggle = "modal"
        btoBorrar.dataset.target = "#myModal"
        btoBorrar.addEventListener("click", functDel);

        td1.textContent = this._calorias;
        td2.textContent = this._esAlcoholica;
        td3.textContent = this._existencias;
        td4.textContent = this._grados;
        td5.textContent = this._nombre;
        td6.textContent = this._precio;
        return tr;
    }
}
class ApiClient {
    constructor() {}
    get(url) {
        var misCabeceras = new Headers();

        var miInit = {
            method: 'GET',
            headers: misCabeceras
        };

        var promise = fetch(url, miInit).then(
            (response) => {
                return response.json();
            }
        );
        return promise;
    }

    put(uri, data) {
        let url = uri;
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let init = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(data)
        }

        let promise = fetch(url, init).then(
            (response) => {
                return response.json(); // Revisar porque json() regresa una promesa... no un valor??? O_o
            }
        ).catch(
            (error) => {
                console.log(error);
                return error;
            }
        )
        return promise;
    }

    delete(uri, data) {
        let url = uri;
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let init = {
            method: "DELETE",
            headers: headers,
            body: JSON.stringify(data)
        }

        let promise = fetch(url, init).then(
            (response) => {
                return response.json(); // Revisar porque json() regresa una promesa... no un valor??? O_o
            }
        ).catch(
            (error) => {
                console.log(error);
                return error;
            }
        )
        return promise;
    }

    post(uri, data) {
        let url = uri;
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let init = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        }

        let promise = fetch(url, init).then(
            (response) => {
                return response.json(); // Revisar porque json() regresa una promesa... no un valor??? O_o
            }
        ).catch(
            (error) => {
                console.log(error);
                return error;
            }
        )
        return promise;
    }
}
class FoodAPI {
    constructor() {
        this._urlBase = "http://tuabogadodeaccidentes.es/api";
        this._apiClient = new ApiClient();
    }

    getFoods() {
        let urlCompleta = this._urlBase + '/comidas';
        let promise = this._apiClient.get(urlCompleta).then(
            (data) => {
                let arrayComidas = [];
                for (let i = 0; i < data.length; i++) {
                    let elem = data[i];
                    let comida = new Comida(elem._id, elem.calorias, elem.existencias, elem.nombre, elem.precio, elem.tipo);
                    arrayComidas.push(comida);
                }
                return arrayComidas;
            }
        );
        return promise;
    }

    addFood(food) {
        let obj = {
            nombre: food._nombre,
            existencias: food._existencias,
            precio: food._precio,
            calorias: food._calorias,
            tipo: food._tipo
        };
        let urlCompleta = this._urlBase + '/comidas';
        let promise = this._apiClient.post(urlCompleta, obj).then(
            (data) => {
                return data;
            });

        return promise;
    }

    updateFood(food) {
        let obj = this.buildData(food);
        let urlCompleta = this._urlBase + '/comidas/' + food._id;
        let promise = this._apiClient.put(urlCompleta, obj).then(
            (data) => {
                return data;
            }
        )
        return promise;
    }
    deleteFood(id) {
        let urlCompleta = this._urlBase + '/comidas/' + id;
        let promise = this._apiClient.delete(urlCompleta).then(
            (data) => {
                return data;
            }
        )
        return promise;
    }
    buildData(food) {
        let obj = {
            nombre: food._nombre,
            existencias: food._existencias,
            precio: food._precio,
            calorias: food._calorias,
            tipo: food._tipo
        };
        return obj;
    }
}
class DrinkAPI {
    constructor() {
        this._urlBase = "http://tuabogadodeaccidentes.es/api";
        this._apiClient = new ApiClient();
    }

    getDrinks() {
        let urlCompleta = this._urlBase + '/bebidas';
        let promise = this._apiClient.get(urlCompleta).then(
            (data) => {
                let arrayBebidas = [];
                for (let i = 0; i < data.length; i++) {
                    let elem = data[i];
                    let bebida = new Bebida(elem.calorias, elem.esAlcoholica, elem.existencias, elem.grados, elem.nombre, elem.precio);
                    arrayBebidas.push(bebida);
                }
                return arrayBebidas;
            }
        );
        return promise;
    }
    addDrink(drink) {
        let obj = {
            nombre: drink._nombre,
            existencias: drink._existencias,
            esAlcoholica: drink._esAlcoholica,
            precio: drink._precio,
            calorias: drink._calorias,
            grados: drink._grados
        };
        let urlCompleta = this._urlBase + '/bebidas';
        let promise = this._apiClient.post(urlCompleta, obj).then(
            (data) => {
                return data.message;
            });
        return promise;
    }
    updateDrink(bebida) {
        let obj = this.buildData(bebida);
        let urlCompleta = this._urlBase + '/bebidas/' + bebida._id;
        let promise = this._apiClient.put(urlCompleta, obj).then(
            (data) => {
                return data;
            }
        )
        return promise;
    }
    deleteDrink(id) {
        let urlCompleta = this._urlBase + '/bebidas/' + id;
        let promise = this._apiClient.delete(urlCompleta).then(
            (data) => {
                return data;
            }
        )
        return promise;
    }
    buildData(drink) {
        let obj = {
            nombre: drink._nombre,
            existencias: drink._existencias,
            esAlcoholica: drink._esAlcoholica,
            precio: drink._precio,
            grados: drink._grados,
            calorias: drink._calorias,
            tipo: drink._tipo
        };
        return obj;
    }
}
class UserAPI {
    constructor() {
        this._urlBase = "http://formacion-indra-franlindebl.com/api";
        this._apiClient = new ApiClient();
    }

    getUsers() {
        let urlCompleta = this._urlBase + '/users';
        let promise = this._apiClient.get(urlCompleta).then(
            (data) => {
                let arrayUsuarios = [];
                for (let i = 0; i < data.length; i++) {
                    let elem = data[i];
                    let usuario = new Usuario(elem._id, elem.apellidos, elem.email, elem.nombre, elem.username);
                    arrayUsuarios.push(usuario);
                }
                return arrayUsuarios;
            }
        );
        return promise;
    }

    addDrink(drink) {
        let obj = {
            nombre: drink._nombre,
            existencias: drink._existencias,
            esAlcoholica: drink._esAlcoholica,
            precio: drink._precio,
            calorias: drink._calorias,
            grados: drink._grados
        };
        let urlCompleta = this._urlBase + '/bebidas';
        let promise = this._apiClient.post(urlCompleta, obj).then(
            (data) => {
                return data.message;
            });

        return promise;
    }

    updateDrink(bebida) {
        let obj = this.buildData(bebida);
        let urlCompleta = this._urlBase + '/bebidas/' + bebida._id;
        let promise = this._apiClient.put(urlCompleta, obj).then(
            (data) => {
                return data;
            }
        )
        return promise;
    }
    deleteDrink(id) {
        let promise = this._clienteAPI.delete(this._uri, id).then(
            (data) => {
                return data;
            }
        )

        return promise;
    }
    buildData(drink) {
        let obj = {
            nombre: food._nombre,
            existencias: food._existencias,
            precio: food._precio,
            calorias: food._calorias,
            tipo: food._tipo
        };
        return obj;
    }
}
class NavigationController {
    constructor() {
        this._comidas = [];
        this._bebidas = [];
        this._paginas = [];
        this._usuarios = [];
    }

    addPage(page) {
        page._navegation = this;
        this._paginas.push(page);
    }
    gestionContenidos() {
        var autor = document.getElementById('contenidoCentral'),
            links = document.getElementsByTagName('a')
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', this.NavigateToHome, false);
        }
    }
    navigateToHome() {
        console.log(this._paginas[0]);
        this._paginas[0].pintar();
        history.pushState("", this._paginas[0]._title, this._paginas[0]._url);
    }
    navigateToUrl(string) {
        for (let i = 0; i < this._paginas.length; i++) {
            if (string == this._paginas[i]._url) {
                console.log("this._paginas ", this._paginas);
                this._paginas[i].pintar();
                history.pushState("", this._paginas[i]._title, this._paginas[i]._url);
            }
        }
    }
}
class Home extends Page {
    constructor() {
        super("home", "Home");
    }
    pintar() {
        document.body.innerHTML = "";

        let miDivConTabla = document.createElement("div");
        let row = `<table class="table"> 
                    <caption>bienvenido.</caption> 
                        <thead> 
                        </thead> 
                        <tbody>
                        </tbody> 
                        </table>`;
        miDivConTabla.innerHTML = row;

        //row = menuItems("home") + tablesPage();
        var form = document.createElement('form');
        form.className = "form-horizontal";

        document.body.appendChild(this.pintarMenuItems());
        document.body.appendChild(miDivConTabla);
        document.body.appendChild(form);
    }
}
class ComidasPage extends Page {
    constructor(foodApi) {
        super("comidas", "Gestión de comidas");
        this._comidas = [];
        this._foodApi = foodApi;
    }

    pintar() {
        // vaciamos pagina
        document.body.innerHTML = "";
        // Pintar cabecera
        document.body.appendChild(this.pintarMenuItems());

        // Traer datos y pintar 
        this._foodApi.getFoods().then((data) => {
            this._comidas = data;
            this.pintarDatosRecibidos();
        });
    }

    pintarDatosRecibidos() {

        let myDiv = document.createElement("div");
        let capInner = document.createElement("caption");
        capInner.textContent =  " + Comidas ";
        capInner.className = "btn btn-primary btn-small";
        capInner.dataset.toggle = "modal"
        capInner.dataset.target = "#myModal"
        capInner.addEventListener("click", () => this.functAdd());
        myDiv.appendChild(capInner);
        document.body.appendChild(myDiv);


        let tabla = document.createElement("table");
        tabla.className = "table";

        let thead = document.createElement('thead');

        let titulos = ["calorias", "existencias", "nombre", "precio", "tipo"];
        let tr = document.createElement('tr');
        for (let i = 0; i < titulos.length; i++) {
            let th = document.createElement('th');
            th.textContent = titulos[i];
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        tabla.appendChild(thead);

        let tbdy = document.createElement('tbody');
        for (let i = 0; i < this._comidas.length; i++) {
            let comida = this._comidas[i];
            tbdy.appendChild(comida.getpintar(
                () => this.functVer(comida),
                () => this.functEdi(comida),
                () => this.functDel(comida)));
        }
        tabla.appendChild(tbdy);

        document.body.appendChild(tabla);
    }

    functVer(comida) {
        document.getElementById("btoguardar").innerHTML = "";
        document.getElementById("inputs").innerHTML = "";

        this.tagsComidas();

        document.getElementById("calorias").value = comida._calorias;
        document.getElementById("calorias").readOnly = true

        document.getElementById("existencias").value = comida._existencias;
        document.getElementById("existencias").readOnly = true

        document.getElementById("nombre").value = comida._nombre;
        document.getElementById("nombre").readOnly = true

        document.getElementById("precio").value = comida._precio;
        document.getElementById("precio").readOnly = true

        document.getElementById("tipo").value = comida._tipo;
        document.getElementById("tipo").readOnly = true
    }

    functEdi(comida) {
        document.getElementById("btoguardar").innerHTML = "";
        this.tagsComidas();
        document.getElementById("calorias").value = comida._calorias;
        document.getElementById("existencias").value = comida._existencias;
        document.getElementById("nombre").value = comida._nombre;
        document.getElementById("precio").value = comida._precio;
        document.getElementById("tipo").value = comida._tipo;
        document.getElementById("btoguardar").innerHTML = "";
        var btoUpdPost = document.createElement('button');
        btoUpdPost.id = 'ediPost';
        btoUpdPost.type = 'button';
        btoUpdPost.textContent = 'Guardar Cambios';
        btoUpdPost.className = "btn btn-primary";
        btoUpdPost.addEventListener("click", () => this.updPost(comida));
        document.getElementById("btoguardar").appendChild(btoUpdPost)
    }

    functAdd() {
        document.getElementById("inputs").innerHTML = "";
        this.tagsComidas();
        this.cleantagsComidas();
        document.getElementById("btoguardar").innerHTML = "";
        var btoAddPost = document.createElement('button');
        btoAddPost.id = 'addPost';
        btoAddPost.type = 'button';
        btoAddPost.textContent = 'Guardar Cambios';
        btoAddPost.className = "btn btn-primary";
        btoAddPost.addEventListener("click", () => this.addPost());
        document.getElementById("btoguardar").appendChild(btoAddPost)
    }

    functDel(comida) {
        document.getElementById("btoguardar").innerHTML = "";
        document.getElementById("inputs").innerHTML = "";

        this.tagsComidas();

        document.getElementById("calorias").value = comida._calorias;
        document.getElementById("calorias").readOnly = true

        document.getElementById("existencias").value = comida._existencias;
        document.getElementById("existencias").readOnly = true

        document.getElementById("nombre").value = comida._nombre;
        document.getElementById("nombre").readOnly = true

        document.getElementById("precio").value = comida._precio;
        document.getElementById("precio").readOnly = true

        document.getElementById("tipo").value = comida._tipo;
        document.getElementById("tipo").readOnly = true

        document.getElementById("btoguardar").innerHTML = "";
        var btoDel = document.createElement('button');
        btoDel.id = 'delPost';
        btoDel.type = 'button';
        btoDel.textContent = 'Eliminar Registro';
        btoDel.className = "btn btn-primary";
        btoDel.addEventListener("click", () => this.delDelete(comida));
        document.getElementById("btoguardar").appendChild(btoDel)
    }

    delDelete(comida) {
        let food = new Comida();
        food._id = comida._id;
        this._foodApi.deleteFood(food._id).then((data) => {
            this.pintar();
        });
    }

    updPost(comida) {
        let food = new Comida();
        food._id = comida._id;
        food._calorias = document.getElementsByName("calorias")[0].value;
        food._existencias = document.getElementsByName("existencias")[0].value;
        food._nombre = document.getElementsByName("nombre")[0].value;
        food._precio = document.getElementsByName("precio")[0].value;
        food._tipo = document.getElementsByName("tipo")[0].value;
        this._foodApi.updateFood(food).then((data) => {
            //cerrar modal y pintar
            this.pintar();
        });
        console.log(food);
    }

    addPost() {
        let food = new Comida();
        food._calorias = document.getElementsByName("calorias")[0].value;
        food._existencias = document.getElementsByName("existencias")[0].value;
        food._nombre = document.getElementsByName("nombre")[0].value;
        food._precio = document.getElementsByName("precio")[0].value;
        food._tipo = document.getElementsByName("tipo")[0].value;
        this._foodApi.addFood(food).then((data) => {
            //cerrar modal y pintar
            this.pintar();
        });
        console.log(food);
    }


    tagsComidas() {
        document.getElementById("inputs").innerHTML = "";

        pintarTag("calorias", "label");
        pintarTag("calorias", "input", "number", null, 1, 10);

        pintarTag("existencias", "label");
        pintarTag("existencias", "input", "number", null, 1, 10);

        pintarTag("nombre", "label");
        pintarTag("nombre", "input", "text", null, 1, 10);

        pintarTag("precio", "label");
        pintarTag("precio", "input", "number", null, 1, 10);

        pintarTag("tipo", "label");
        pintarTag("tipo", "select", null, "tipo", null, null);
    }

    cleantagsComidas() {
        let inputComida = ["calorias", "existencias", "nombre", "precio"];
        for (let i = 0; i < inputComida.length; i++) {
            document.getElementById(inputComida[i]).value = "";
        }
    }
}
class BebidasPage extends Page {
    constructor(drinkApi) {
        super("bebidas", "Gestión de bebidas");
        this._bebidas = [];
        this._drinkApi = drinkApi;
    }

    pintar() {
        // vaciamos pagina
        document.body.innerHTML = "";
        // Pintar cabecera
        document.body.appendChild(this.pintarMenuItems());

        // Traer datos y pintar 
        this._drinkApi.getDrinks().then((data) => {
            this._bebidas = data;
            this.pintarDatosRecibidos();
        });
    }

    pintarDatosRecibidos() {
        let myDiv = document.createElement("div");
        let capInner = document.createElement("caption");
        capInner.textContent =  " + Bebidas ";
        capInner.className = "btn btn-primary btn-small";
        capInner.dataset.toggle = "modal"
        capInner.dataset.target = "#myModal"
        capInner.addEventListener("click", () => this.functAdd());
        myDiv.appendChild(capInner);
        document.body.appendChild(myDiv);

        let tabla = document.createElement("table");
        tabla.className = "table";

        let thead = document.createElement('thead');

        let titulos = ["calorias", "esAlcoholica", "existencias", "grados", "nombre", "precio"];
        let tr = document.createElement('tr');
        for (let i = 0; i < titulos.length; i++) {
            let th = document.createElement('th');
            th.textContent = titulos[i];
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        tabla.appendChild(thead);

        let tbdy = document.createElement('tbody');
        for (let i = 0; i < this._bebidas.length; i++) {
            let bebida = this._bebidas[i];
            tbdy.appendChild(bebida.getpintar(
                () => this.functVer(bebida),
                () => this.functEdi(bebida),
                () => this.functDel(bebida)));
        }
        tabla.appendChild(tbdy);

        document.body.appendChild(tabla);
    }

    functVer(bebida) {
        document.getElementById("btoguardar").innerHTML = "";
        this.tagBebidas();
        document.getElementById("calorias").value = bebida._calorias;
        document.getElementById("calorias").readOnly = true

        document.getElementById("esAlcoholica").value = bebida._esAlcoholica;
        document.getElementById("esAlcoholica").readOnly = true

        document.getElementById("existencias").value = bebida._existencias;
        document.getElementById("existencias").readOnly = true

        document.getElementById("grados").value = bebida._grados;
        document.getElementById("grados").readOnly = true

        document.getElementById("nombre").value = bebida._nombre;
        document.getElementById("nombre").readOnly = true

        document.getElementById("precio").value = bebida._precio;
        document.getElementById("precio").readOnly = true
    }

    functEdi(bebida) {
        document.getElementById("btoguardar").innerHTML = "";
        this.tagBebidas();
        document.getElementById("calorias").value = bebida._calorias;
        document.getElementById("esAlcoholica").value = bebida._esAlcoholica;
        document.getElementById("existencias").value = bebida._existencias;
        document.getElementById("grados").value = bebida._grados;
        document.getElementById("nombre").value = bebida._nombre;
        document.getElementById("precio").value = bebida._precio;
        var btoUpdPost = document.createElement('button');
        btoUpdPost.id = 'ediPost';
        btoUpdPost.type = 'button';
        btoUpdPost.textContent = 'Guardar Cambios';
        btoUpdPost.className = "btn btn-primary";
        btoUpdPost.addEventListener("click", () => this.updPost(bebida));
        document.getElementById("btoguardar").appendChild(btoUpdPost)
    }
    functAdd() {
        document.getElementById("inputs").innerHTML = "";
        this.tagBebidas();
        this.cleantagsBebidas();
        document.getElementById("btoguardar").innerHTML = "";
        var btoAddPost = document.createElement('button');
        btoAddPost.id = 'addPost';
        btoAddPost.type = 'button';
        btoAddPost.textContent = 'Guardar Cambios';
        btoAddPost.className = "btn btn-primary";
        btoAddPost.addEventListener("click", () => this.addPost());
        document.getElementById("btoguardar").appendChild(btoAddPost)
    }
    functDel(bebida) {
        document.getElementById("btoguardar").innerHTML = "";
        document.getElementById("inputs").innerHTML = "";

        this.tagBebidas();

        document.getElementById("calorias").value = bebida._calorias;
        document.getElementById("calorias").readOnly = true;

        document.getElementById("esAlcoholica").value = bebida._esAlcoholica;
        document.getElementById("esAlcoholica").readOnly = true;

        document.getElementById("existencias").value = bebida._existencias;
        document.getElementById("existencias").readOnly = true;

        document.getElementById("grados").value = bebida._grados;
        document.getElementById("grados").readOnly = true;

        document.getElementById("nombre").value = bebida._nombre;
        document.getElementById("nombre").readOnly = true;

        document.getElementById("precio").value = bebida._precio;
        document.getElementById("precio").readOnly = true;

        document.getElementById("btoguardar").innerHTML = "";
        var btoDel = document.createElement('button');
        btoDel.id = 'delPost';
        btoDel.type = 'button';
        btoDel.textContent = 'Eliminar Registro';
        btoDel.className = "btn btn-primary";
        btoDel.addEventListener("click", () => this.delDelete(bebida));
        document.getElementById("btoguardar").appendChild(btoDel)
    }

    delDelete(bebida) {
        let drink = new Bebida();
        drink._id = bebida._id;
        this._drinkApi.deleteDrink(drink._id).then((data) => {
            this.pintar();
        });
    }

    updPost(bebida) {
        let drink = new Bebida();
        drink._calorias = document.getElementsByName("calorias")[0].value;
        drink._esAlcoholica = document.getElementsByName("esAlcoholica")[0].value;
        drink._existencias = document.getElementsByName("existencias")[0].value;
        drink._grados = document.getElementsByName("grados")[0].value;
        drink._nombre = document.getElementsByName("nombre")[0].value;
        drink._precio = document.getElementsByName("precio")[0].value;
        this._drinkApi.updateDrink(drink).then((data) => {
            this.pintar();
        });
        console.log(bebida);
    }
    addPost() {
        let drink = new Bebida();
        drink._calorias = document.getElementsByName("calorias")[0].value;
        drink._esAlcoholica = document.getElementsByName("esAlcoholica")[0].value;
        drink._existencias = document.getElementsByName("existencias")[0].value;
        drink._grados = document.getElementsByName("grados")[0].value;
        drink._nombre = document.getElementsByName("nombre")[0].value;
        drink._precio = document.getElementsByName("precio")[0].value;
        this._drinkApi.addDrink(drink).then((data) => {
            this.pintar();
        });
        console.log(drink);
    }
    tagBebidas() {
        document.getElementById("inputs").innerHTML = "";
        pintarTag("calorias", "label");
        pintarTag("calorias", "input", "number");

        pintarTag("esAlcoholica", "label");
        pintarTag("esAlcoholica", "select", null, "esAlcoholica");

        pintarTag("existencias", "label");
        pintarTag("existencias", "input", "number");

        pintarTag("grados", "label");
        pintarTag("grados", "input", "number");

        pintarTag("nombre", "label");
        pintarTag("nombre", "input", "text");

        pintarTag("precio", "label");
        pintarTag("precio", "input", "number");
    }
    cleantagsBebidas() {
        let inputBebida = ["calorias", "existencias", "grados", "nombre", "precio"];
        for (let i = 0; i < inputBebida.length; i++) {
            document.getElementById(inputBebida[i]).value = "";
        }
    }
}
class UsuariosPage extends Page {
    constructor(userApi) {
        super("usuario", "Gestión de usuario");
        this._usuarios = [];
        this._userApi = userApi;
    }

    pintar() {
        document.body.innerHTML = "";
        document.body.appendChild(this.pintarMenuItems());
        this._userApi.getUsers().then((data) => {
            this._usuarios = data;
            this.pintarDatosRecibidos();
        });
    }

    pintarDatosRecibidos() {
        let tabla = document.createElement("table");
        tabla.className = "table";

        /*let capInner = document.createElement("caption");
        capInner.textContent = " + Usuarios ";
        capInner.className = "btn btn-primary btn-small";
        capInner.dataset.toggle = "modal"
        capInner.dataset.target = "#myModal"
        capInner.addEventListener("click", () => this.functAdd());
        tabla.appendChild(capInner);*/

        let thead = document.createElement('thead');

        let titulos = ["nombre", "apellido", "emial", "user", "clave"];
        let tr = document.createElement('tr');
        for (let i = 0; i < titulos.length; i++) {
            let th = document.createElement('th');
            th.textContent = titulos[i];
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        tabla.appendChild(thead);

        let tbdy = document.createElement('tbody');
        for (let i = 0; i < this._usuarios.length; i++) {
            let usuario = this._usuarios[i];
            tbdy.appendChild(usuario.getpintar(
                () => this.functVer(usuario),
                () => this.functEdi(usuario),
                () => this.functDel(usuario)));
        }
        tabla.appendChild(tbdy);

        document.body.appendChild(tabla);
    }

    functVer(usuario) {
        document.getElementById("btoguardar").innerHTML = "";
        document.getElementById("inputs").innerHTML = "";

        this.tagsUsuarios();

        document.getElementById("apellido").value = usuario._apellido;
        document.getElementById("apellido").readOnly = true

        document.getElementById("email").value = usuario._email;
        document.getElementById("email").readOnly = true

        document.getElementById("nombre").value = usuario._nombre;
        document.getElementById("nombre").readOnly = true

        document.getElementById("usuario").value = usuario._usuario;
        document.getElementById("usuario").readOnly = true

    }

    functEdi(usuario) {
        document.getElementById("btoguardar").innerHTML = "";
        this.cleantagsUsuarios();
        document.getElementById("calorias").value = comida._calorias;
        document.getElementById("existencias").value = comida._existencias;
        document.getElementById("nombre").value = comida._nombre;
        document.getElementById("precio").value = comida._precio;
        document.getElementById("tipo").value = comida._tipo;
        document.getElementById("btoguardar").innerHTML = "";
        var btoUpdPost = document.createElement('button');
        btoUpdPost.id = 'ediPost';
        btoUpdPost.type = 'button';
        btoUpdPost.textContent = 'Guardar Cambios';
        btoUpdPost.className = "btn btn-primary";
        btoUpdPost.addEventListener("click", () => this.updPost(comida));
        document.getElementById("btoguardar").appendChild(btoUpdPost)
    }

    functAdd() {
        document.getElementById("inputs").innerHTML = "";
        this.tagsComidas();
        this.cleantagsUsuarios();
        document.getElementById("btoguardar").innerHTML = "";
        var btoAddPost = document.createElement('button');
        btoAddPost.id = 'addPost';
        btoAddPost.type = 'button';
        btoAddPost.textContent = 'Guardar Cambios';
        btoAddPost.className = "btn btn-primary";
        btoAddPost.addEventListener("click", () => this.addPost());
        document.getElementById("btoguardar").appendChild(btoAddPost)
    }

    functDel(usuario) {
        document.getElementById("btoguardar").innerHTML = "";
        document.getElementById("inputs").innerHTML = "";

        this.cleantagsUsuarios();

        document.getElementById("calorias").value = comida._calorias;
        document.getElementById("calorias").readOnly = true

        document.getElementById("existencias").value = comida._existencias;
        document.getElementById("existencias").readOnly = true

        document.getElementById("nombre").value = comida._nombre;
        document.getElementById("nombre").readOnly = true

        document.getElementById("precio").value = comida._precio;
        document.getElementById("precio").readOnly = true

        document.getElementById("tipo").value = comida._tipo;
        document.getElementById("tipo").readOnly = true

        document.getElementById("btoguardar").innerHTML = "";
        var btoDel = document.createElement('button');
        btoDel.id = 'delPost';
        btoDel.type = 'button';
        btoDel.textContent = 'Eliminar Registro';
        btoDel.className = "btn btn-primary";
        btoDel.addEventListener("click", () => this.delDelete(comida));
        document.getElementById("btoguardar").appendChild(btoDel)
    }

    delDelete(usuario) {
        let food = new Comida();
        food._id = comida._id;
        this._foodApi.deleteFood(food._id).then((data) => {
            this.pintar();
        });
    }

    updPost(usuario) {
        let food = new Comida();
        food._id = comida._id;
        food._calorias = document.getElementsByName("calorias")[0].value;
        food._existencias = document.getElementsByName("existencias")[0].value;
        food._nombre = document.getElementsByName("nombre")[0].value;
        food._precio = document.getElementsByName("precio")[0].value;
        food._tipo = document.getElementsByName("tipo")[0].value;
        this._foodApi.updateFood(food).then((data) => {
            this.pintar();
        });
        console.log(food);
    }

    addPost() {
        let food = new Comida();
        food._calorias = document.getElementsByName("calorias")[0].value;
        food._existencias = document.getElementsByName("existencias")[0].value;
        food._nombre = document.getElementsByName("nombre")[0].value;
        food._precio = document.getElementsByName("precio")[0].value;
        food._tipo = document.getElementsByName("tipo")[0].value;
        this._foodApi.addFood(food).then((data) => {
            this.pintar();
        });
        console.log(food);
    }


    tagsUsuarios() {
        document.getElementById("inputs").innerHTML = "";

        pintarTag("nombre", "label");
        pintarTag("nombre", "input");

        pintarTag("apellido", "label");
        pintarTag("apellido", "input");

        pintarTag("usuario", "label");
        pintarTag("usuario", "input");

        pintarTag("email", "label");
        pintarTag("email", "input");
    }

    cleantagsUsuarios() {
        let inputUsuario = ["nombre", "apellido", "usuario", "email"];
        for (let i = 0; i < inputUsuario.length; i++) {
            document.getElementById(inputUsuario[i]).value = "";
        }
    }
}
class Main {
    constructor() {
        this._foodApi = new FoodAPI();
        this._drinkApi = new DrinkAPI();
        this._userApi = new UserAPI();
        this._navegation = new NavigationController();

        let login = new Login();
        let home = new Home();
        let comidas = new ComidasPage(this._foodApi);
        let bebidas = new BebidasPage(this._drinkApi);
        let usuarios = new UsuariosPage(this._userApi);

        this._navegation.addPage(login);
        this._navegation.addPage(home);
        this._navegation.addPage(comidas);
        this._navegation.addPage(bebidas);
        this._navegation.addPage(usuarios);

        this._navegation.navigateToHome();
    }

    cargaInicial() {

    }
}
let miGestion = null;
window.onload = () => {
    var miGestion = new Main();
    miGestion.cargaInicial();
}