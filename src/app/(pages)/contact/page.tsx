"use client";
import Wrapper from '@/app/Wrapper';
import Header from '@/components/Header'
import TabLoader from '@/components/Loader';
import SplitText from '@/components/SplitText'
import TicketButton from '@/components/TicketButton'
import Link from 'next/link';

export default function Contact() {
    const handleAnimationComplete = () => {
    };
    return (
        <Wrapper>
            {/* <TabLoader direction="top" speed={1.4} /> */}
            <div className='bg-[#e0d1be] min-h-screen'>
                <Header />
                <div className="mx-auto max-w-[1450px] px-4 md:px-6 lg:px-14 pt-20 pb-10 md:pb-44">
                    <div className="grid grid-cols-1  lg:grid-cols-2 md:gap-14 gap-8">
                        <div className="">
                            <p className="text-sm text-[#4a5246]/90 mb-5">
                                Send us an email, or call us.
                            </p>
                            <Link href={"mailto:info@bondandvale.com"}>
                                <SplitText
                                    text="info@bondandvale.com"
                                    className="font-[PPPangaia] uppercase hover:underline !text-start leading-tight text-[clamp(1.5rem,5.5vw,2.2rem)] max-w-xl"
                                    delay={150}
                                    duration={2}
                                    splitType="lines"
                                    from={{ opacity: 0, y: 100 }}
                                    onLetterAnimationComplete={handleAnimationComplete}
                                />

                            </Link>
                        </div>
                        <form className="space-y-2">
                            <div className="grid grid-cols-2 md:gap-4 gap-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm text-[#4a5246]/90"
                                    >
                                        Email Address

                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="w-full bg-[#f4ebd0]/70 mt-1 px-4 py-2.5 outline-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm text-[#4a5246]/90"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        className="w-full bg-[#f4ebd0]/70 mt-1 px-4 py-2.5 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm text-[#4a5246]/90"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={1}
                                    className="w-full bg-[#f4ebd0]/70 mt-1 px-4 py-2.5 outline-none resize-none"
                                />
                            </div>

                            <p className="text-sm text-[#4a5246]/90 mb-5">
                                By clicking Let's Bond, you agree to our Terms and Conditions and Privacy Policy
                            </p>

                            <TicketButton href="/contact" label="Let's Bond" />
                        </form>


                    </div>


                    <div className="mt-40">
                        <p className='text-sm opacity-50 max-w-xs'>PLAN AN INTRODUCTORY CALL WITH
                            ONE OF OUR CONSULTANTS</p>
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}
