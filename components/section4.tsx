'use client';

import Image from 'next/image';
import { StarIcon } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import AutoHeight from 'embla-carousel-auto-height';

import { VerticalPadding } from '@/components/ui/vertical-padding';
import {
  CarouselDotButton,
  useDotButton,
} from '@/components/ui/carousel-dot-button';
import {
  CarouselPrevButton,
  CarouselNextButton,
  usePrevNextButtons,
} from '@/components/ui/carousel-arrow-button';
import { cn } from '@/lib/utils';

const slides = Array.from(Array(5).keys());

export function Section4() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    // Autoplay(),
    AutoHeight(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <VerticalPadding className="bg-[#F9F9F9]">
      <div className="flex flex-col items-center gap-16">
        <h2>What our Client say’s</h2>

        <div className="relative w-full">
          <div
            className="overflow-hidden"
            ref={emblaRef}
          >
            <div className="transition-height flex items-start duration-200">
              {slides.map((index) => (
                <div
                  key={index}
                  className={cn(
                    'w-[60%] min-w-0 flex-shrink-0 flex-grow-0 px-10',
                    index === selectedIndex ? '' : 'opacity-50',
                  )}
                >
                  <div className="flex flex-col items-center gap-9 rounded-[48px] bg-white px-24 py-20 text-center">
                    <div className="flex gap-1.5">
                      {[0, 1, 2, 3, 4].map((item) => (
                        <StarIcon
                          key={item}
                          className="h-6 w-6 fill-yellow-400 stroke-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-lg">
                      Volutpat feugiat erat pellentesque platea rhoncus enim
                      pellentesque ac. Aliquam egestas enim cursus diam
                      adipiscing donec aliquam. Volutpat netus felis tempus
                      tellus
                    </p>
                    <div className="flex flex-col items-center gap-5">
                      <Image
                        src="https://ik.imagekit.io/kitabikincom/theme/test/7261c2ae940abab762a6e0130b36b3a9_clnxf92EI.jpeg?updatedAt=1714917491463"
                        width={56}
                        height={56}
                        alt="User"
                        className="rounded-full"
                      />
                      <p className="font-bold">Jim Harrisons</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 top-0 flex h-full w-[calc(60%+2%)] -translate-x-1/2 transform items-center justify-between">
            <CarouselPrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <CarouselNextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <CarouselDotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                'h-4 w-4 rounded-full border ',
                index === selectedIndex
                  ? 'border-primary bg-primary'
                  : 'border-neutral-500 bg-transparent',
              )}
            />
          ))}
        </div>
      </div>
    </VerticalPadding>
  );
}
