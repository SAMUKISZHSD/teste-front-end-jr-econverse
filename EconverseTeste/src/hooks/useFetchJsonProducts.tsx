import { useEffect, useState } from "react";

// Hook personalizado useFetch que aceita uma URL e retorna dados, estado de carregamento e erros
function useFetch<T>(url: RequestInfo | URL) {
  // Estados para armazenar dados, erros e status de carregamento
  const [data, setData] = useState<T | null>(null); // Armazena os dados recebidos da requisição
  const [error, setError] = useState<string | null>(null); // Armazena mensagem de erro caso ocorra
  const [loading, setLoading] = useState(false); // Indica se a requisição está em andamento

  // useEffect para executar a função de busca de dados quando o componente é montado ou a URL muda
  useEffect(() => {
    // Função assíncrona para buscar dados da URL fornecida
    async function fetchData() {
      setData(null); // Limpa dados anteriores
      setLoading(true); // Define o estado de carregamento como verdadeiro

      try {
        const response = await fetch(url); // Faz a requisição à URL
        const data = (await response.json()) as T; // Converte a resposta para JSON e define o tipo

        if (!response.ok) {
          throw new Error("Erro ao recuperar dados de produtos."); // Lança erro se a resposta não for OK
        }

        setData(data); // Define os dados no estado
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message); // Define a mensagem de erro no estado
          setData(null); // Limpa dados
        }
      } finally {
        setLoading(false); // Define o estado de carregamento como falso
      }
    }

    fetchData(); // Chama a função fetchData para iniciar a busca de dados
  }, [url]); // useEffect depende da URL, será chamado novamente se a URL mudar

  // Retorna um objeto contendo dados, estado de carregamento e erros
  return { data, loading, error };
}

export default useFetch;
