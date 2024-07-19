/* eslint-disable react/prop-types */
import { useState } from 'react'
// import API from '../../utils/API'
import { Typography } from "@material-tailwind/react";
import './style.css'
import { FaBookmark, FaRegHeart, FaHeart } from "react-icons/fa";

export default function ImageCard(props) {
    // const [likes, setLikes] = useState(props.imageList.likes)
    const [isLiked, setIsLiked] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)

    const handleLike = () => {
        if (!props.userId) {
            alert('You must log in to like an image!')
        } else {
            if (!isLiked) {
                setIsLiked(true)
            } else {
                setIsLiked(false)
            }
        }
        
    }
    
    const handleBookmark = () => {
        if (!props.userId) {
            alert('You must log in to bookmark an image!')
        } else {
            if (!isBookmarked) {
                setIsBookmarked(true)
            } else {
                setIsBookmarked(false)
            }
        }
    }

    return (
        <>
            <figure className="w-[50%] p-[1rem] rounded-lg figure-card mb-4">
                <Typography variant="small" className="mt-2 text-left text-[1.5rem] lilita-one-regular" color="brown" textGradient>
                    @{props.username}
                </Typography>
                <img
                    className="h-96 w-full rounded-md object-cover object-center"
                    src={props.imageUrl}
                    alt="nature image"
                />
                <div className="flex flex-row justify-between">
                    {isLiked ? (
                        <>
                            <FaHeart className="text-[2rem] mt-2 text-red-800 cursor-pointer" onClick={handleLike} />
                        </>
                    ) : (
                        <>
                            <FaRegHeart className="text-[2rem] mt-2 cursor-pointer" onClick={handleLike} />

                        </>
                    )}
                    {isBookmarked ? (
                        <>
                            <FaBookmark className="text-[2rem] mt-2 text-yellow-800 cursor-pointer" onClick={handleBookmark} />
                        </>
                    ) : (
                        <>
                            <FaBookmark className="text-[2rem] mt-2 cursor-pointer" onClick={handleBookmark} />
                        </>
                    )}
                </div>
                <Typography variant="small" className="mt-2 text-left text-[1.2rem] handlee-regular">
                    {props.imageCap}
                </Typography>
            </figure>
            
        </>
    )
}
