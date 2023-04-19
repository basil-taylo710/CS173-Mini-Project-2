import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get(
        "https://api.ghostnet.tzkt.io/v1/contracts/KT1Ah9KakbvEn9DBSB68MG7ygAwRsnm6EXnr/storage"
    )
    return res.data
};
