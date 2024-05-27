import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000/res";
const ResourceContext = createContext();
function ResourceProvider({ children }) {
  const [resource, setResource] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("reso", resource);
  useEffect(function () {
    async function getResource() {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setResource(data);
    }
    getResource();
  }, []);
  useEffect(function(){
    setTimeout(() => {
        setIsLoading(false)
    }, 3000);
  },[])
  return (
    <ResourceContext.Provider value={{ resource,setResource,isLoading }}>
      {children}
    </ResourceContext.Provider>
  );
}
function useResource() {
  const context = useContext(ResourceContext);
  if (context === undefined) {
    throw new Error("REsource context used outside provider");
  }
  return context;
}
export { ResourceProvider, useResource };
