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

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(theFilter);
        }
    };
    

    return (
        <>
            <input class="uppercase appearance-none block w-full text-dark-blue placeholder-blue/50 border border-dark-blue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="list"
                placeholder={placeholder}
                onChange={handleFilter}
            />
            <div class="hidden overflow-hidden overflow-y-auto absolute max-h-[300px] h-auto w-60 bg-white rounded divide-y divide-gray-100 shadow">
                <div class="block py-1 text-sm text-dark-blue">
                    {filteredData.length > 0 && filteredData.map((data, key) => {
                        return (
                            <div class="text-left py-3 px-4 w-full text-sm text-dark-blue hover:bg-light-brown/40">
                                    <p key={key}>{data.alpha3}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}