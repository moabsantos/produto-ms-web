import { Button } from "react-bootstrap";

const MyTableBody = ({ tableData, columns, actions, buttonsAdd }) => {
    return (
     <tbody>
      {tableData.map((item) => {
       return (
        <tr key={item.id}>

         {columns.map(({ accessor, alignCell, formataDado }) => {
          let tData = item[accessor] ? item[accessor] : "——";

          if (item[accessor] && formataDado){
 
            tData = formataDado(tData)
          }
          
          let styleCell = {}

          if (alignCell){
            styleCell = {textAlign: "right"}
          }

          return <td key={accessor} style={styleCell} >{tData}</td>;
         })}

        <td key={'actions'}>

         {actions && actions.map((btn, idx) => {
            return <div key={'actionbutons'+idx}  className="d-inline p-1"><Button
                  className='bg-light text-dark' 
                  onClick={() => { btn.onClick(item) }}>
                    <i className={btn.nomeIcone}></i> {btn.label}
                </Button></div>
         })}

         {buttonsAdd && buttonsAdd.map((btn, idx) => {
            return <Button key={'addbutons'+idx}
                  className='bg-light text-dark' 
                  onClick={() => { btn.onClick(item) }}>
                    <i className={btn.nomeIcone}></i> {btn.label}
                </Button>
         })}
         
        </td>

        </tr>
       );
      })}
     </tbody>
    );
   };

export default MyTableBody;