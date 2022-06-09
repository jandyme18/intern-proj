import React, { useState } from 'react';

export const SearchFilterCountry = ({ placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [countryList, setCountryList] = useState("");

    function handleFilter(event) {
        const searchWord = event.target.value;
        setCountryList(countryList);
        const theFilter = data.filter((theData) => {
            return theData.alpha3.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord == "") {
            setFilteredData([]);
        } else {
            setFilteredData(theFilter);
        }
    };

    return (
        <>
            <input class="uppercase appearance-none block w-full bg-gray-200 text-blue border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder={placeholder}
                value={countryList}
                onChange={handleFilter}
            />
            <div class="overflow-auto absolute h-60 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <div class="py-1 text-sm text-gray-700">
                    
                        {/* {Data && Data.length > 0 && Data.filter((data) => {
                                if (countryList == "") {
                                    return data
                                }
                                else if (data.alpha3.toLowerCase().includes(countryList.toLowerCase())) {
                                    return data
                                }
                            }).map((data, key) => {
                                return <div class="text-blue" key={key}>{data.alpha3}</div>
                            })
                            } */}

                        {filteredData.length > 0 && (
                            <div class="text-left py- px-4 w-full text-sm text-gray-700 hover:bg-gray-100">
                                {filteredData.slice(0, filteredData.length).map((data, key) => {
                                    return (
                                        <div>
                                            <p key={key}>{data.alpha3}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                </div>
            </div>
        </>
    )
}