import postApi from '../_shared/req-post-http';

export default function MyFormSubmit(props){
    
    async function submit(event){

        event.preventDefault();
      
        let body = props.bodyBase

        props.fieldsForm.forEach(element => {
            if (event.target.elements[element]){
                body[element] = event.target.elements[element].value
            }else{
                alert(element + ' não encontrado no form')
            }
                
        });

        if (props.bodyFormated){
            body = props.bodyFormated(body)
        }

        postApi({
            url: `${process.env.REACT_APP_HOST_API}/${props.dominio}`,
            body: body
        }).then(() => {
            props.callBusca()
        })
  
    }

    return ( props.getForm({
        onSubmit: (sender) => {submit(sender)},
        callBusca: () => props.callBusca()
    }) )
}