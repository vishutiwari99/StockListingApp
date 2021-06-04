import { useHistory } from "react-router";

const Table = ({ currentStocks, search, savedStocks, saveStocksHandler, deleteStocksHandler }) => {

    const history = useHistory();
    return (
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
                    if (search === undefined) {
                        search = "";
                    }
                    if (search === "") {
                        return stock;
                    } else if (stock.name.includes(search)) {
                        return stock;
                    }
                }).map((stock, index) => {
                    let oldObj;
                    if (savedStocks) {
                        oldObj = savedStocks.find(x => x.id === stock.id)
                    }
                    return (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <span className="font-medium">{stock.name}</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex justify-center items-center bg-gray-200 rounded-full">
                                    <span className="text-indigo-600">{stock.symbol}</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-center">
                                <h2>{stock.market_cap}</h2>
                            </td>
                            <td className="py-3 px-6 text-center">
                                {
                                    saveStocksHandler &&
                                    <button onClick={() => {

                                        saveStocksHandler(stock);
                                        if (oldObj) {
                                            history.push('/view');
                                        }
                                    }
                                    } className={`${(oldObj) ? "bg-indigo-600 hover:bg-indigo-700" : "bg-blue-500 hover:bg-blue-600"}   text-white font-bold py-2 px-4 rounded-lg `}>{oldObj ? "View" : "Save Data"}</button>
                                }
                                {deleteStocksHandler &&
                                    <button onClick={() => deleteStocksHandler(stock._id)} className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ">delete</button>
                                }
                            </td>
                            <td className="py-3 px-6 text-center">
                                <span>{stock.price}</span>
                            </td>
                        </tr>

                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
