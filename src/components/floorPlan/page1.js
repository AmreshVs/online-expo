/* eslint-disable no-loop-func */
import React from 'react';

const FloorPlanPage1 = ({ selected, handleClick, data, view }) => {

  const renderDataTip = (data) => {
    return `Stall <b>${data.id}</b> <br> <b>${data.name}</b> <br> <span>${data.description}</span><br><span class="badge badge-primary">${data.type}</span>`;
  }
  
  const getClassName = (data) => {
    if(data.status === 0){
      if(selected === data.id){
        return "table-success";
      }
      else if(view === 1){
        return "col-disable"
      }
      else{
        return "";
      }
    }
    else{
      return "table-warning";
    }
  }

  const RenderFirstRow = () => {

    let row = data.first_row;
    let ids = ['', 29, 30, 88, '', 89, 119, 120, ''];
    let tds = [];

    for(let id of ids){
      if(id !== ''){
        let col = row[id];
        tds.push(
          <td className={getClassName(col)} onClick={() => view === 1 ? col.status === 1 ? handleClick(col) : null : handleClick(col)} key={col.id} data-tip={col.status === 1 ? renderDataTip(col) : ''}>S{col.id}</td>
        )
      }
      else{
        tds.push(
          <td className="table-danger" key={'empty' + Math.random() * (1 - 20) + 1}></td>
        )
      }
    }

    return(
      <tr colSpan="9">
        {tds}
      </tr>
    )
  }

  const RenderSecondRow = () => {

    let row = data.second_row;
    let ids = [28, '', '', '', 87, '', '', '', 121];
    let tds = [];

    for(let id of ids){
      if(id !== ''){
        let col = row[id];
        tds.push(
          <td className={getClassName(col)} onClick={() => view === 1 ? col.status === 1 ? handleClick(col) : null : handleClick(col)} key={col.id} data-tip={col.status === 1 ? renderDataTip(col) : ''}>S{col.id}</td>
        )
      }
      else{
        tds.push(
          <td className="table-light" key={'empty' + Math.random() * (1 - 20) + 1}></td>
        )
      }
    }

    return(
      <tr colSpan="9">
        {tds}
      </tr>
    )
  }

  const RenderNormalRow = () => {

    let row = data.normal_row;
    let rows = [];
    let r1 = 27;
    let r3 = 31;
    let r5 = 86;
    let r7 = 118;
    let r9 = 122;

    let r1Arr = [];
    let r3Arr = [];
    let r5Arr = [];
    let r7Arr = [];
    let r9Arr = [];

    for(let i = 0; i < 26; i++){
      r1Arr.push(r1);
      r3Arr.push(r3);
      r5Arr.push(r5);
      r7Arr.push(r7);
      r9Arr.push(r9);
      r1--; r3++; r5--; r7--; r9++;
    }

    for(let i = 0; i < 26; i++){
      rows.push(
        <tr colSpan="9" key={i}>
          <td className={getClassName(row[r1Arr[i]])} onClick={() => view === 1 ? row[r1Arr[i]].status === 1 ? handleClick(row[r1Arr[i]]) : null : handleClick(row[r1Arr[i]])} data-tip={row[r1Arr[i]].status === 1 ? renderDataTip(row[r1Arr[i]]) : ''}>S{row[r1Arr[i]].id}</td>
          <td className="table-light"></td>
          <td className={getClassName(row[r3Arr[i]])} onClick={() => view === 1 ? row[r3Arr[i]].status === 1 ? handleClick(row[r3Arr[i]]) : null : handleClick(row[r3Arr[i]])} data-tip={row[r3Arr[i]].status === 1 ? renderDataTip(row[r3Arr[i]]) : ''}>S{row[r3Arr[i]].id}</td>
          <td className="table-light"></td>
          <td className={getClassName(row[r5Arr[i]])} onClick={() => view === 1 ? row[r5Arr[i]].status === 1 ? handleClick(row[r5Arr[i]]) : null : handleClick(row[r5Arr[i]])} data-tip={row[r5Arr[i]].status === 1 ? renderDataTip(row[r5Arr[i]]) : ''}>S{row[r5Arr[i]].id}</td>
          <td className="table-light"></td>
          <td className={getClassName(row[r7Arr[i]])} onClick={() => view === 1 ? row[r7Arr[i]].status === 1 ? handleClick(row[r7Arr[i]]) : null : handleClick(row[r7Arr[i]])} data-tip={row[r7Arr[i]].status === 1 ? renderDataTip(row[r7Arr[i]]) : ''}>S{row[r7Arr[i]].id}</td>
          <td className="table-light"></td>
          <td className={getClassName(row[r9Arr[i]])} onClick={() => view === 1 ? row[r9Arr[i]].status === 1 ? handleClick(row[r9Arr[i]]) : null : handleClick(row[r9Arr[i]])} data-tip={row[r9Arr[i]].status === 1 ? renderDataTip(row[r9Arr[i]]) : ''}>S{row[r9Arr[i]].id}</td>
        </tr>
      );
      r1--; r3++; r5--; r7--; r9++;
    }
    return rows;
  }

  const RenderSecondLastRow = () => {

    let row = data.second_last_row;
    let ids = [1, '', 57, '', '', '', 92, '', 148];
    let tds = [];

    for(let id of ids){
      if(id !== ''){
        let col = row[id];
        tds.push(
          <td className={getClassName(col)} onClick={() => view === 1 ? col.status === 1 ? handleClick(col) : null : handleClick(col)} key={col.id} data-tip={col.status === 1 ? renderDataTip(col) : ''}>S{col.id}</td>
        )
      }
      else{
        tds.push(
          <td className="table-light" key={'empty' + Math.random() * (1 - 20) + 1}></td>
        )
      }
    }

    return(
      <tr colSpan="9">
        {tds}
      </tr>
    )
  }

  const RenderLastRow = () => {

    let row = data.last_row;
    let ids = [0, '', 58, 59, 60, 90, 91, '', 149];
    let tds = [];

    for(let id of ids){
      if(id !== ''){
        let col = row[id];
        tds.push(
          <td className={getClassName(col)} onClick={() => view === 1 ? col.status === 1 ? handleClick(col) : null : handleClick(col)} key={col.id} data-tip={col.status === 1 ? renderDataTip(col) : ''}>S{col.id}</td>
        )
      }
      else{
        tds.push(
          <td className="table-light" key={'empty' + Math.random() * (1 - 20) + 1}></td>
        )
      }
    }

    return(
      <tr colSpan="9">
        {tds}
      </tr>
    )
  }
  
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <tbody>
          <RenderFirstRow />
          <RenderSecondRow />
          <RenderNormalRow />
          <RenderSecondLastRow />
          <RenderLastRow />
        </tbody>
      </table>
    </div>
  )
}

export default FloorPlanPage1;