import Image from 'next/image';
import { StarIcon } from 'lucide-react';

import { Gutter } from '@/components/ui/gutter';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <Gutter className="my-20">
      <div className="relative">
        <svg
          height="0"
          width="0"
          className="h-0 w-0"
          viewBox="0 0 1440 840"
        >
          <defs>
            <clipPath
              id="hero-clip"
              clipPathUnits="objectBoundingBox"
              transform="scale(0.00069444444, 0.00119047619)"
            >
              <path
                d="M0 113.134C0 73.1377 0 53.1396 7.90852 37.9176C14.573 25.0903 25.0337 14.6314 37.8632 7.96816C53.0878 0.0610352 73.0894 0.0610352 113.093 0.0610352H1326.91C1366.91 0.0610352 1386.91 0.0610352 1402.13 7.96816C1414.96 14.6314 1425.42 25.0903 1432.09 37.9176C1440 53.1396 1440 73.1377 1440 113.134V515.291C1440 555.288 1440 575.285 1432.09 590.508C1425.42 603.335 1414.96 613.794 1402.13 620.457C1386.91 628.364 1366.91 628.364 1326.91 628.364H637.727C597.724 628.364 577.722 628.364 562.498 636.271C549.667 642.935 539.208 653.394 532.543 666.221C524.634 681.442 524.634 701.441 524.634 741.437V763.577C524.634 790.449 524.634 803.886 519.321 814.113C514.843 822.731 507.815 829.758 499.195 834.234C488.966 839.548 475.527 839.548 448.65 839.548H360H113.093C73.0894 839.548 53.0878 839.548 37.8632 831.64C25.0337 824.977 14.573 814.518 7.90852 801.691C0 786.469 0 766.471 0 726.475V113.134Z"
                fill="none"
              />
            </clipPath>
          </defs>
        </svg>

        <Image
          src="https://ik.imagekit.io/kitabikincom/theme/test/a3eba04f78f463834d9ef9b87671754e_xVEYl3vCz.jpeg?updatedAt=1714917496231"
          sizes="100vw"
          alt="Hero"
          className="absolute w-full lg:h-[560px] xl:h-[804px] 2xl:h-[858px]"
          fill
          style={{
            clipPath: 'url(#hero-clip)',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        <div className="relative flex w-[835px] flex-col items-start justify-center gap-10 px-14 text-white lg:h-[560px] xl:h-[804px] 2xl:h-[858px]">
          <h1 className="text-[100px]">Crafting Your Ideal Home</h1>
          <p>
            Expert home improvement services to bring <br />
            your dream space to life.
          </p>
          <Button size="lg">Request a Consultation</Button>
        </div>

        <div className="absolute bottom-0 right-0 flex w-[62%] flex-col gap-4 p-8 pb-0">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3, 4].map((item) => (
              <StarIcon
                key={item}
                className="h-6 w-6 fill-yellow-400 stroke-yellow-400"
              />
            ))}
          </div>
          <p>
            &quot;The team at Blueprint Builder transformed our house with
            impeccable craftsmanship and attention to detail. Our home has never
            felt more inviting!&quot;
          </p>
          <div className="flex items-center gap-5">
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
    </Gutter>
  );
}
