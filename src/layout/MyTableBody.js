import { Button } from "react-bootstrap";

const MyTableBody = ({ tableData, columns, actions }) => {
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

         {actions.map((btn) => {
            return <td key={'actions'}>
                    <div className="d-inline p-2"><Button className='bg-light text-dark' onClick={() => { btn.onClick(item) }}>{btn.label}</Button></div>
                </td>
         })}

        </tr>
       );
      })}
     </tbody>
    );
   };

export default MyTableBody;