import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const UseFetchStore = () => {
    const [store, setStore] = useState(null);

    useEffect(() => {
        fetchStore();
    }, []);

    const fetchStore = async () => {
        const res = await axios.get("https://fakestoreapi.com/products/");
        const data = res.data;
        setStore(data);
    };

    return { store };
};

export default UseFetchStore;
