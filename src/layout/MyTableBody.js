import { Button } from "react-bootstrap";

const MyTableBody = ({ tableData, columns, actions }) => {
    return (
     <tbody>
      {tableData.map((item) => {
       return (
        <tr key={item.id}>

         {columns.map(({ accessor }) => {
          const tData = item[accessor] ? item[accessor] : "——";
          return <td key={accessor}>{tData}</td>;
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