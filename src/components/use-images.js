import { useEffect, useState} from 'react'

const useImages = () => {
    const [images, setimages] = useState([]);
    useEffect(() => {
        if (!sessionStorage.getItem('images-list')) {
            console.log("here");
            const fetchimages = async () => {
                const response = await fetch('https://clone-d6025-default-rtdb.asia-southeast1.firebasedatabase.app/images.json');
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const responseData = await response.json();
                const loadedimages = [];
                console.log(responseData.homeimage);
                for (const key in responseData) {
                    loadedimages.push({
                        id: key,
                        image: responseData.homeimage,
                        imgId: responseData.id,
                    });
                }
                sessionStorage.setItem('images-list', JSON.stringify(loadedimages));
                setimages(loadedimages);              
            };

            fetchimages().catch(error => {
                
            });
        }
        else {
            console.log("here");
            const imgarr = sessionStorage.getItem('images-list');
            setimages(JSON.parse(imgarr));
        }
    }, []);
    return images;
}
export default useImages