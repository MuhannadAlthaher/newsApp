import { createContext, useState } from 'react';

// Define the types for the context values
interface Favoriteitems {
    auth: string;
    title: string;
    image: string;
}

interface FavoritesContextType {
    favoriteitems: Favoriteitems[];
    addFavorite: (auth: string, title: string, image: string) => void;
    removFavorite: (auth: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
    favoriteitems: [],
    addFavorite: () => {},
    removFavorite: () => {},
});

const FavoritesContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [favoriteitems, setFavoriteItems] = useState<Favoriteitems[]>([]);

    // Function to add an item to favorites
    function addFavorite(auth: string, title: string, image: string) {
        setFavoriteItems((currentItems) => [
            ...currentItems,
            { auth, title, image },
        ]);
    }

    // Function to remove an item from favorites by `auth`
    function removFavorite(auth: string) {
        setFavoriteItems((currentItems) =>
            currentItems.filter((item) => item.auth !== auth)
        );
    }

    const value: FavoritesContextType = {
        favoriteitems,
        addFavorite,
        removFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
