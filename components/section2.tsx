import Image from 'next/image';

import { VerticalPadding } from '@/components/ui/vertical-padding';
import { Gutter } from '@/components/ui/gutter';

export function Section2() {
  return (
    <VerticalPadding>
      <Gutter className="flex flex-col gap-10">
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-8 p-8 text-center">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primary"
            >
              <path d="M45.3332 15.9997V43.411L49.3332 47.4404L53.3332 43.411V15.9997H45.3332ZM45.3332 13.333H53.3332V8.03892H45.3332V13.333ZM55.9998 18.6663V43.9604C55.9998 44.3124 55.8607 44.65 55.6128 44.8998L50.2794 50.2724C49.7579 50.7977 48.9084 50.7977 48.3869 50.2724L43.0536 44.8998C42.8056 44.65 42.6665 44.3124 42.6665 43.9604V37.333H41.3332C39.124 37.333 37.3332 35.5421 37.3332 33.333V25.333C37.3332 23.1239 39.124 21.333 41.3332 21.333H42.6665V18.6663H15.9998V38.6663C15.9998 39.4027 15.4029 39.9997 14.6665 39.9997H13.3332C8.91489 39.9997 5.33317 43.5814 5.33317 47.9997C5.33317 52.4179 8.91489 55.9997 13.3332 55.9997H58.6665V18.6663H55.9998ZM55.9998 15.9997H59.9998C60.7362 15.9997 61.3332 16.5966 61.3332 17.333V57.333C61.3332 58.0694 60.7362 58.6663 59.9998 58.6663H13.3332C7.44213 58.6663 2.6665 53.8907 2.6665 47.9997V17.333C2.6665 10.7056 8.03909 5.33301 14.6665 5.33301C15.4029 5.33301 15.9998 5.92996 15.9998 6.66634V15.9997H42.6665V6.70559C42.6665 5.96921 43.2635 5.37226 43.9998 5.37226H54.6665C55.4029 5.37226 55.9998 5.96921 55.9998 6.70559V15.9997ZM42.6665 23.9997H41.3332C40.5968 23.9997 39.9998 24.5966 39.9998 25.333V33.333C39.9998 34.0694 40.5968 34.6663 41.3332 34.6663H42.6665V23.9997ZM5.33317 40.9441C7.28769 38.7297 10.1473 37.333 13.3332 37.333V8.09419C8.81011 8.74117 5.33317 12.631 5.33317 17.333V40.9441ZM22.6665 21.333H30.6665C32.8756 21.333 34.6665 23.1239 34.6665 25.333V33.333C34.6665 35.5421 32.8756 37.333 30.6665 37.333H22.6665C20.4574 37.333 18.6665 35.5421 18.6665 33.333V25.333C18.6665 23.1239 20.4574 21.333 22.6665 21.333ZM22.6665 23.9997C21.9301 23.9997 21.3332 24.5966 21.3332 25.333V33.333C21.3332 34.0694 21.9301 34.6663 22.6665 34.6663H30.6665C31.4029 34.6663 31.9998 34.0694 31.9998 33.333V25.333C31.9998 24.5966 31.4029 23.9997 30.6665 23.9997H22.6665ZM19.9998 45.333C19.2635 45.333 18.6665 44.7361 18.6665 43.9997C18.6665 43.2633 19.2635 42.6663 19.9998 42.6663H38.6665C39.4029 42.6663 39.9998 43.2633 39.9998 43.9997C39.9998 44.7361 39.4029 45.333 38.6665 45.333H19.9998ZM19.9998 50.6663C19.2635 50.6663 18.6665 50.0694 18.6665 49.333C18.6665 48.5966 19.2635 47.9997 19.9998 47.9997H41.3332C42.0695 47.9997 42.6665 48.5966 42.6665 49.333C42.6665 50.0694 42.0695 50.6663 41.3332 50.6663H19.9998Z" />
            </svg>

            <div className="text-lg font-bold">Customized Design</div>
            <p>
              Tailored designs that reflect your style and meet your functional
              needs.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 border-x border-gray-200 p-8 text-center">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3003_1471)">
                <path
                  d="M43.3531 42.8853L20.79 20.3223"
                  stroke="#0B57E0"
                  stroke-width="3.22329"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M54.6346 33.2145C54.6464 32.5764 54.5294 31.9423 54.2906 31.3504C54.0518 30.7585 53.6961 30.2208 53.2448 29.7694C52.7935 29.3181 52.2558 28.9624 51.6638 28.7236C51.0719 28.4848 50.4379 28.3678 49.7997 28.3796C49.1615 28.3914 48.5275 28.2744 47.9356 28.0356C47.3436 27.7968 46.8059 27.4411 46.3546 26.9898C45.9032 26.5384 45.5475 26.0007 45.3087 25.4088C45.07 24.8169 44.9529 24.1829 44.9648 23.5447C44.9766 22.9065 44.8596 22.2725 44.6208 21.6805C44.382 21.0886 44.0263 20.5509 43.5749 20.0996C43.1236 19.6482 42.5859 19.2925 41.994 19.0537C41.402 18.8149 40.768 18.6979 40.1298 18.7097C39.4916 18.7215 38.8576 18.6045 38.2657 18.3658C37.6738 18.127 37.1361 17.7713 36.6847 17.3199C36.2334 16.8686 35.8777 16.3309 35.6389 15.7389C35.4001 15.147 35.2831 14.513 35.2949 13.8748C35.3067 13.2366 35.1897 12.6026 34.9509 12.0107C34.7121 11.4187 34.3564 10.881 33.9051 10.4297C33.4537 9.97836 32.916 9.62266 32.3241 9.38386C31.7322 9.14507 31.0981 9.02807 30.46 9.03988"
                  stroke="#0B57E0"
                  stroke-width="3.22329"
                />
                <path
                  d="M11.1203 54.1661C11.1203 54.4849 11.0257 54.7965 10.8486 55.0615C10.6716 55.3266 10.4199 55.5331 10.1254 55.6551C9.83089 55.7771 9.50684 55.809 9.19421 55.7468C8.88159 55.6846 8.59441 55.5311 8.36901 55.3058C8.14362 55.0804 7.99012 54.7932 7.92794 54.4806C7.86575 54.1679 7.89768 53.8439 8.01966 53.5494C8.14165 53.2549 8.3482 53.0032 8.61323 52.8261C8.87827 52.649 9.18987 52.5545 9.50862 52.5545C9.72364 52.5416 9.93894 52.5744 10.1403 52.6508C10.3417 52.7272 10.5246 52.8455 10.6769 52.9978C10.8292 53.1502 10.9475 53.333 11.0239 53.5344C11.1004 53.7358 11.1332 53.9511 11.1203 54.1661Z"
                  stroke="#0B57E0"
                  stroke-width="3.22329"
                />
                <path
                  d="M24.0134 45.6246C24.5273 44.8972 25.2467 44.3398 26.0794 44.024C26.9121 43.7081 27.8202 43.6482 28.6872 43.8518L38.6794 47.2362C39.1531 47.372 39.6537 47.384 40.1333 47.2712C40.613 47.1583 41.0557 46.9243 41.4192 46.5916L61.7259 26.2849C61.8786 26.1393 62.0002 25.9643 62.0832 25.7704C62.1663 25.5764 62.2092 25.3677 62.2092 25.1567C62.2092 24.9458 62.1663 24.737 62.0832 24.5431C62.0002 24.3492 61.8786 24.1741 61.7259 24.0286L39.8075 2.11021C39.662 1.95749 39.4869 1.83593 39.293 1.75286C39.0991 1.6698 38.8903 1.62695 38.6794 1.62695C38.4684 1.62695 38.2596 1.6698 38.0657 1.75286C37.8718 1.83593 37.6968 1.95749 37.5512 2.11021L17.2445 22.4169C16.9038 22.7755 16.6646 23.2181 16.5513 23.6996C16.438 24.181 16.4548 24.6839 16.5998 25.1567L19.9843 35.1489C20.2401 36.0146 20.2053 36.9404 19.8851 37.7844C19.565 38.6285 18.9771 39.3444 18.2115 39.8227L4.02904 48.5256C2.51164 50.043 1.65918 52.101 1.65918 54.2469C1.65918 56.3928 2.51164 58.4509 4.02904 59.9682C5.54643 61.4856 7.60444 62.3381 9.75035 62.3381C11.8963 62.3381 13.9543 61.4856 15.4717 59.9682L24.0134 45.6246Z"
                  stroke="#0B57E0"
                  stroke-width="3.22329"
                />
              </g>
              <defs>
                <clipPath id="clip0_3003_1471">
                  <rect
                    width="64"
                    height="64"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="text-lg font-bold">Quality Craftsmanship</div>
            <p>
              Skilled professionals using top-quality materials for lasting
              results.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 p-8 text-center">
            <svg
              width="58"
              height="62"
              viewBox="0 0 58 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3003_1461)">
                <path
                  d="M55.1666 37.3346V32.0013C55.1666 21.9447 55.1666 16.9164 52.0423 13.7922C48.9183 10.668 43.8898 10.668 33.8333 10.668H23.1666C13.1099 10.668 8.08165 10.668 4.95744 13.7922C1.83325 16.9164 1.83325 21.9447 1.83325 32.0013V37.3346C1.83325 47.3912 1.83325 52.4197 4.95744 55.5437C8.08165 58.668 13.1099 58.668 23.1666 58.668H33.8333"
                  stroke="#0B57E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M15.1667 10.668V6.66797"
                  stroke="#0B57E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M41.8333 10.668V6.66797"
                  stroke="#0B57E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M1.83325 24H55.1666"
                  stroke="#0B57E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M44.5 56C48.9183 56 52.5 52.4183 52.5 48C52.5 43.5817 48.9183 40 44.5 40C40.0817 40 36.5 43.5817 36.5 48C36.5 52.4183 40.0817 56 44.5 56Z"
                  stroke="#0B57E0"
                  stroke-width="4"
                />
                <path
                  d="M51.1667 54.668L55.1667 58.668"
                  stroke="#0B57E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3003_1461">
                  <rect
                    width="58"
                    height="62"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="text-lg font-bold">Project Management</div>
            <p>
              From initial concept to final touches, we handle every detail of
              your project.
            </p>
          </div>
        </div>

        <div className="relative h-[626px]">
          <Image
            src="https://ik.imagekit.io/kitabikincom/theme/test/ed52b4bbf7850125ee5e6db5fb9dde3a_FQYICXNb-.jpeg?updatedAt=1714917497870"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            alt="Section 2"
            className="rounded-[70px]"
          />
        </div>
      </Gutter>
    </VerticalPadding>
  );
}
