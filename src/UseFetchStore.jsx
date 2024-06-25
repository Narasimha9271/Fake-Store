import { useState } from "react";
import { useEffect } from "react";

const UseFetchStore = () => {
    const [store, setStore] = useState(null);

    useEffect(() => {
        fetchStore();
    }, []);

    const fetchStore = async () => {
        const res = await fetch("https://fakestoreapi.com/products/");
        const data = await res.json();
        setStore(data);
    };

    return { store };
};

export default UseFetchStore;
