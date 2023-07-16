'use client'

import { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { HiArrowDownCircle, HiArrowRightCircle, HiChevronLeft, HiChevronRight, HiXMark } from 'react-icons/hi2'

import 'swiper/css'
import 'swiper/css/navigation'

interface ICustomerGroupProps {}

const CUSTOMER_GROUPS = [
  {
    name: 'คลินิก สถานเสริมความงาม',
    image: '/images/cosmetology-doctor-patien.webp',
  },
  {
    name: 'ร้านอาหาร ภัตตาคาร',
    image: '/images/restaurant-interior.webp',
  },
  {
    name: 'ที่พัก โรงแรม รีสอร์ท',
    image:
      '/images/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer.webp',
  },
  {
    name: 'โรงงานอุตสาหกรรม',
    image: '/images/environmental-pollution-industry-exterior.webp',
  },
  { name: 'ธุรกิจขนส่ง/รับส่งสินค้า', image: '/images/young-man-checking-details-parcels-before-delivery.webp' },
  { name: 'รับเหมาก่อสร้าง/ตกแต่ง/ต่อเติม', image: '/images/large-building-site.webp' },
  {
    name: 'บริษัท ห้างร้าน ห้างหุ้นส่วนฯ',
    image:
      '/images/millennial-group-young-businesspeople-asia-businessman-businesswoman-celebrate-giving-five-after-dealing-feeling-happy-signing-contract-agreement-meeting-room-small-modern-office.webp',
  },
]

export const CustomerGroup: FC<ICustomerGroupProps> = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1)
  const [showPreview, setShowPreview] = useState<boolean>(false)

  return (
    <>
      <div className="grid grid-cols-12 md:gap-4 py-4 md:py-0">
        <div className="col-span-full md:col-span-3 xl:col-span-2 flex flex-col justify-center items-center md:items-end mb-3 md:mb-0">
          <p className="text-white text-xl md:text-lg font-medium mb-2">ไม่ว่าจะเป็นธุรกิจแบบไหน</p>
          <HiArrowRightCircle className="hidden md:block text-secondary text-4xl" />
          <HiArrowDownCircle className="md:hidden text-secondary text-4xl" />
        </div>

        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              loopedSlides: 2,
            },
            768: {
              slidesPerView: 3,
              loopedSlides: 2,
            },
            1024: {
              slidesPerView: 4,
              loopedSlides: 3,
            },
          }}
          loop
          navigation
          modules={[Navigation]}
          className="col-span-full md:col-span-9 xl:col-span-10 w-full"
        >
          {CUSTOMER_GROUPS.map((customerGroup, index) => (
            <SwiperSlide
              key={`customer-group-${index}`}
              className="relative text-white hover:brightness-50 cursor-pointer"
              onClick={() => {
                setSelectedImageIndex(index)
                setShowPreview(true)
              }}
            >
              <img src={customerGroup.image} alt="Customer Group" className="w-full aspect-[3/2] object-cover" />
              <div
                className={`absolute left-0 bottom-0 w-full bg-gradient-to-r ${
                  index % 2 === 0 ? 'from-primary-600/75 via-primary/75 to-primary-600/75' : 'from-secondary-500/75 via-secondary/75 to-secondary-500/75'
                } text-white text-base md:text-sm text-center py-1 md:py-0.5`}
              >
                {customerGroup.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {showPreview ? (
        <div className="fixed inset-0 flex flex-col w-screen h-screen bg-black bg-opacity-90 z-999">
          <div className="flex justify-between items-center w-full p-6">
            <div className="text-white text-xl">{`${selectedImageIndex + 1} / ${CUSTOMER_GROUPS.length}`}</div>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl text-center">{CUSTOMER_GROUPS[selectedImageIndex].name}</h3>
            <HiXMark className="text-white text-4xl cursor-pointer" onClick={() => setShowPreview(false)} />
          </div>
          <div className="flex-1 flex justify-center items-center py-12">
            {selectedImageIndex > 0 ? (
              <div className="absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}>
                <HiChevronLeft className="w-12 h-12 text-white" />
              </div>
            ) : null}
            {CUSTOMER_GROUPS.map((customerGroup, index) => (
              <img
                key={`customer-group-image-preview-${index}`}
                src={customerGroup.image}
                alt="Customer Group"
                className={`${selectedImageIndex !== index ? 'hidden' : ''} w-[95vh]`.trim()}
              />
            ))}
            {selectedImageIndex < CUSTOMER_GROUPS.length - 1 ? (
              <div className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}>
                <HiChevronRight className="w-12 h-12 text-white" />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}
