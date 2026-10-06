function validarEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(typeof email == 'string' && emailRegex.test(email)){
        return true;
    }
    return false;
}

function validarEmailProfessor(email){
    const emailRegex = /^[\w.-]+@[^.]+\.edu\.br$/;

    if(typeof email == 'string' && emailRegex.test(email)){
        return true;
    }
    return false;
}
function validarMatricula(matricula){
    const matriculaRegex = /^[a-zA-Z0-9]+$/;

    if(typeof matricula == 'string' && matriculaRegex.test(matricula)){
        return true;
    }
    return false;
}

function mostrarDados(obj) {
    let relatorio = `Nome: ${obj.getNome()} | Email: ${obj.getEmail()}`;
    if (typeof obj.getMatricula === 'function') {
        relatorio += ` | Matricula: ${obj.getMatricula()}`;
    }
    console.log(relatorio);
}

module.exports = { validarEmail, validarEmailProfessor, validarMatricula, mostrarDados};