"use client"
import Image from "next/image"
import { urlForImage } from "/./sanity/lib/image"
import { useState } from "react"

const galleryProps = {
  images: [],
};

function ImageGallery({ images } = galleryProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 mb-20 lg:grid-cols-5">
      <div className="order-last justify-center flex gap-4 sm:justify-normal lg:order-none lg:flex-col">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="w-[75px] overflow-hidden rounded-lg bg-gray-100 sm:w-[175px] "
          >
            <Image
              src={urlForImage(image)}
              width={300}
              height={300}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer hover:scale-110"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative ml-[25px] mb-20 w-[300px] overflow-hidden rounded-lg bg-gray-100 sm:ml-20 sm:w-[450px] sm:h-[500px] lg:col-span-4">
        <Image
          src={urlForImage(bigImage)}
          width={500}
          height={500}
          alt="photo"
          className="object-cover object-center h-full w-full"
        />
      </div>
    </div>
  );
}

export default ImageGallery;
