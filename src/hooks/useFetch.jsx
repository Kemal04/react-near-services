import { useState, useEffect } from "react";

const useFetch = (url, req, useToken) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let header = {};
        const fetchData = async () => {
            if (useToken === true) {
                header = {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                };
            } else {
                header = {
                    "Content-Type": "application/json",
                };
            }
            const response = await fetch(url, {
                method: "GET",
                headers: header,
            });
            if (response.status === 422 || response.status === 401) {
                return response;
            }
            if (!response.ok) {
                setError(response.status);
                setLoading(false);
            }
            const resData = await response.json();
            setData(resData[req]);
            setLoading(false);
        };

        fetchData();
    }, [req, url, useToken]);

    return [data, loading, error];
};

export default useFetch;
