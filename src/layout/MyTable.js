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
        
        const filterRoot = this.props.filterList ? '?' + this.props.filterList : ''
        const urlRoot = process.env.REACT_APP_HOST_API +'/'+ this.props.dominio + encodeURI(filterRoot)
        const charConcat = urlRoot.indexOf('?') >= 0 ? '&' : '?'
        const url = `${urlRoot}${charConcat}${filtro}`

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
                    buttonsAdd={this.props.buttonsAdd}
                />
            </table>
           </>
        )    
    }
    
    render() {
        return (<>

            {this.props.buttonsTop.map((btn, idx) => {
                return  <Button key={'buttonsTop'+idx}
                            className='bg-light text-dark' 
                            onClick={() => { btn.onClick() }}>
                                {btn.label}
                        </Button>
            })}

            {this.exibirLista()}
            
        </>)
    }
}