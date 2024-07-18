import { Typography } from "@material-tailwind/react";
import './style.css'
import { FaBookmark, FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import API from "../../utils/API";
 
export default function ImgWithCaption() {
    const [like, setLike] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    const [imageList, setImageList] = useState([])

    const likeHandler = () => {
        if (like) {
            setLike(false)
        } else {
            setLike(true)
        }
    }
    const bookmarkHandler = () => {
        if (bookmark) {
            setBookmark(false)
        } else {
            setBookmark(true)
        }
    }

    useEffect(() => {
        API.getImage().then((data) => {
            setImageList(data)
            console.log(imageList)
        })
    }, [like])

    return (
    <div className="container mx-auto">

        <div className="p-5 flex justify-center flex-col items-center ">
            {imageList.map((data) => {
                return <>
                <figure key={data.id} className="w-[50%] p-[1rem] rounded-lg figure-card mb-4">
                <Typography variant="small" className="mt-2 text-left text-[1.5rem] lilita-one-regular" color="brown" textGradient>
                    @{data.username}
                </Typography>
                <img
                    className="h-96 w-full rounded-md object-cover object-center"
                    src={data.image}
                    alt="nature image"
                    />
                <div className="flex flex-row justify-between">
                    {like ? (
                        <>
                        <FaHeart className="text-[2rem] mt-2 text-red-800" onClick={likeHandler} />
                        </>
                    ):(
                        <>
                        <FaRegHeart className="text-[2rem] mt-2" onClick={likeHandler} />

                        </>
                    )}
                    {bookmark ? (
                        <>
                        <FaBookmark className="text-[2rem] mt-2 text-yellow-800" onClick={bookmarkHandler}/>
                        </>
                    ):(
                        <>
                        <FaBookmark className="text-[2rem] mt-2" onClick={bookmarkHandler}/>
                        </>
                    )}
                </div>
                    <Typography variant="small" className="mt-2 text-left text-[1.2rem] handlee-regular">
                        {data.caption}
                    </Typography>
            </figure>
                </>
            })}

            
            
        </div>
    </div>
    );
}