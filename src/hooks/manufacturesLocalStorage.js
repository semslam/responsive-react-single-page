const manufactures = "manufactures";
const manufacturesStorage = () => {
  
    try {
        const manufacturesSectorOptions = [
            { value: 1, label: 'Manufacturing' },
            { value: 2, label: 'Construction materials' },
            { value: 3, label: 'Apple' },
            { value: 4, label: 'Microsoft' },
            { value: 5, label: 'IBM' },
            { value: 6, label: 'AWS' },
          ];
        const manufacturesData = localStorage.getItem(manufactures);
        if (!manufacturesData) {
          localStorage.setItem(manufactures, JSON.stringify(manufacturesSectorOptions));
        }

    } catch (err) {
      console.log(err.message);
    }
 
};

const fetchManufacturesStorage = () => {
  try {
    const manufacturesData = localStorage.getItem(manufactures); 
    return manufacturesData;
  } catch (err) {
    console.log(err.message);
  }

};


export {
  fetchManufacturesStorage,
  manufacturesStorage
} 