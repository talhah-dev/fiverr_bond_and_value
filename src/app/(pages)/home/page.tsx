import Header from '@/components/Header'
import TicketButton from '@/components/TicketButton'

export default function HomePage() {
  return (
    <div className='bg-[#e6d7c4] min-h-screen'>
      {/* <Loader/> */}
      <div className="relative">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videobg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/50" />
        <Header />
        <section className="relative h-[calc(100vh-6rem)] w-full flex items-center justify-center overflow-hidden">
          {/* Background Video */}

          {/* Dark overlay (so text is readable) */}

          {/* Content */}
          <div className="relative z-[2] flex md:h-full w-full  flex-col ">
            {/* Center Title */}
            <div className="flex flex-1 items-start justify-center px-4 pb-20 md:pb-0 md:pt-32">
              <h1 className="text-center font-serif leading-[0.95] tracking-wide text-[#e6d7c4] drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
                <span className="block text-[48px] sm:text-[70px] md:text-8xl max-w-4xl mx-auto text-center">
                  Pay On Success
                  Communication that connects.
                </span>
              </h1>
            </div>

            <div className="md:relative md:flex z-[3] hidden items-end  absolute bottom-5 justify-between md:px-6 px-3  lg:px-10 ">
              <TicketButton href='/contact' label='Contact' />
              <TicketButton href='/services' label='Services' />
            </div>
          </div>
            <div className="md:hidden z-[3] flex items-end gap-5 absolute bottom-0 justify-between px-3 pb-6 lg:px-10">
              <TicketButton href='/contact' label='Contact' />
              <TicketButton href='/services' label='Services' />
            </div>
        </section>
      </div>
    </div>
  )
}
