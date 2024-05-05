import Image from 'next/image';

import { cn } from '@/lib/utils';
import { VerticalPadding } from '@/components/ui/vertical-padding';
import { Gutter } from '@/components/ui/gutter';

const image = [
  {
    title: 'Section 1',
    src: 'https://ik.imagekit.io/kitabikincom/theme/test/9f20de3d2de32e0a5ae0158b2e9f3d48_21vQTrvU4.jpeg?updatedAt=1714917496411',
  },
  {
    title: 'Section 2',
    src: 'https://ik.imagekit.io/kitabikincom/theme/test/f71ca2d3a0355abbcd729e47b6f3bc48_cm15WTc4k.jpeg?updatedAt=1714917497127',
  },
];

export function Section1() {
  return (
    <VerticalPadding>
      <Gutter className="flex flex-col gap-24">
        <div className="grid grid-cols-2">
          <h2>
            Why Choose <br />
            <span className="text-primary">Blueprint Builders?</span>
          </h2>

          <p>
            With years of experience and a dedication to excellence, we at
            Blueprint Builders provide personalized and high-quality home
            improvement solutions. Our commitment to your satisfaction is what
            sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-8">
          {image.map((item, index) => (
            <div
              className={cn(
                'relative h-[624px]',
                index % 2 === 0 ? 'mt-12' : '-mt-12',
              )}
              key={index}
            >
              <Image
                src={item.src}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                alt={item.title}
                className="rounded-[70px]"
              />
            </div>
          ))}
        </div>
      </Gutter>
    </VerticalPadding>
  );
}
