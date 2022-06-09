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
        <div class="container mx-auto">
            <h1>จ๊ะเอ๋ คุณเข้ามาหาหน้าค้นหาแล้ว ยินดีด้วยจ้า และนี่คือปุ่มล็อคเอ้าเอ้าเอ้าเอ้า</h1>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={callLogout}>
                ออกจากระบบ
            </button>
            <form class="w-full" onSubmit={callDataAPI}>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 my-4">
                        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-first-name">
                            ชื่อจริงภาษาอังกฤษ
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/3 px-3 my-4">
                        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-middle-name">
                            ชื่อกลางภาษาอังกฤษ
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-middle-name" type="text" placeholder="T." />
                    </div>
                    <div class="w-full md:w-1/3 px-3 my-4">
                        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-last-name">
                            นามสกุล
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                    {/* <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div> */}
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-4">
                        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-country-code">
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
                        {/* <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div> */}
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-4">
                        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-city">
                            วันเกิด
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-4">
                        <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-zip">
                            เลขหนังสือเดินทาง
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                        
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button class="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Search
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}