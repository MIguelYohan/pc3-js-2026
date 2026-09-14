class Conversor{

    celciusParaFahrenheit(celcius){
        return (9/5) * celcius + 32;
    }

    quilometrosParaMilhas(km){
        return km * 0.621371;
    }

    minutosParaHoras(min){
        return min / 60;
    }
}

export {Conversor};