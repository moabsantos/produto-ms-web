import React from 'react';
import MyFormSubmit from './MyFormSubmit';
import MyTabsForm from './MyTabsForm';
  
const MyFormBase = ({ idMaster, tituloForm, dominio, filterList, headForm, buttonsTop, columnsTable, buttonsAdd, addBotaoSelecao, bodyBase, fieldsForm, LocalForm, removeInclusao, removeEdicao, FormView }) => {

  return (
    <>
      <h4 className='p-3'>
        <u>{ tituloForm }</u>
      </h4>

      <div className='p-3'>
        <table className="table table-bordered">
          <thead>
            <tr>
            {headForm.map((h, index) => (
                <th key={"head"+ dominio + index}>
                    {h.key}
                </th>
            ))}
            </tr>
          </thead>

          <tbody>
            <tr>
            {headForm.map((h, index) => (
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
        filterList={filterList}
        buttonsTop={buttonsTop}

        columns={columnsTable}

        add={removeInclusao ? null : (params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: {
            ...bodyBase
          }, 
          fieldsForm:fieldsForm,
          callBusca: () => params.callBusca(),

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
          dominio: dominio, 
          bodyBase: { 
            id: params.id,
            ...bodyBase 
          }, 
          fieldsForm:fieldsForm, 
          callBusca: () => params.callBusca(),

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
      
        buttonsAdd={buttonsAdd}        

      />
    </>
  );
};
  
export default MyFormBase;