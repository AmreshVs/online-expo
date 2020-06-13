/* eslint-disable no-loop-func */
import React from 'react';

const FloorPlanPage2 = ({ selected, handleClick }) => {

  const RenderFirstRow = () => {

    let ids = ['', 179, 180, 238, '', 239, 240, 270, ''];
    let tds = [];

    for(let id of ids){
      if(id !== ''){
        tds.push(
          <td className={selected === id ? "table-success" : ''} onClick={() => handleClick(id)} key={id} data-tip={`Stall <b>${id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>test {id}</td>
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

    let ids = [178, '', '', '', 237, '', '', '', 271];
    let tds = [];

    for(let id of ids){
      if(id !== ''){
        tds.push(
          <td className={selected === id ? "table-success" : ''} onClick={() => handleClick(id)} key={id} data-tip={`Stall <b>${id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>test {id}</td>
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
    let rows = [];
    let r1 = 177;
    let r3 = 181;
    let r5 = 236;
    let r7 = 241;
    let r9 = 272;

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
      r1--; r3++; r5--; r7++; r9++;
    }

    for(let i = 0; i < 26; i++){
      rows.push(
        <tr colSpan="9" key={i}>
          <td className={selected === r1Arr[i] ? "table-success" : ''} onClick={() => handleClick(r1Arr[i])} data-tip={`Stall <b>${r1Arr[i]}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>test {r1Arr[i]}</td>
          <td className="table-light"></td>
          <td className={selected === r3Arr[i] ? "table-success" : ''} onClick={() => handleClick(r3Arr[i])} data-tip={`Stall <b>${r3Arr[i]}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>test {r3Arr[i]}</td>
          <td className="table-light"></td>
          <td className={selected === r5Arr[i] ? "table-success" : ''} onClick={() => handleClick(r5Arr[i])} data-tip={`Stall <b>${r5Arr[i]}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>test {r5Arr[i]}</td>
          <td className="table-light"></td>
          <td className={selected === r7Arr[i] ? "table-success" : ''} onClick={() => handleClick(r7Arr[i])} data-tip={`Stall <b>${r7Arr[i]}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>test {r7Arr[i]}</td>
          <td className="table-light"></td>
          <td className={selected === r9Arr[i] ? "table-success" : ''} onClick={() => handleClick(r9Arr[i])} data-tip={`Stall <b>${r9Arr[i]}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>test {r9Arr[i]}</td>
        </tr>
      );
      r1--; r3++; r5--; r7--; r9++;
    }
    return rows;
  }

  const RenderSecondLastRow = () => {

    let ids = [151, '', 207, '', '', '', 267, '', 298];
    let tds = [];

    for(let id of ids){
      if(id !== ''){
        tds.push(
          <td className={selected === id ? "table-success" : ''} onClick={() => handleClick(id)} key={id} data-tip={`Stall <b>${id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>test {id}</td>
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

    let ids = [150, '', 208, 209, 210, 268, 269, '', 299];
    let tds = [];

    for(let id of ids){
      if(id !== ''){
        tds.push(
          <td className={selected === id ? "table-success" : ''} onClick={() => handleClick(id)} key={id} data-tip={`Stall <b>${id}</b> <br> <b>Company Name</b> <br> <span>Description</span><br><span class="badge badge-primary">Diamond</span>`}>test {id}</td>
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

export default FloorPlanPage2;