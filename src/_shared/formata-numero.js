export default function formataNumero(props){


    if (props.format.substr(0, 3) === 'c0,'){
        
        let valor = props.valor.toString();

        if ( valor.indexOf(',') >= 0){
            valor = valor.split(',');
        }else{
            valor = valor.split('.');
        }
        
        const cFormat = props.format.split(',');

        if (!valor[1]) valor[1] = '0'
        valor[1] = valor[1].toString()

        while (valor[1].length < cFormat[1]) {
            valor[1] = valor[1] + '0'
        }



        if (valor[1]) valor[1] = valor[1].substr(0, cFormat[1])

        return valor[0] + ',' + valor[1]
    }

    if (props.format === 'c0.'){
        let valor = props.valor.toString();

        if ( valor.indexOf('.') >= 0){
            valor = valor.replaceAll('.', '')
        }

        if ( valor.indexOf(',') >= 0){
            valor = valor.replaceAll(',', '.')
        }

        return valor
    }
}