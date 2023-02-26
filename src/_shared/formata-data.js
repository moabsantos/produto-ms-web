export default function formataData(props){

    if (!props.format){
        const data = props.data.split('T');
        const parts = data[0].split('-');
        return parts[2]+'/'+parts[1]+'/'+parts[0]
    }

    if (props.format === 'api-date'){
        const parts = props.data.split('/');
        return parts[2]+'-'+parts[1]+'-'+parts[0]
    }

    if (props.format === 'date'){
        const data = ((new Date()).toISOString()).split('T')
        return data[0]
    }

    if (props.format === 'new-date-user'){
        const data = ((new Date()).toISOString()).split('T')
        const parts = data[0].split('-');
        return parts[2]+'/'+parts[1]+'/'+parts[0]
    }

    if (props.format === 'new-date-json'){
        const data = ((new Date()).toISOString()).split('T')
        const parts = data[0].split('-');
        return {
            dia: parts[2],
            mes: parts[1],
            ano: parts[0]
        }
    }
}