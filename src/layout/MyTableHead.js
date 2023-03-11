import { useState } from "react";

const MyTableHead = ({ columns, columnsExtra, handleSorting }) => {

    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    if (!columnsExtra){
        columnsExtra = [{
            label: 'Actions'
        }]
    }

    const handleSortingChange = (accessor) => {
        const sortOrder =
         accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };

    return (
        <thead>
        <tr>
        {columns.map(({ label, accessor, alignCell, sortable }) => {
            const cl = sortable
            ? sortField === accessor && order === "asc"
            ? "up"
            : sortField === accessor && order === "desc"
            ? "down"
            : "default"
            : "";

            let styleCell = {}

            if (alignCell){
              styleCell = {textAlign: "right"}
            }


          return (
           <th className={cl}
                key={accessor} 
                style={styleCell}
                onClick={sortable ? () => handleSortingChange(accessor) : null}>
            {label}
           </th>
          );
         })}

        {columnsExtra.map(({ label }) => {
           return (<th className={""} key={'actions'}>{label}</th>)
        })}

        </tr>
       </thead>
    );
   };
   
   export default MyTableHead;