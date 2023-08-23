import React from 'react';
import MyFormSubmit from './MyFormSubmit';
import MyTabsForm from './MyTabsForm';
  
const MyFormBase = ({ idMaster, tituloForm, dominio, dominioEdicao, filterDefault, filterList, headForm, buttonsTop, columnsTable, buttonsAdd, bodyBase, bodyFormated, fieldsForm, LocalForm, removeInclusao, removeEdicao, FormFilter, FormView }) => {

  bodyBase = bodyBase ? bodyBase : {}

  return (
    <>
      <h4 className='p-3'>
        <u>{ tituloForm }</u>
      </h4>

      <div className='p-3'>
        <table className="table table-bordered">
          <thead>
            <tr>
            {headForm && headForm.map((h, index) => (
                <th key={"head"+ dominio + index}>
                    {h.key}
                </th>
            ))}
            </tr>
          </thead>

          <tbody>
            <tr>
            {headForm && headForm.map((h, index) => (
                <td key={"body"+ dominio + index}>
                    {h.value}
                </td>
            ))}
            </tr>
          </tbody>

        </table>
      </div>

      <MyTabsForm
        dominio={dominio}
        filterList={filterList ? filterList : ''}
        buttonsTop={buttonsTop}
        defaultFilter={filterDefault ? filterDefault : ''}
        filter={FormFilter ? (params) => FormFilter({dataFilter: params.dataFilter})  : ''}
        dominioMaster={''}

        columns={columnsTable}

        add={removeInclusao ? null : (params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: {
            ...bodyBase
          }, 
          fieldsForm:fieldsForm,
          callBusca: () => params.callBusca(),
          bodyFormated: (par) => { 
            if(bodyFormated) return bodyFormated(par)
            if(!bodyFormated) return par 
          },
          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } } 
                idMaster={ idMaster }
                callBusca={ () => par.callBusca() }
                dataForm={ params.dataForm } 
            />
          )
        })}
        
        edit={removeEdicao ? null : (params) => MyFormSubmit({ 
          dominio: dominioEdicao ? dominioEdicao : dominio, 
          bodyBase: { 
            id: params.id,
            ...bodyBase 
          }, 
          fieldsForm:fieldsForm, 
          callBusca: () => params.callBusca(),
          bodyFormated: (par) => { 
            if(bodyFormated) return bodyFormated(par)
            if(!bodyFormated) return par 
          },
          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } }  
                idMaster={ idMaster }
                callBusca={ () => params.callBusca() }
                dataForm={ params.dataForm } />
          )

        })}

        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, bodyBase:bodyBase, fieldsForm:fieldsForm, callBusca: params.callBusca })} 
      
        buttonsAdd={buttonsAdd ? buttonsAdd : []}        

      />
    </>
  );
};
  
export default MyFormBase;