import React from "react";
import log from "../image/foto.png";
const CV = () => {
  return (
    <div>
      <img src={log} alt="" />
      <div>
        <table>
          <tr>
            <th>Nama:</th>
            <td>Rega Mahesa Hardiyansyah</td>
          </tr>
          <tr>
            <th>TTL:</th>
            <td>16 october 2006</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CV;
