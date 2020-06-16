/* eslint-disable no-loop-func */
import React from 'react';

const FloorPlanPage1 = ({ selected, handleClick, data }) => {
  
  const RenderFirstRow = () => {

    let row = data.first_row;
    let ids = ['', 29, 30, 88, '', 89, 119, 120, ''];
    let tds = [];

    for(let id of ids){
      if(id !== ''){
        let col = row[id];
        tds.push(
          <td className={col.status === 0 ? selected === col.id ? "table-success" : '' : "table-warning"} onClick={() => handleClick(col.id)} key={col.id} data-tip={`Stall <b>${col.id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>S{col.id}</td>
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
          <td className={col.status === 0 ? selected === col.id ? "table-success" : '' : "table-warning"} onClick={() => handleClick(col.id)} key={col.id} data-tip={`Stall <b>${col.id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>S{col.id}</td>
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
          <td className={row[r1Arr[i]].status === 0 ? selected === row[r1Arr[i]].id ? "table-success" : '' : "table-warning"} onClick={() => handleClick(row[r1Arr[i]].id)} data-tip={`Stall <b>${row[r1Arr[i]].id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>S{row[r1Arr[i]].id}</td>
          <td className="table-light"></td>
          <td className={row[r3Arr[i]].status === 0 ? selected === row[r3Arr[i]].id ? "table-success" : '' : "table-warning"} onClick={() => handleClick(row[r3Arr[i]].id)} data-tip={`Stall <b>${row[r3Arr[i]].id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>S{row[r3Arr[i]].id}</td>
          <td className="table-light"></td>
          <td className={row[r5Arr[i]].status === 0 ? selected === row[r5Arr[i]].id ? "table-success" : '' : "table-warning"} onClick={() => handleClick(row[r5Arr[i]].id)} data-tip={`Stall <b>${row[r5Arr[i]].id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>S{row[r5Arr[i]].id}</td>
          <td className="table-light"></td>
          <td className={row[r7Arr[i]].status === 0 ? selected === row[r7Arr[i]].id ? "table-success" : '' : "table-warning"} onClick={() => handleClick(row[r7Arr[i]].id)} data-tip={`Stall <b>${row[r7Arr[i]].id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>S{row[r7Arr[i]].id}</td>
          <td className="table-light"></td>
          <td className={row[r9Arr[i]].status === 0 ? selected === row[r9Arr[i]].id ? "table-success" : '' : "table-warning"} onClick={() => handleClick(row[r9Arr[i]].id)} data-tip={`Stall <b>${row[r9Arr[i]].id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>S{row[r9Arr[i]].id}</td>
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
          <td className={col.status === 0 ? selected === col.id ? "table-success" : '' : "table-warning"} onClick={() => handleClick(col.id)} key={col.id} data-tip={`Stall <b>${col.id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>S{col.id}</td>
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
          <td className={col.status === 0 ? selected === col.id ? "table-success" : '' : "table-warning"} onClick={() => handleClick(col.id)} key={col.id} data-tip={`Stall <b>${col.id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>S{col.id}</td>
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