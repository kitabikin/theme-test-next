import Image from 'next/image';

import { cn } from '@/lib/utils';
import { VerticalPadding } from '@/components/ui/vertical-padding';
import { Gutter } from '@/components/ui/gutter';
import { Button } from '@/components/ui/button';

const lists = [
  {
    image:
      'https://ik.imagekit.io/kitabikincom/theme/test/84df334b3a734cc789d813a0b6969357_h3gPEJQBgI.png?updatedAt=1715054483711',
    title: 'Modern Kitchen Remodel',
    description:
      "See how we've transformed a dated kitchen into a modern culinary oasis",
    href: '/',
  },
  {
    image:
      'https://ik.imagekit.io/kitabikincom/theme/test/2814296d3ab0483e6bed9796f9588124_W7m18M4jm.jpeg?updatedAt=1715054476456',
    title: 'Eco-Friendly Living Room Update',
    description:
      'Discover the sustainable materials and smart designs featured in this cozy living room makeover.',
    href: '/',
  },
  {
    image:
      'https://ik.imagekit.io/kitabikincom/theme/test/3dec53c12dcf4895c95537b65ccf755b_vlNlHVVIx.jpeg?updatedAt=1715054477890',
    title: 'Outdoor Living Space Expansion',
    description:
      'Learn about the addition of a new deck and outdoor kitchen that redefined backyard entertainment.',
    href: '/',
  },
];

export function Section3() {
  return (
    <VerticalPadding>
      <Gutter>
        <div className="grid grid-cols-2 gap-x-16 gap-y-60">
          <div className="flex flex-col gap-10 pl-28 pr-12">
            <h2>
              Showcase of <br />
              <span className="text-primary">Transformations</span>
            </h2>
            <p>
              Dive into our portfolio of recent projects that highlight our
              expertise in turning visions into reality. From functional
              makeovers to aesthetic revamps, discover the potential of your
              space with these inspiring transformations.
            </p>
          </div>
          {lists.map((item, index) => (
            <div
              key={index}
              className={cn(
                'relative h-[670px]',
                index % 2 === 0 ? '-mt-20' : '-mt-96',
              )}
            >
              <svg
                height="0"
                width="0"
                className="h-0 w-0"
                viewBox="0 0 614 624"
              >
                <defs>
                  <clipPath
                    id="image-clip"
                    clipPathUnits="objectBoundingBox"
                    transform="scale(0.00162866449, 0.0016025641)"
                  >
                    <path d="M614 40C614 17.9086 596.091 0 574 0H40.3543C18.2629 0 0.35437 17.9086 0.35437 40V312V358C0.35437 380.091 18.2629 398 40.3544 398H351.258C373.35 398 391.258 415.909 391.258 438V584C391.258 606.091 409.167 624 431.258 624H574C596.091 624 614 606.091 614 584V40Z" />
                  </clipPath>
                </defs>
              </svg>

              <Image
                src={item.image}
                sizes="100vw"
                alt="Hero"
                className="absolute h-[670px] w-full"
                fill
                style={{
                  clipPath: 'url(#image-clip)',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />

              <div className="absolute bottom-0 left-0 -mb-4 flex w-[62%] flex-col gap-4 p-8 pb-0">
                <h3>{item.title}</h3>
                <p className="text-sm">{item.description}</p>
                <div className="flex items-center">
                  <Button
                    variant="link"
                    className="pl-0"
                  >
                    Learn More
                  </Button>
                  <hr className="w-20 border border-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Gutter>
    </VerticalPadding>
  );
}
