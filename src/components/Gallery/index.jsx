// import { useState, useEffect } from "react";

export function DefaultGallery({imageList}) {
    let data = []
    for (let i = 0; i < imageList.length; i++) {
        data.push(imageList[i])
    }

    console.log(imageList)
    console.log(data)
   
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map(({ image, caption }, index) => (
          <div key={index}>
            <img
              className="h-full w-full max-w-full rounded-lg object-cover object-center"
              src={image}
              alt={caption}
            />
          </div>
        ))}
       
      </div>
    );
  }
   