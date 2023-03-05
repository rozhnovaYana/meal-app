import { createContext, useState } from "react";

export interface IFavouritesProps {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}
interface IFavouritesContextProviderProps {
  children: React.ReactNode;
}
export const FavouritesContext = createContext<IFavouritesProps>({
  ids: ['124'],
  addFavourite: id => {},
  removeFavourite: id => {}
});

export const FavouritesContextProvider: React.FC<
  IFavouritesContextProviderProps
> = ({ children }) => {
  const [favourites, setFavourites] = useState<string[]>([]);

  const addFavourite = (id: string) => {
    setFavourites((state) => [...state, id]);
  };

  const removeFavourite = (id: string) => {
    setFavourites((state) => state.filter((el) => el !== id));
  };

  return (
    <FavouritesContext.Provider
      value={{ ids: favourites, addFavourite, removeFavourite}}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
