import React from 'react';
import { Button } from 'react-bootstrap';
import getApi from '../_shared/req-get-http';

export default class MyTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: ''
        };
    }

    changeFilterTable(filtro){

        this.buscarLista(filtro)
    }

    buscarLista(filtro) {
        const url = `${process.env.REACT_APP_HOST_API}/${this.props.dominio}?${filtro}`

        getApi({ url: url }).then(resp => this.setState({data: resp.data}))
    }

    componentDidMount(){

        let filter = ''
        if (this.props.defaultFilter)
            filter = this.props.defaultFilter
        this.buscarLista(filter)
    }

    handlerIdRow = (selectedRow) => {
        
    }

    exibirLista(){
        return (
            <div>
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            {this.props.headers}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data && this.state.data.map(item => {
                            return <tr key={item.id} onClick={() => this.handlerIdRow(item.id)}>
                                <th scope="row">{item.id}</th>

                                {this.props.getItems({item: item})}

                                <td>
                                <div className="d-inline p-2"><Button className='bg-light text-dark' onClick={() => { this.props.btnEdicao({id: item.id}) }}>Editar</Button></div>
                                { 1==2 ? (<div className="d-inline p-2"><Button className='bg-light text-dark' onClick={() => this.props.btnVisualizacao({id: item.id})}>Visualizar</Button></div>) : (<></>)}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
    
    render() {
        return (<>
            <Button onClick={() => this.props.btnInclusao()}>Incluir</Button>
            {this.exibirLista()}
        </>)
    }
}