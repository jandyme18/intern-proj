import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Auth from '../auth/Auth';
import { SearchFilterCountry } from '../components/SearchFilterCountry';
import Data from '../json/country-list-th.json';

export const Search = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        "email": "string",
        "is_active": true,
        "is_superuser": false,
        "first_name": "string",
        "last_name": "string",
        "id": "",
    });

    useEffect(() => {
        const fetchData = async () => {
            if (Auth.isAuthenticated()) {
                const result = await Auth.getUser();
                setUser(result);
            };
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    // Function to call logout
    const callLogout = async () => {
        Auth.logout(() => {
            navigate("/");
        });
    };


    // const [countryList, setCountryList] = useState("");

    const callDataAPI = useState()

    return (
        <div class="bg-white-malt">
            <div class="container mx-auto">
                <label>Choose a browser from this list:
                    <input list="browsers" name="myBrowser" /></label>
                <datalist id="browsers">
                    <option value="Chrome" />
                    <option value="Firefox" />
                    <option value="Internet Explorer" />
                    <option value="Opera" />
                    <option value="Safari" />
                    <option value="Microsoft Edge" />
                </datalist>
                <h1>จ๊ะเอ๋ คุณเข้ามาหาหน้าค้นหาแล้ว ยินดีด้วยจ้า และนี่คือปุ่มล็อคเอ้าเอ้าเอ้าเอ้า</h1>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={callLogout}>
                    ออกจากระบบ
                </button>
                <form class="w-full" onSubmit={callDataAPI}>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 my-4">
                            <label class="block uppercase tracking-wide text-dark-blue text-l font-300 mb-2" for="grid-first-name">
                                ชื่อจริงภาษาอังกฤษ
                            </label>
                            <input class="appearance-none block w-full text-dark-blue placeholder-blue/50 border border-dark-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/3 px-3 my-4">
                            <label class="block uppercase tracking-wide text-dark-blue text-l font-300 mb-2" for="grid-middle-name">
                                ชื่อกลางภาษาอังกฤษ
                            </label>
                            <input class="appearance-none block w-full text-dark-blue placeholder-blue/50 border border-dark-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-middle-name" type="text" placeholder="" />
                        </div>
                        <div class="w-full md:w-1/3 px-3 my-4">
                            <label class="block uppercase tracking-wide text-gray-700 text-l font-300 mb-2" for="grid-last-name">
                                นามสกุล
                            </label>
                            <input class="appearance-none block w-full text-dark-blue placeholder-blue/50 border border-dark-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-4">
                            <label class="block uppercase tracking-wide text-gray-700 text-l font-300 mb-2" for="grid-country-code">
                                รหัสประเทศ
                            </label>
                            {/* <input class="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-last-name" 
                        type="text" 
                        placeholder="เช่น THA" 
                        onChange={(event) => {
                            setCountryList(event.target.value);
                        }}
                        /> */}
                            <SearchFilterCountry placeholder={"เช่น THA"} data={Data} />
                            {/* { Data.filter((data) => {
                            if (countryList == "") {
                                return data
                            }
                            else if (data.alpha3.toLowerCase().includes(countryList.toLowerCase())) {
                                return data
                            }
                        }).map((data, key) => {
                            return <div key={key}>{data.alpha3}</div>
                        }) }  */}
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-4">
                            <label class="block uppercase tracking-wide text-gray-700 text-l font-300 mb-2" for="grid-city">
                                วันเกิด
                            </label>
                            <input class="appearance-none block w-full text-dark-blue placeholder-blue/50 border border-dark-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="เช่น 2000/01/01" />
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-4">
                            <label class="block uppercase tracking-wide text-gray-700 text-l font-300 mb-2" for="grid-zip">
                                เลขหนังสือเดินทาง
                            </label>
                            <input class="uppercase appearance-none block w-full text-dark-blue placeholder-blue/50 border border-dark-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="ตัวหนังสือและตัวเลข เช่น L1111111" />

                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <button class="bg-light-brown hover:bg-dark-blue hover:text-light-brown text-dark-blue font-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                ค้นหา
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}