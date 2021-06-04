import { useEffect } from "react"

const SavedStocks = () => {

    useEffect(() => {
        const fetchDBStocks = async () => {
            const { data } = await axios.get("http://localhost:5000/api");
            setSavedStocks(data);
        }
        fetchDBStocks();
    }, [input])
    return (
        <div>

        </div>
    )
}

export default SavedStocks
