export const getFavFromStorage = () => {
    const localData = localStorage.getItem("favoritos");
    return localData ? JSON.parse(localData) : [];
};

export const setFavInStorage = (dentist) => {
    const storageFavs = getFavFromStorage();
    const isFavOnList = storageFavs.filter(fav => {
        return fav.id === dentist.id
    });
    if (isFavOnList.length === 0) {
        storageFavs.push(dentist)
        localStorage.setItem("favoritos", JSON.stringify(storageFavs));
        return true;
    }
    else {
      
        return false;
    }
}

export const removeFavInStorage = (id) => {
    let storageFavs = getFavFromStorage();
    const index = storageFavs.findIndex(fav => fav.id === id);
    if (index !== -1) {
        storageFavs.splice(index, 1);
        localStorage.setItem("favoritos", JSON.stringify(storageFavs));
    }
    else {
        alert("Ha ocurrido un error");
    }
}

export const isFavorited = (id) => {
    const localData = getFavFromStorage();
    const isFavOnList = localData.filter(fav => {
        return fav.id === id
    });
    return isFavOnList.length === 1;
};



