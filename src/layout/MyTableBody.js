import { Button } from "react-bootstrap";
import MyButtonLine from "../components/MyButtonLine";

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
            return <div key={'actionbutons'+idx}  className="d-inline p-1">
                      <span className="d-inline-block" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content={btn.labelPopover}>
                        <Button className='bg-light text-dark' onClick={() => { btn.onClick(item) }}>
                          <i className={btn.nomeIcone}></i> {btn.label}
                        </Button>
                      </span>
                    </div>
         })}

         {buttonsAdd && buttonsAdd.map((btn, idx) => {

            if (btn.onShow) btn = btn.onShow(btn, item)

            return <MyButtonLine 
              key={'addbutons'+idx} 
              labelPopover={btn.labelPopover}
              iconeBotao={btn.nomeIcone}
              labelBotao={btn.labelBotao}
              dataObj={item}
              myOnClick={btn.onClick}
            />

         })}
         
        </td>

        </tr>

       );

      })}
      
     </tbody>
    );

   };

export default MyTableBody;