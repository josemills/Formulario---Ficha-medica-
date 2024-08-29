let registros = []

    function guardarRegistro() {
        const rut = document.getElementById("rut").value;
        const nombres = document.getElementById("nombres").value;
        const apellidos = document.getElementById("apellidos").value;
        const direccion = document.getElementById("direccion").value;
        const ciudad = document.getElementById("ciudad").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;
        const estadoCivil = document.getElementById("estadoCivil").value;
        const comentarios = document.getElementById("comentarios").value;

        const nuevoRegistro = {

            rut,
            nombres,
            apellidos,
            direccion,
            ciudad,
            telefono,
            email,
            fechaNacimiento,
            estadoCivil,
            comentarios
        };

        const indice = registros.findIndex(reg => reg.apellidos.toLowerCase() === apellidos.toLowerCase());

        if (indice !== -1) {
            if (confirm("Ya existe un registro con este apellido. ¿Desea sobrescribirlo?")) {
                registros[indice] = nuevoRegistro;
                alert("Registro actualizado correctamente.");
            } else {
                alert("Operación cancelada.");
            }
        } else {
            registros.push(nuevoRegistro);
            alert("Registro guardado correctamente.");
        }

        limpiarFormulario();
    }

    function limpiarFormulario() {
        document.getElementById("medicalForm").reset();
    }

    function cerrarFormulario() {
        if (confirm("¿Está seguro que desea cerrar el formulario?")) {
            window.close();
        }
    }

    function buscarPorApellido() {
        const apellidoBuscar = prompt("Ingrese el apellido para buscar:");
        const resultado = registros.filter(reg => reg.apellido.toLowerCase() === apellidoBuscar.toLowerCase());

        if (resultado.length > 0) {
            alert("Registro encontrado:\n" + JSON.stringify(resultado[0], null, 2));
        } else {
            alert("No se encontró ningún registro con ese apellido.");
        }
    }     
