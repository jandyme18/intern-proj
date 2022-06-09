import React, { Component } from 'react';
import Data from "../json/response_1653892233682.json";
import { TableData } from "../components/TableData"
import { v4 as uuidv4 } from "uuid"
import { PassportInfo } from "../components/PassportInfo"

export const SearchResult = () => {
  return (
    <div>
      {
        Data && Data.length > 0 && Data.map((data) => {
          return <div class="container w-full mx-auto px-4">
            <div class="m-5"> ข้อมูลหนังสือเดินทาง <br />
              <div class="flex flex-row">
                <div class="basis-9/12 border border-blue mr-6 p-4 text-brown">
                  <PassportInfo text={"ชื่อ:"} info={data.passportinfo.firstname} />
                  <PassportInfo text={"นามสกุล:"} info={data.passportinfo.middlename} />
                  <PassportInfo text={"วันเกิด:"} info={data.passportinfo.birthDate} />
                  <PassportInfo text={"เลขหนังสือเดินทาง:"} info={data.passportinfo.passportNo} />
                  <PassportInfo text={"รหัสประเทศ:"} info={data.passportinfo.countryCode} />
                  <PassportInfo text={"เพศ:"} info={data.passportinfo.gender} />
                </div>
                <div class="basis-1/4"><img src={`data:image/ png;base64,${data.passportinfo.passportPhoto}`} width="300" height="300" alt="passport first page" /></div>
              </div>
            </div>
            <div class="m-5"> ประวัติการเดินทาง
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
                  {data.tripinfo.map((info) => {
                    return <TableData info={info} key={uuidv4()} />
                  })}
                </tbody>
              </table>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default SearchResult;
