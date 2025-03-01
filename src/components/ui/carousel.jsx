import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const Carousel = React.forwardRef(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    }, plugins)

    React.useEffect(() => {
      if (setApi) setApi(emblaApi)
    }, [emblaApi, setApi])

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        {...props}>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    size={size}
    className={cn("absolute left-4 top-1/2 -translate-y-1/2", className)}
    {...props}>
    <ArrowLeft className="h-4 w-4" />
    <span className="sr-only">Previous slide</span>
  </Button>
))
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    size={size}
    className={cn("absolute right-4 top-1/2 -translate-y-1/2", className)}
    {...props}>
    <ArrowRight className="h-4 w-4" />
    <span className="sr-only">Next slide</span>
  </Button>
))
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
