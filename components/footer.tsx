import Link from 'next/link';

import { VerticalPadding } from '@/components/ui/vertical-padding';
import { Gutter } from '@/components/ui/gutter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <VerticalPadding
      top="none"
      bottom="none"
      className="bg-primary py-20 text-white"
    >
      <Gutter>
        <div className="flex flex-col gap-20">
          <div className="flex justify-between gap-32">
            <div className="flex w-[500px] flex-col gap-7">
              <h2 className="text-[50px]">Blueprint Builders</h2>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Input
                    placeholder="Enter your email"
                    className="h-14 text-foreground"
                  />
                  <Button
                    size="lg"
                    variant="secondary"
                  >
                    Subscribe
                  </Button>
                </div>
                <div className="text-[12px]">
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex w-48 flex-col gap-4">
                <div className="text-lg font-bold">Information</div>
                <div className="flex flex-col gap-2 text-sm">
                  <Link
                    href="/"
                    className="hover:underline hover:underline-offset-4"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Latest Projects
                  </Link>
                  <Link
                    href="/"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="flex w-48 flex-col gap-4">
                <div className="text-lg font-bold">Follow Us</div>
                <div className="flex flex-col gap-3 text-sm">
                  <Link
                    href="/"
                    className="inline-flex hover:underline hover:underline-offset-4"
                  >
                    <svg
                      className="mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12.3033C22 6.7467 17.5229 2.24219 12 2.24219C6.47715 2.24219 2 6.7467 2 12.3033C2 17.325 5.65684 21.4874 10.4375 22.2422V15.2116H7.89844V12.3033H10.4375V10.0867C10.4375 7.56515 11.9305 6.17231 14.2146 6.17231C15.3088 6.17231 16.4531 6.36882 16.4531 6.36882V8.8448H15.1922C13.95 8.8448 13.5625 9.62041 13.5625 10.4161V12.3033H16.3359L15.8926 15.2116H13.5625V22.2422C18.3432 21.4874 22 17.3252 22 12.3033Z"
                        fill="white"
                      />
                    </svg>
                    Facebook
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex hover:underline hover:underline-offset-4"
                  >
                    <svg
                      className="mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3.24219H8C5.23858 3.24219 3 5.48077 3 8.24219V16.2422C3 19.0036 5.23858 21.2422 8 21.2422H16C18.7614 21.2422 21 19.0036 21 16.2422V8.24219C21 5.48077 18.7614 3.24219 16 3.24219ZM19.25 16.2422C19.2445 18.0348 17.7926 19.4867 16 19.4922H8C6.20735 19.4867 4.75549 18.0348 4.75 16.2422V8.24219C4.75549 6.44954 6.20735 4.99768 8 4.99219H16C17.7926 4.99768 19.2445 6.44954 19.25 8.24219V16.2422ZM16.75 8.49219C17.3023 8.49219 17.75 8.04447 17.75 7.49219C17.75 6.93991 17.3023 6.49219 16.75 6.49219C16.1977 6.49219 15.75 6.93991 15.75 7.49219C15.75 8.04447 16.1977 8.49219 16.75 8.49219ZM12 7.74219C9.51472 7.74219 7.5 9.75691 7.5 12.2422C7.5 14.7275 9.51472 16.7422 12 16.7422C14.4853 16.7422 16.5 14.7275 16.5 12.2422C16.5027 11.0479 16.0294 9.90176 15.1849 9.05727C14.3404 8.21278 13.1943 7.73953 12 7.74219ZM9.25 12.2422C9.25 13.761 10.4812 14.9922 12 14.9922C13.5188 14.9922 14.75 13.761 14.75 12.2422C14.75 10.7234 13.5188 9.49219 12 9.49219C10.4812 9.49219 9.25 10.7234 9.25 12.2422Z"
                        fill="white"
                      />
                    </svg>
                    Instagram
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex hover:underline hover:underline-offset-4"
                  >
                    <svg
                      className="mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z"
                        fill="white"
                      />
                    </svg>
                    X
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex hover:underline hover:underline-offset-4"
                  >
                    <svg
                      className="mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z"
                        fill="white"
                      />
                    </svg>
                    LinkedIn
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex hover:underline hover:underline-offset-4"
                  >
                    <svg
                      className="mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5931 7.20301C21.4792 6.78041 21.2566 6.39501 20.9475 6.08518C20.6383 5.77534 20.2534 5.55187 19.8311 5.43701C18.2651 5.00701 12.0001 5.00001 12.0001 5.00001C12.0001 5.00001 5.73609 4.99301 4.16909 5.40401C3.74701 5.52415 3.36291 5.75078 3.05365 6.06214C2.7444 6.3735 2.52037 6.75913 2.40309 7.18201C1.99009 8.74801 1.98609 11.996 1.98609 11.996C1.98609 11.996 1.98209 15.26 2.39209 16.81C2.62209 17.667 3.29709 18.344 4.15509 18.575C5.73709 19.005 11.9851 19.012 11.9851 19.012C11.9851 19.012 18.2501 19.019 19.8161 18.609C20.2386 18.4943 20.6238 18.2714 20.9337 17.9622C21.2436 17.653 21.4675 17.2682 21.5831 16.846C21.9971 15.281 22.0001 12.034 22.0001 12.034C22.0001 12.034 22.0201 8.76901 21.5931 7.20301ZM9.99609 15.005L10.0011 9.00501L15.2081 12.01L9.99609 15.005Z"
                        fill="white"
                      />
                    </svg>
                    Youtube
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <hr className="border-white" />
            <div className="flex items-center justify-between text-xs text-neutral-100">
              <div>© 2024. All rights reserved.</div>
              <nav className="flex gap-6">
                <Link
                  href="/"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Cookies Settings
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </Gutter>
    </VerticalPadding>
  );
}
