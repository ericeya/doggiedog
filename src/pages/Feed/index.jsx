/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import API from "../../utils/API";
import ImageCard from "../../components/ImageCard";
// import './style.css'
 
export default function ImgWithCaption(props) {
    const [imageList, setImageList] = useState([])

    useEffect(() => {
        API.getImage().then((data) => {
            setImageList(data)
        }).then(console.log(imageList))
    }, [])

    return (
    <div className="container mx-auto">
        <div className="p-5 flex justify-center flex-col items-center ">
            {
                imageList.map((data) => {
                    return <>
                        <ImageCard 
                            key={data.id} 
                            imageId={data.id}
                            imageUrl={data.image}
                            imageCap={data.caption}
                            userId={props.userId} 
                            username={data.username}
                            // need to add like count thru many to many relationship
                        />
                    
                    </>
                })
            }
        </div>
    </div>
    );
}