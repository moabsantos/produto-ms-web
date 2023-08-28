import React, { useState } from 'react';
import { Button } from "react-bootstrap";

const MyButtonLine = ({ labelPopover, iconeBotao, labelBotao, dataObj, myOnClick }) => {

    const [stIconeBotao, setStIconeBotao] = useState(iconeBotao)
    const [stLabelBotao, setStLabelBotao] = useState(labelBotao)


    const configButton = (params) => {

        if (params && params.iconeBotao) setStIconeBotao(params.iconeBotao)
        if (params && params.labelBotao) setStLabelBotao(params.labelBotao)
    }

    return (<div className="d-inline p-1">
        <span className="d-inline-block" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content={labelPopover}>
            <Button
                className='bg-light text-dark' 
                onClick={() => { myOnClick(dataObj, (d) => configButton(d)) }}>
                <i className={stIconeBotao}></i> {stLabelBotao}
            </Button>
        </span>
    </div>);

}
 
 export default MyButtonLine;