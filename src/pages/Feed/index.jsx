import { Typography } from "@material-tailwind/react";
import './style.css'
import { FaBookmark, FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
 
export default function ImgWithCaption() {
    const [like, setLike] = useState(false)
    const [bookmark, setBookmark] = useState(false)
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

    return (
    <div className="container mx-auto">

        <div className="p-5 flex justify-center flex-col items-center ">

            <figure className="w-[50%] p-[1rem] rounded-lg figure-card mb-4">
                <Typography variant="small" className="mt-2 text-left text-[1.5rem] lilita-one-regular" color="brown" textGradient>
                    @eric
                </Typography>
                <img
                    className="h-96 w-full rounded-md object-cover object-center"
                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
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
                        Having fun at the beach!
                    </Typography>
            </figure>
            
        </div>
    </div>
    );
}