// Single selection accordian
// Multiple selection accordian

import { useState } from 'react';
import data from './data';
import './styles.css';

function Accordian() {

    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState([]);
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiSelection];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if(findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentId)
        }
        else {
            copyMultiple.splice(findIndexOfCurrentId,1)
        }
        setMultiSelection(copyMultiple)
    }

    return (
        <div className='wrapper'>
            <button className={enableMultipleSelection ? 'enableMultiButton' :''} onClick={()=>setEnableMultipleSelection(!enableMultipleSelection)}>{!enableMultipleSelection ? "Enable Multi Selection" : "Enable Single Selection"}</button>
            <div className='accordian'>
                {
                    data && data.length > 0 ? data.map((dataItem) => {
                        return (
                            <div key={dataItem.id} className='item'>
                                <div onClick={() =>enableMultipleSelection ? handleMultiSelection(dataItem.id) : handleSingleSelection(dataItem.id)} className='title'>
                                    <h3>{dataItem.question}</h3>
                                    <span>{selected === dataItem.id ? "-" : "+"}</span>
                                </div>
                                {
                                    enableMultipleSelection ? 
                                    multiSelection.indexOf(dataItem.id) !== -1 && <div className='content'> {dataItem.answer} </div>
                                    :
                                    selected === dataItem.id && <div className='content'> {dataItem.answer} </div>
                                }
                                {/* {
                                    selected === dataItem.id ? (<div className='content'>
                                        {dataItem.answer}
                                    </div>) : null
                                } */}
                            </div>
                        )
                    }) : <div>No data found!</div>
                }
            </div>
        </div>
    )
}

export default Accordian;