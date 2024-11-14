

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from './ui/carousel'
import { Card , CardContent } from './ui/card'


const carouselImages = [
    'https://images.pexels.com/photos/19358148/pexels-photo-19358148/free-photo-of-river-and-forest-on-hill-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/26087617/pexels-photo-26087617/free-photo-of-the-hike-to-hoodoos-in-banff-national-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12327637/pexels-photo-12327637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]
const HeroCarousel = () => {
  return (
    <div className='hidden lg:block'>
    <Carousel>
      <CarouselContent>
        {carouselImages.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className='p-2'>
                <img
                  src={image}
                  alt='hero'
                  className='w-full h-[24rem]  rounded-md object-cover'
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
  )
}

export default HeroCarousel