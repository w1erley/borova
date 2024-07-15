"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { baseBackendUrl } from '../../../../utils/constants';

import Image from 'next/image';
import Loading from '../Loading';

import axios from 'axios';

// Install Swiper modules

const ImageSwiper = ({memberId}) => {
  const [photos, setPhotos] = useState([]);
  const [profilePath, setProfilePath] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to read file names from the directory
  useEffect(() => {
    console.log("photos", photos);
  }, [photos])

  useEffect(() => {
    const getPhotoNames = async () => {
      try {
        setIsLoading(true);
        // Read the directory
        const { data } = await axios.get(`${baseBackendUrl}/members/memberPhotos`, {
          params: { memberId }
        })
        setPhotos(data.files);
        setProfilePath(data.profilePath);
      } catch (error) {
        console.error('Error reading directory:', error);
        return [];
      }
      finally {
        setIsLoading(false);
      }
    };

    getPhotoNames();
  }, [])

  const slides = [
    { id: 1, title: 'Slide 1', content: 'Content for Slide 1' },
    { id: 2, title: 'Slide 2', content: 'Content for Slide 2' },
    { id: 3, title: 'Slide 3', content: 'Content for Slide 3' },
  ];

  return (
    <>
      {isLoading ?
        <Loading/>
      :
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={`photo-${index}`}>
              <div className='flex flex-col px-[50px] pb-10'>
                <Image 
                src={`/${profilePath}/photos/${photo}`} 
                width={350}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </>
  );
};

export default ImageSwiper;
