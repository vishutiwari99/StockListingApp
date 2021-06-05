import { useEffect, useState } from "react"
import { useHistory } from "react-router";
import axios from "axios";
import { URL } from "../utils/constants";
import Table from "../components/Table";

const SavedStocks = () => {
    const [savedStocks, setSavedStocks] = useState([]);
    const [reload, setReload] = useState(false);
    const history = useHistory();

    const deleteStocksHandler = async (id) => {
        await axios.delete(`${URL}${id}`);
        setReload(!reload)
    }
    useEffect(() => {
        const fetchDBStocks = async () => {
            const { data } = await axios.get(URL);
            setSavedStocks(data);
        }
        fetchDBStocks();
    }, [reload])

    return (
        <div className="flex flex-col justify-center items-center">
            <Table currentStocks={savedStocks} deleteStocksHandler={deleteStocksHandler} />
            <button onClick={() => history.push('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded-lg">Back</button>
        </div>
    )
}

export default SavedStocks
