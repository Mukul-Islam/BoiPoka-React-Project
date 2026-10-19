const getStoredBook = () =>{
    const storedBook = localStorage.getItem("readList");

    if(storedBook)
    {
        const storedBookData = JSON.parse(storedBook)
        return storedBookData
    }
    else
    {
        return [];
    }
}

const addToStoreDB = (id) =>{
    const storedBookData = getStoredBook();

    const numericId = parseInt(id);
    if(storedBookData.includes(numericId)){
        alert("existed id");

    }
    else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)

    }
}

export {addToStoreDB,getStoredBook}