import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CollectionType } from "../global/types";
import { api } from "../services/api";

interface PromoProviderProps {
  children: ReactNode;
}
interface PromoContextData {
  collection: CollectionType;
}

const PromoContext = createContext<PromoContextData>({} as PromoContextData);

export function PromoProvider({ children }: PromoProviderProps) {
  const [collection, setCollection] = useState<CollectionType>(
    {} as CollectionType
  );

  useEffect(() => {
    api
      .get<CollectionType>("collection")
      .then((res) => {
        setCollection(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <PromoContext.Provider value={{ collection }}>
      {children}
    </PromoContext.Provider>
  );
}

export function usePromo(): PromoContextData {
  const context = useContext(PromoContext);

  return context;
}
