export default function useFetch() {
  function useGet() {
    console.log("useGet")
  }

  return { useGet };
}