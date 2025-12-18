"use client";

import Header from '@/components/Header'
import TicketButton from '@/components/TicketButton'
import SplitText from '@/components/SplitText'
import { ParallaxImage } from '@/components/ParallaxImage';
import ParallaxSection from '@/components/ParallaxSection';
import DoorRevealSection from '@/components/DoorRevealSection';
import ShufflingCardsGrid from '@/components/ShufflingCardsGrid';
import ScrollTabsSection from '@/components/ScrollTabsSection';
import ProjectsFeatureSection from '@/components/ProjectsFeatureSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import ExpandingHero from '@/components/ExpandingHero';
import ServicesSection from '@/components/ServicesSection';

type CardItem =
  | { id: string; type: "logo"; title: string }
  | { id: string; type: "image"; img: string; title?: string };

const items = [
  { id: "forbes", type: "logo", title: "Forbes" },
  { id: "img1", type: "image", img: "/images/logoicon.webp" },
  { id: "entre", type: "logo", title: "Entrepreneur" },
  { id: "wsj", type: "logo", title: "WSJ" },
  { id: "img2", type: "image", img: "/images/logoicon.webp" },
  { id: "bi", type: "logo", title: "BUSINESS\nINSIDER" },
  { id: "ibt", type: "logo", title: "International\nBusiness\nTimes." },
  { id: "newsweek", type: "logo", title: "Newsweek" },
  { id: "img3", type: "image", img: "/images/logoicon.webp" },
  { id: "grazia", type: "logo", title: "GRAZIA" },
  { id: "img4", type: "image", img: "/images/logoicon.webp" },
  { id: "img5", type: "image", img: "/images/logoicon.webp" },
] satisfies CardItem[];

const tabs = [
  {
    title: "TRANSPARENCY & TRUST",
    body:
      "WE OPERATE WITH TRANSPARENCY. EVERY STRATEGY, MILESTONE AND METRIC IS SHARED OPENLY...",
    media: [
      { type: "image", src: "/img.webp" },
      { type: "video", src: "/videobg.mp4", poster: "/img.webp" },
      { type: "image", src: "/img.webp" },
    ],
  },
  {
    title: "PAY ON SUCCESS MODEL",
    body:
      "OUR PAY-ON-SUCCESS MODEL REDEFINES VALUE IN COMMUNICATIONS. NO UPFRONT FEES, NO COMMITMENT AND NO RETAINERS...",
    media: [
      { type: "video", src: "/videobg.mp4", poster: "/img.webp" },
      { type: "image", src: "/img.webp" },
      { type: "image", src: "/img.webp" },
    ],
  },
  {
    title: "NETWORK AND INFLUENCE",
    body:
      "WITH A GLOBAL NETWORK OF MEDIA, INVESTORS AND INDUSTRY LEADERS, WE HELP BRANDS AMPLIFY AUTHORITY...",
    media: [
      { type: "image", src: "/img.webp" },
      { type: "video", src: "/videobg.mp4", poster: "/img.webp" },
      { type: "image", src: "/img.webp" },
    ],
  },
];

