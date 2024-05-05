import { VerticalPadding } from '@/components/ui/vertical-padding';
import { Gutter } from '@/components/ui/gutter';
import { Button } from '@/components/ui/button';

import { Section1 } from '@/components/section1';
import { Section2 } from '@/components/section2';
import { Section3 } from '@/components/section3';
import { Section4 } from '@/components/section4';
import { Section5 } from '@/components/section5';

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <VerticalPadding>
        <Gutter>
          <div className="flex flex-col gap-8">
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
            <h4>H4</h4>
            <h5>H5</h5>
            <h6>H6</h6>
          </div>
          <br />
          <div className="flex gap-8 p-2">
            <Button size="sm">Button CTA</Button>
            <Button>Button CTA</Button>
            <Button size="lg">Button CTA</Button>
          </div>
          <br />
          <div className="flex gap-8 bg-neutral-300 p-2">
            <Button
              variant="secondary"
              size="sm"
            >
              Button CTA
            </Button>
            <Button variant="secondary">Button CTA</Button>
            <Button
              variant="secondary"
              size="lg"
            >
              Button CTA
            </Button>
          </div>
          <br />
          <div className="flex gap-8 p-2">
            <Button
              variant="link"
              size="sm"
            >
              Button CTA
            </Button>
            <Button variant="link">Button CTA</Button>
            <Button
              variant="link"
              size="lg"
            >
              Button CTA
            </Button>
          </div>
          <br />
          <p>Lorem ipsum</p>
        </Gutter>
      </VerticalPadding>
    </>
  );
}
