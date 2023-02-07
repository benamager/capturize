//usage
// const { response, error, loading, request } = useAxios("https://api.example.com/posts");

// const handlePost = async () => await request("post", { title: "My New Post" });
// const handleGet = async () => await request("get");
// const handlePut = async () => await request("put", { title: "Updated Title" });
// const handlePatch = async () => await request("patch", { title: "Patched Title" });
// const handleDelete = async () => await request("delete");

import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, options = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (method, data) => {
    if (!data) return
    setError(null)
    setLoading(true);
    try {
      const res = await axios({
        method,
        url,
        [method === "get" ? "params" : "data"]: data,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        ...options,
      });
      setResponse(res.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!options.lazy) {
      request("get");
    }
  }, []);

  return { response, error, loading, request };
};

export default useAxios;