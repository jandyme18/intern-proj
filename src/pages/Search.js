import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

export const Search = () => {
    const navigate = useNavigate();

    const [extension, setExtension] = useState([]);
    const [passportNo, setPassportNo] = useState("");
    const [nation, setNation] = useState("");

    const handleChangePassportNo = event => {
        setPassportNo(event.target.value);
    }

    const handleChangeNation = event => {
        setNation(event.target.value);
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.get(`http://10.117.110.121:8081/api/v2/immigration/check-address/${passportNo}/${nation}`)
            setExtension(res.data)
        }
        catch (err) {
            console.error(err)
        }

        console.log(extension)
    }

    //passportinfo => passportNo: "A50664336", countryCode: "MYS", countryName: "", passportPhoto: "", "firstname": "", "middlename": "", "surname": "", "authority": "MYS","issueDate": null,"expiryDate": "2023/12/26","nationality": "MYS","birthDate": "1953/07/07","gender": "M","birthplace": "MALAYSIA","passportType": "หนังสือเดินทาง",lastestPhoto: ""
    //tripinfo: [{
    //   "tripDtm": "2022/06/13 13:32",
    //   "tripType": "D",
    //   "counterID": "73F1C9E7745E3746E053650616AC8267",
    //   "flightNo": "AK0885",
    //   "visatype": "0014",
    //   "visaPermitDay": 30,
    //   "checkPoint": "บก.ตม.2/ด่าน ตม.ทอ.กรุงเทพ",
    //   "thResidence": "กรุงเทพมหานคร",
    //   "depCancelReason": null,
    //   "depCancelDate": null
    // }]
    //status: ""

    return (
        <div className="bg-white-malt">
            <div className="container mx-auto">
                {/* <h1>จ๊ะเอ๋ คุณเข้ามาหาหน้าค้นหาแล้ว ยินดีด้วยจ้า และนี่คือปุ่มล็อคเอ้าเอ้าเอ้าเอ้า</h1> */}
                {/* <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={callLogout}>
                    ออกจากระบบ
                </button> */}
                <form className="w-full" onSubmit={handleSearch}>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 my-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-300 mb-2" >
                                เลขหนังสือเดินทาง
                            </label>
                            <input className="uppercase appearance-none block w-full text-dark-blue placeholder-blue/50 border border-dark-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="passportNo" type="text" placeholder="ตัวหนังสือและตัวเลข เช่น L1111111" onChange={handleChangePassportNo} />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/3 px-3 my-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-300 mb-2" >
                                รหัสประเทศ
                            </label>
                            <input className="appearance-none block w-full text-dark-blue placeholder-blue/50 border border-dark-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="countryCode" type="text" placeholder="เช่น THA" onChange={handleChangeNation} />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <button className="bg-light-brown hover:bg-dark-blue hover:text-light-brown text-dark-blue font-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                ค้นหา
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <div className="flex container">
                {extension.length > 0 ?
                    (extension && extension.map((item) => {
                        item.passportinfo.passportNo
                    })) : ""}
            </div> */}
        </div>
    )
}