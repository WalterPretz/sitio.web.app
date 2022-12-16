//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

let botonMostrar = document.getElementById('mostrarPaises');
let botonRegistrar = document.getElementById('guardaRegistro');

agregarMonitores();
//funcion para agregar listeners a los botones
function agregarMonitores() {
    botonRegistrar.addEventListener("click", function(){agregarPais();});
    botonMostrar.addEventListener("click", function(){mostrarPaises();});
}

//funcion que mostrara las paises en la pagina
function mostrarPaises() {
    let paisRes = '';
    for(let i = 0; i < paises.length; i++){
        paisRes += `
        <div class="col-12 col-lg-12 pt-3">
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-sm">
                    <thead class="table-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Capital</th>
                            <th>Idioma</th>
                            <th>Moneda</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${paises[i].nombre}</td>
                            <td>${paises[i].capital}</td>
                            <td>${paises[i].idioma_oficial}</td>
                            <td>${paises[i].moneda}</td>
                        </tr>
                        <tr>
                            <td colspan="4" class="text-center"><img src="${paises[i].bandera}" alt="bandera"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `;
    }
    document.getElementById("paises").innerHTML = paisRes;
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
    let nombrePais = document.getElementById('nombrePais').value;
    let capitalPais = document.getElementById('capitalPais').value;
    let idiomaPais = document.getElementById('idiomaPais').value;
    let monedaPais = document.getElementById('monedaPais').value;
    let banderaPais = document.getElementById('banderaPais').value;

    let country = nombrePais.length;
    let capital = capitalPais.length;
    let idioma = idiomaPais.length;
    let moneda = monedaPais;
    let bandera = banderaPais;

    if(country < 4){
        Swal.fire(
            'Opps',
            'Ingresar el nombre del pais',
            'error'
        )
    }else if(capital < 4){
        Swal.fire(
            'Opps',
            'Ingresar el nombre de la capital',
            'error'
        )
    } else if(idioma < 4){
        Swal.fire(
            'Opps',
            'Ingresar el idioma del pais',
            'error'
        )
    }else if(moneda < 3){
        Swal.fire(
            'Opps',
            'Ingresar el moneda del pais',
            'error'
        )
    }else if(bandera < 10){
        Swal.fire(
            'Opps',
            'Ingresar la url de la bandera del pais',
            'error'
        )
    }else{
        Swal.fire(
            'Excelente',
            'Se ha registrado exitosamente',
            'success'
        );

        let datoIngresado = {
            nombre: nombrePais,
            bandera: banderaPais,
            capital: capitalPais,
            idioma_oficial: idiomaPais,
            moneda: monedaPais,
        }
        paises.unshift(datoIngresado);
        limpiarCampos();
    }
}

function limpiarCampos(){
    document.getElementById('nombrePais').value="";
    document.getElementById('capitalPais').value="";
    document.getElementById('idiomaPais').value="";
    document.getElementById('monedaPais').value="";
    document.getElementById('banderaPais').value="";
}