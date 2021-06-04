import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@heroicons/react/solid'
import Table from './components/Table';
import { URL } from './utils/constants';

const Home = () => {


    const [stocks, setStocks] = useState([]);
    const [savedStocks, setSavedStocks] = useState([])
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [stocksPerPage] = useState(5);

    const indexOfLastStock = currentPage * (stocksPerPage);
    const indexOfFirstStock = indexOfLastStock - stocksPerPage;
    const currentStocks = stocks.slice(indexOfFirstStock, indexOfLastStock);


    const filter = search => {
        setSearch(search)
    }
    useEffect(() => {
        const fetchStocks = async () => {
            const { data } = await axios.get("https://api.nomics.com/v1/currencies/ticker?key=c0f01e3a1ff45949c3336dcc43ba56472bdd2747&per-page=100&page=1&interval=1h");
            setStocks(data);

        }

        const fetchDBStocks = async () => {
            const { data } = await axios.get(URL);
            setSavedStocks(data);
        }
        fetchDBStocks();
        fetchStocks();
    }, [loading])

    console.log("taga", savedStocks);



    console.log(stocks);

    const saveStocksHandler = async (stock) => {
        const res = await axios.post(`${URL}save`, stock);
        setLoading(!loading);
        console.log(res);
    }

    return (
        <div className="min-w-max lg:w-5/6 px-auto py-2 ">
            <div className="bg-gray-50 min-w-max m-2 flex  items-center justify-start p-5 ">
                <h1>Stock Details Table</h1>
                <div className="relative">
                    <input
                        className="relative rounded-lg bg-gray-200 mx-32 p-1 px-10"
                        type="text"
                        placeholder="Search by company Name"
                        name="search"
                        onChange={(event) => filter(event.target.value)}
                    />
                    <SearchIcon className="absolute h-6 inset-0 inset-x-32 text-gray-600 mt-1 ml-2" />
                </div>
            </div>
            <Table currentStocks={currentStocks} search={search} savedStocks={savedStocks} saveStocksHandler={saveStocksHandler} />

            <div className="bg-gray-300 flex lg:flex-grow justify-end rounded-md  min-w-max ">
                <div className="flex items-center">
                    <p>{indexOfFirstStock}-{indexOfLastStock} </p>
                    <p className="px-1"> of {stocks.length}</p>
                </div>
                <ChevronLeftIcon onClick={() => setCurrentPage(currentPage => (currentPage < 2) ? 1 : currentPage - 1)} className="h-8 hover:bg-gray-400" />
                <ChevronRightIcon onClick={() => setCurrentPage(currentPage => currentPage + 1)} className="h-8 hover:bg-gray-400" />
            </div>

        </div >
    );
}

export default Home
