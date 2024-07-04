import { useEffect, useState } from "react";

function useFetch<T>(url: RequestInfo | URL) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setData(null);
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = (await response.json()) as T;
        if (!response.ok) {
          throw new Error("Erro ao recuperar dados de produtos.");
        }
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
