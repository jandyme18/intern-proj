import React, { Component } from 'react';
import Data from "../json/response_1653892233682.json";

export class SearchAPI extends Component {

  // const base64ToImage = (file) => ()
  render() {
    return (
      <div>
        {
          Data && Data.map((data) => {
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
              <div class="container w-full mx-auto px-4">
                <div class="m-5"> ข้อมูลหนังสือเดินทาง <br />
                  <div class="flex flex-row">
                    <div class="basis-9/12 border border-blue mr-6 p-4 text-brown">
                      <span class="text-dark-blue">ชื่อ:</span> {data.passportinfo.firstname} <br/>
                      <span class="text-dark-blue">ชื่อกลาง:</span> {data.passportinfo.middlename} <br/>
                      <span class="text-dark-blue">นามสกุล:</span> {data.passportinfo.surname} <br/>
                      <span class="text-dark-blue">วันเกิด:</span> {data.passportinfo.birthDate} <br/>
                      <span class="text-dark-blue">เลขหนังสือเดินทาง:</span> {data.passportinfo.passportNo} <br/>
                      <span class="text-dark-blue">รหัสประเทศ:</span> {data.passportinfo.countryCode} <br/>
                      <span class="text-dark-blue">เพศ:</span> {data.passportinfo.gender} <br/>
                    </div>
                    <div class="basis-1/4"><img src={`data:image/ png;base64,${data.passportinfo.passportPhoto}`} width="300" height="300" alt="passport first page" /></div>
                  </div>
                </div>
                <div class="m-5"> ประวัติการเดินทาง
                  {/* <div class="border grid grid-cols-6 content-center">
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>
                                        <div key={i.length}>{data.tripinfo[i].tripDtm}</div>

                                    </div> */}

                  <table class="table-auto w-full container border border-dark-blue">
                    <thead class="text-center text-light-brown bg-dark-blue">
                      <tr>
                        <th>วัน/เวลา</th>
                        <th>ประเภทการเดินทาง</th>
                        <th>รหัสเที่ยวบิน</th>
                        <th>รหัสวีซ่า</th>
                        <th>จุดตรวจ</th>
                        <th>ที่อยู่ในไทย</th>
                      </tr>
                    </thead>
                    <tbody class="text-center text-dark-blue">
                      <tr>
                        <td>{data.tripinfo[0].tripDtm}</td>
                        <td>{data.tripinfo[0].tripType}</td>
                        <td>{data.tripinfo[0].flightNo}</td>
                        <td>{data.tripinfo[0].visatype}</td>
                        <td>{data.tripinfo[0].checkPoint}</td>
                        <td>{data.tripinfo[0].thResidence}</td>
                      </tr>
                      <tr>
                        <td>{data.tripinfo[1].tripDtm}</td>
                        <td>{data.tripinfo[1].tripType}</td>
                        <td>{data.tripinfo[1].flightNo}</td>
                        <td>{data.tripinfo[1].visatype}</td>
                        <td>{data.tripinfo[1].checkPoint}</td>
                        <td>{data.tripinfo[1].thResidence}</td>
                      </tr>
                      <tr>
                        <td>{data.tripinfo[2].tripDtm}</td>
                        <td>{data.tripinfo[2].tripType}</td>
                        <td>{data.tripinfo[2].flightNo}</td>
                        <td>{data.tripinfo[2].visatype}</td>
                        <td>{data.tripinfo[2].checkPoint}</td>
                        <td>{data.tripinfo[2].thResidence}</td>
                      </tr>
                      <tr>
                        <td>{data.tripinfo[3].tripDtm}</td>
                        <td>{data.tripinfo[3].tripType}</td>
                        <td>{data.tripinfo[3].flightNo}</td>
                        <td>{data.tripinfo[3].visatype}</td>
                        <td>{data.tripinfo[3].checkPoint}</td>
                        <td>{data.tripinfo[3].thResidence}</td>
                      </tr>
                      <tr>
                        <td>{data.tripinfo[4].tripDtm}</td>
                        <td>{data.tripinfo[4].tripType}</td>
                        <td>{data.tripinfo[4].flightNo}</td>
                        <td>{data.tripinfo[4].visatype}</td>
                        <td>{data.tripinfo[4].checkPoint}</td>
                        <td>{data.tripinfo[4].thResidence}</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            )
          })
        }
      </div>

    )


  }
}

export default SearchAPI;
