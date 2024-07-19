/* eslint-disable react/prop-types */
import { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import API from "../../utils/API";

export function DialogDefault({token}) {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(null)
    const [caption, setCaption] = useState('')

    const handleOpen = () => {
        setOpen(!open)
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const uploadImage = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('caption', caption);

        try {
            API.uploadImage(formData, token ).then((data) => {
                console.log('image uploaded successfully', data)
                setImage(null)
                setCaption('')
            })
            
        } catch (error) {
            console.error('Error uploading image', error);
        }
    }

    return (
        <>
            <Button onClick={handleOpen} variant="gradient" color="deep-orange">
                Upload
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Upload your dog pictures!</DialogHeader>
                <DialogBody>
                    <form onSubmit={uploadImage}>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        <textarea type="text" placeholder="Caption" className="mt-4 peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !resize-none mt-4"
                            value={caption} 
                            onChange={(e) => setCaption(e.target.value)} 
                            />

                        {/* <button type="submit">Upload</button> */}
                    <div className="flex justify-end">

                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                            >
                            <span>Cancel</span>
                        </Button>
                        <Button type="submit" variant="gradient" color="deep-orange" onClick={handleOpen} >
                            <span>Upload!</span>
                        </Button>
                    </div>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}