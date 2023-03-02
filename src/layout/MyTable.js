import React from 'react';
import { Button } from 'react-bootstrap';
import getApi from '../_shared/req-get-http';

import MyTableHead from './MyTableHead';
import MyTableBody from './MyTableBody';

export default class MyTable extends React.Component {

    constructor(props) {
        super(props);

        this.columns = props.columns

        this.state = {
            filter: '',
            data: []
        };
    }

    handleSorting = (sortField, sortOrder) => {
        if (sortField) {

         const sorted = [...this.state.data].sort((a, b) => {
    
            if (a[sortField] === null) return 1;
            if (b[sortField] === null) return -1;
            if (a[sortField] === null && b[sortField] === null) return 0;
            return (
             a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
              numeric: true,
             }) * (sortOrder === "asc" ? 1 : -1)
            );
           });
    
         this.setState({data: sorted})
    
        }
       };

    changeFilterTable(filtro){

        this.buscarLista(filtro)
    }

    buscarLista(filtro) {
        const url = `${process.env.REACT_APP_HOST_API}/${this.props.dominio}?${filtro}`

        getApi({ url: url }).then(resp => {
            if (resp){
                this.setState({data: resp.data})
            }
        })
    }

    componentDidMount(){

        let filter = ''
        if (this.props.defaultFilter)
            filter = this.props.defaultFilter
        this.buscarLista(filter)
    }

    handlerIdRow = (selectedRow) => {
        
    }

    exibirLista1(){
        return (
            <div className="table_container">
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

    exibirLista(){
        return (
            <>
            <table className="table">
                <caption>
                    Caption of Table.
                </caption>

                <MyTableHead 
                    columns={this.columns} 
                    handleSorting={this.handleSorting} />

                <MyTableBody 
                    columns={this.columns} 
                    tableData={this.state.data}
                    actions={
                        [
                            {label: 'Editar', onClick:(item) => { this.props.btnEdicao({id: item.id})}}
                        ]
                    } 
                />
            </table>
           </>
        )    
    }
    
    render() {
        return (<>
            <Button onClick={() => this.props.btnInclusao()}>Incluir</Button>
            {this.exibirLista()}
        </>)
    }
}