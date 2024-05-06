import Image from 'next/image';

import { VerticalPadding } from '@/components/ui/vertical-padding';
import { Gutter } from '@/components/ui/gutter';
import { Button } from '@/components/ui/button';

export function Section5() {
  return (
    <VerticalPadding
      top="none"
      bottom="none"
      className="relative"
    >
      <Image
        src="https://ik.imagekit.io/kitabikincom/theme/test/314ca29d433e02f8769ce6d074b090bd_ITh48J1z8.jpeg?updatedAt=1715004198633"
        alt="Photo by Annie Spratt on Unsplash"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <Gutter className="relative py-40">
        <div className="flex flex-col items-center gap-10 text-center">
          <h2 className="text-white">
            Start Your Home <br />
            Transformation Today
          </h2>

          <Button size="lg">Request a Consultation</Button>
        </div>
      </Gutter>
    </VerticalPadding>
  );
}
