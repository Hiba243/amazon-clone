import { useEffect, useState} from 'react'

const useProducts = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        if (!sessionStorage.getItem('product-list')) {
            const fetchproducts = async () => {
                const response = await fetch('https://clone-d6025-default-rtdb.asia-southeast1.firebasedatabase.app/products.json');
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const responseData = await response.json();
                const loadedproducts = [];
                for (const key in responseData) {
                    loadedproducts.push({
                        id: key,
                        title: responseData[key].title,
                        price: responseData[key].price,
                        image: responseData[key].image,
                        tags: responseData[key].tags,
                        category: responseData[key].category,
                    });
                }
                sessionStorage.setItem('product-list', JSON.stringify(loadedproducts));
                setproducts(loadedproducts);              
            };

            fetchproducts().catch(error => {
                
            });
        }
        else {
            const prodarr = sessionStorage.getItem('product-list');
            setproducts(JSON.parse(prodarr));
        }
    }, []);
    return products;
}
export default useProducts