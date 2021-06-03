import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Table = () => {

    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [stocksPerPage] = useState(5);

    const filter = search => {
        setSearch(search)
    }


    useEffect(() => {
        const fetchStocks = async () => {
            setLoading(true);
            const { data } = await axios.get("https://api.nomics.com/v1/currencies/ticker?key=c0f01e3a1ff45949c3336dcc43ba56472bdd2747&per-page=100&page=1&interval=1h");
            setStocks(data);
            setLoading(false);
        }
        fetchStocks();

    }, [])

    const indexOfLastStock = currentPage * stocksPerPage;
    const indexOfFirstStock = indexOfLastStock - stocksPerPage + 1;
    const currentStocks = stocks.slice(indexOfFirstStock, indexOfLastStock);

    console.log(stocks);
    if (!stocks) return <h1>Loading</h1>

    return (
        <div className="min-w-max lg:w-5/6 ">
            <div className="bg-gray-50 min-w-max m-2 flex  items-center justify-start ">
                <h1>Stock Details Table</h1>
                <input
                    className="bg-gray-200 mx-32 p-1"
                    type="text"
                    placeholder="Search by company Name"
                    name="search"
                    onChange={(event) => filter(event.target.value)}

                />
            </div>
            <table className="min-w-max w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">COMPANY NAME</th>
                        <th className="py-3 px-6 text-left">SYMBOL</th>
                        <th className="py-3 px-6 text-center">MARKET CAP</th>
                        <th className="py-3 px-6 text-center"></th>
                        <th className="py-3 px-6 text-center">CURRENT PRICE</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {currentStocks.filter((stock) => {
                        if (search === "") {
                            return stock;
                        } else if (stock.name.includes(search)) {
                            return stock;
                        }
                    }).map((stock) => (
                        <>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <span className="font-medium">{stock.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span>{stock.symbol}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <h2>{stock.market_cap}</h2>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                                        Active
                      </span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span>{stock.price}</span>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
            <div className="bg-gray-300 flex lg:flex-grow justify-end rounded-md  min-w-max ">
                <div className="flex items-center">
                    <p>{indexOfFirstStock}-{indexOfLastStock} </p>
                    <p className="px-1"> of {stocks.length}</p>
                </div>
                <ChevronLeftIcon onClick={() => setCurrentPage(currentPage => (currentPage < 2) ? 1 : currentPage - 1)} className="h-8 hover:bg-gray-400" />
                <ChevronRightIcon onClick={() => setCurrentPage(currentPage => currentPage + 1)} className="h-8 hover:bg-gray-400" />
            </div>
        </div>
    );
}

export default Table
