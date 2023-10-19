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

    setStateExterno(chave, data){

        this.setState({
            data: data
        })
    }

    buscarLista(filtro) {
        
        const filterRoot = this.props.filterList ? '?' + this.props.filterList : ''
        const urlRoot = process.env.REACT_APP_HOST_API +'/'+ this.props.dominio + encodeURI(filterRoot)
        const charConcat = urlRoot.indexOf('?') >= 0 ? '&' : '?'
        const url = `${urlRoot}${charConcat}${filtro}`

        getApi({ url: url }).then(resp => {

            if (resp){
                
                this.setState({data: resp.data})
                if (this.props.afterGetLista) this.props.afterGetLista(resp, 'data', (chve, dado) => this.setStateExterno(chve, dado))
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

        let letBtnActions = []
        if (this.props.btnEdicao) letBtnActions.push({label: '', labelPopover: "Editar este item", nomeIcone: 'fa-regular fa-pen-to-square', onClick:(item) => { this.props.btnEdicao({id: item.id})}})

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
                    actions={letBtnActions}
                    buttonsAdd={this.props.buttonsAdd}
                />
            </table>
           </>
        )    
    }
    
    render() {
        return (<>

            {this.props.buttonsTop.map((btn, idx) => {
                return  (<div key={'buttonsTop'+idx} className="d-inline p-1">

                            <span className="d-inline-block" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content={btn.labelPopover}>
                                {!btn.isSeparator &&
                                <Button
                                    className={btn.className ? btn.className : 'bg-light text-dark'} 
                                    onClick={() => { btn.onClick() }}><i className={btn.nomeIcone}></i> {btn.label}
                                </Button>}
                                {btn.isSeparator && ' ][ '}
                            </span>

                        </div>)
            })}

            {this.exibirLista()}
            
        </>)
    }
}