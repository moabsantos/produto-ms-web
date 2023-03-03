export default function formataNumero(props){


    if (props.format.substr(0, 3) === 'c0,'){
        
        const valor = props.valor.toString().split('.');
        const cFormat = props.format.split(',');
        valor[1] = valor[1].substr(1, cFormat[1])

        return valor[0] + ',' + valor[1]
    }
}