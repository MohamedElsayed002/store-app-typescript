

import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import HeroCarousel from "./HeroCarousel"


const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                We're changing the way people shop.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis totam hic, mollitia rerum eveniet voluptatem tempora aut debitis voluptatum? Officiis dolore quo ex animi. Recusandae quibusdam nemo repellat natus sint quae debitis deleniti animi corporis ad illum perferendis odio, sed dolore, facere eum optio unde neque totam nisi fugiat?
            </p>
            <Button asChild size='lg' className="mt-10">
                <Link to='/products'>Our Products</Link>
            </Button>
        </div>
        <HeroCarousel/>
    </section>
  )
}

export default Hero