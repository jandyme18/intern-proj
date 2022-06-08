import React, { Component } from 'react';
import Data from "../json/response_1653892233682.json";

export class SearchAPI extends Component {

  // const base64ToImage = (file) => ()
  render() {
    return (
      <div>
        {
          Data && Data.map((data, i) => {
            // function tripinfoLoop() {
            //     for (var i in data.tripinfo){
            //              for (var ii in data.tripinfo[i]){
            //                  console.log(data.tripinfo[i][ii])
            //              }
            //          }
            // }
            // for (var i in data.tripinfo){
            //     for (var ii in data.tripinfo[i]){
            //         console.log(data.tripinfo[i][ii])
            //     }
            // }
            return (
              <>
                <div> ข้อมูลหนังสือเดินทาง
                  <div class="border grid grid-cols-1 content-center">
                    <div>ชื่อ: {data.passportinfo.firstname}</div>
                    <div>ชื่อกลาง: {data.passportinfo.middlename}</div>
                    <div>นามสกุล: {data.passportinfo.surname}</div>
                    <div>วันเกิด: {data.passportinfo.birthDate}</div>
                    <div>เลขหนังสือเดินทาง: {data.passportinfo.passportNo}</div>
                    <div>รหัสประเทศ: {data.passportinfo.countryCode}</div>
                    <div>เพศ: {data.passportinfo.gender}</div>
                    <div><img src={`data:image/ png;base64,${data.passportinfo.passportPhoto}`} width="300" height="300" alt="passport first page" /></div>
                  </div>
                </div>
                <div> ประวัติการเดินทาง
                  {/* <div class="border grid grid-cols-6 content-center">
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>

                                    </div> */}

                  <table class="table-auto">
                    <thead>
                      <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                      </tr>
                      <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                      </tr>
                      <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )
          })
        }
      </div>

    )


  }
}

export default SearchAPI;
