export function validarEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(typeof email == 'string' && emailRegex.test(email)){
        return true;
    }
    return false;
}

export function validarEmailProfessor(email){
    const emailRegex = /^[\w.-]+@[^.]+\.edu\.br$/;

    if(typeof email == 'string' && emailRegex.test(email)){
        return true;
    }
    return false;
}

export function validarMatricula(matricula){
    const matriculaRegex = /^[a-zA-Z0-9]+$/;

    if(typeof matricula == 'string' && matriculaRegex.test(matricula)){
        return true;
    }
    return false;
}