export default function HomePage() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div className='bg-[#e6d7c4] min-h-screen'>
      {/* <Loader/> */}
      <div className="relative">
        <video
          className="absolute md:inline hidden inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/dixhnqcby/video/upload/v1765973067/videobg_d0ta23.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <video
          className="absolute md:hidden inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/dixhnqcby/video/upload/v1766065204/Trailer_Mobile_Version_11-04_lkjlc4.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/50" />
        <Header />
        <section className="relative h-[calc(100vh-6rem)] w-full flex items-center justify-center overflow-hidden">




          <div className="relative z-[2] flex md:h-full w-full  flex-col ">
            {/* Center Title */}
            <div className="flex flex-1 items-start justify-center px-4 pb-20 md:pb-0 md:pt-32">
              <h1 className="text-center font-[PPPangaia] uppercase leading-[0.95] tracking-wide text-[#e6d7c4] drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
                <span className="block max-w-4xl leading-tight mx-auto text-center">
                  <SplitText
                    text="Pay On Success Communication that connects."
                    className="text-[40px] sm:text-[70px] md:text-8xl text-center"
                    delay={150}
                    duration={2}
                    splitType="lines"
                    from={{ opacity: 0, y: 100 }}
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
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
      <DoorRevealSection
        heightVh={240}
        className="bg-[#e6d7c4]"
        background={
          <div className="h-full w-full bg-[#e6d7c4] flex items-center justify-center">
            <div className="font-serif text-[#4a5a52] leading-none tracking-wide text-[clamp(25px,14vw,220px)]">
              Bond & Value
            </div>
          </div>
        }
      >
        <div className="text-[#586053]">
          <div className=" ">

            <SplitText
              text="Strategic Communications
            for Exceptional Brand Growth"
              className="font-medium md:text-4xl font-[PPPangaia] uppercase text-xl mb-6"
              delay={150}
              duration={2}
              splitType="lines"
              from={{ opacity: 0, y: 100 }}
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <p className="text-lg">

            At Bond & Vale, we’re an integrated communications consultancy
            dedicated to helping brands grow with purpose, credibility and
            trust.
            Through our expertise in strategic storytelling, brand positioning
            and digital innovation, we elevate visibility, strengthen reputation
            and drive measurable long-term growth.
            At Bond & Vale, we’re an integrated communications consultancy
            dedicated to helping brands grow with purpose, credibility and
            trust.
            Through our expertise in strategic storytelling, brand positioning
            and digital innovation, we elevate visibility, strengthen reputation
            and drive measurable long-term growth.


          </p>
        </div>
      </DoorRevealSection>


      <section className="bg-[#e6d7c4] px-6 lg:px-14 py-16">
        <h2 className=" ">
          <SplitText
            text="WE&apos;RE PROUD TO BE RECOGNIZED AS INDUSTRY LEADERS."
            className="text-[#23352d] md:text-6xl text-3xl uppercase !text-start max-w-3xl font-[PPPangaia] "
            delay={150}
            duration={2}
            splitType="lines"
            from={{ opacity: 0, y: 100 }}
            onLetterAnimationComplete={handleAnimationComplete}
          />
        
      </h2>

      <p className="mt-6 max-w-3xl text-[#23352d]/80 tracking-wide uppercase mb-8">
        Our work and insights are featured across top global publications. Our set of experiences is based on trust, transparency and a commitment to greatness
      </p>

      <ShufflingCardsGrid
        items={items}
        intervalMs={3500}     // wait longer between shuffles
        movesPerTick={4}      // only a couple cards move
        animDuration={2}    // slow + smooth motion
      />

    </section>

      {/* <ScrollTabsSection tabs={tabs} className="mt-0" /> */ }


      <ProjectsFeatureSection
        leftImage="/img.webp"
        rightTopImage="/img3.png"
        title={"Strategic PR & Marketing for Unmatched Brand Growth"}
        body="Een interieurontwerp komt pas echt tot leven wanneer ideeën worden omgezet in een echte ruimte. In mijn projecten zie je hoe creativiteit en aandacht voor detail samenkomen om unieke interieurs te creëren die perfect passen bij de wensen van mijn klanten. Elk project heeft zijn eigen verhaal, van gezellige woonruimtes tot praktische werkplekken. Met oog voor kleur en materiaal zorg ik ervoor dat alles mooi in balans is en goed functioneert. Laat je inspireren door eerdere ontwerpen en ontdek wat er mogelijk is voor jouw interieur!

"
        buttonHref="/projecten"
        buttonLabel="Projecten"
      />






      <ServicesSection
        services={[
          {
            title: "Public Relations",
            imageSrc: "/services/PublicRelations.png",
            videoSrc: "/services/PublicRelations.mp4",
            tag: "Service",
            description: "Media outreach & brand positioning.",
          },
          {
            title: "Brand Consultancy",
            imageSrc: "/services/BrandConsultancy.png",
            videoSrc: "/services/BrandConsultancy.mp4",
            tag: "Service",
            description: "Identity, strategy & messaging.",
          },
          {
            title: "Reputation Management",
            imageSrc: "/services/ReputationManagement.png",
            videoSrc: "/services/ReputationManagement.mp4",
            tag: "Service",
            description: "Protect and strengthen trust.",
          },
          {
            title: "Website Development",
            imageSrc: "/services/WebsiteDevelopment.png",
            videoSrc: "/services/WebsiteDevelopment.mp4",
            tag: "Service",
            description: "Modern, fast conversion websites.",
          },
          {
            title: "Digital Marketing",
            imageSrc: "/services/DigitalMarketing.png",
            videoSrc: "/services/DigitalMarketing.mp4",
            tag: "Service",
            description: "Performance + creative campaigns.",
          },
          {
            title: "Investor Relations",
            imageSrc: "/services/InvestorRelations.png",
            videoSrc: "/services/InvestorRelations.mp4",
            tag: "Service",
            description: "Clear communication for investors.",
          },
        ]}
      />


      <ExpandingHero imageSrc="/img2.jpg" quote='"EEN INTERIEUR
        MET EENHEID
        EN RUST"
        ' />


      <BlogSection intro="Ontdek de laatste trends, tips en inspiratie op het gebied van interieurontwerp en styling. Blijf op de hoogte van onze nieuwste projecten en inzichten."
        items={[
          {
            href: "/blog/eerste-blogpost",
            category: "Interieurdesign",
            title: "De Kracht van Kleur in Interieur",
            excerpt:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.  ",
          },
          {
            href: "/blog/minimalistisch-wonen",
            category: "Styling",
            title: "Minimalistisch Wonen: Minder is Meer",
            excerpt:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
          },
          {
            href: "/blog/duurzaam-design",
            category: "Duurzaamheid",
            title: "Duurzaam Design: Mooi en Milieubewust",
            excerpt:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
          },
        ]}
      />


      <Footer
        instaItems={[
          { src: "/img.webp", label: "Japandi Toilet" },
          { src: "/img.webp", label: "Woonkamer" },
          { src: "/img.webp", label: "Badkamer" },
          { src: "/img.webp", label: "Keuken" },
          { src: "/img.webp", label: "Slaapkamer" },
          { src: "/img.webp", label: "Entree" },
        ]}
      />
    </div >
  )
}
