/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import API from "../../utils/API";
import './style.css'
import { Button } from "@material-tailwind/react";
import { DefaultGallery } from '../../components/Gallery'
import { DialogDefault } from "../../components/UploadModal";

export default function Profile(props) {
    const [userData, setUserData] = useState({})


    const imageList = props.imageList
    let imageData = [];
    for (let i = 0; i < imageList.length; i++) {
        if (imageList[i].user == props.userId) {
            imageData.push(imageList[i])
        }
    }

    useEffect(() => {
        if (!props.userId) {
            window.location.href = '/login'
        } else {
            API.checkToken(props.token)
                .then((data) => { setUserData(data) })
        }
    }, [])



    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col relative">

                    <div className="handlee-regular text-[2rem] mt-3 text-center">Hello, {userData.username}!</div>

                    <div className="handlee-regular text-[1.5rem] md:mt-2 mt-5 text-center">
                        What is your pet&apos;s name? <Button variant="gradient" color="brown">Enter</Button>
                    </div>

                    <div className="handlee-regular text-[1.5rem] mt-5 text-right md:absolute md:top-0 md:right-20 absolute top-0 right-0 mr-2">
                        <DialogDefault userId={props.userId} token={props.token} />
                    </div>

                    <div className="w-full md:w-[85%] mx-auto mt-4">
                        <DefaultGallery imageList={imageData} />
                    </div>
                </div>
            </div>
        </>
    )
}
