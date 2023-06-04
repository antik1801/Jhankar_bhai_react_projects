import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://bistro-boss-server-chi.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //       // console.log(data);
  //     });
  // }, []);
  // return [menu, loading];
  const {data: menu = [] , isLoading: loading } = useQuery({
    queryKey: ['menu'],    // the second peramiter of the querykey is the dependency of the query key
    queryFn: async () =>{
      const res = await fetch('https://bistro-boss-server-chi.vercel.app/menu')
      return res.json()
    }
  })
  return [menu, loading]
};

export default useMenu;
