import React from "react";
import Image from "next/image";
import {elMessiri, rubik} from "@/app/fonts";
import Header from "@/components/Header/Header";
import {siteMetadata} from "@/data/siteMetadata";
import SocialIcon from "@/components/icons";
import {MakeAnAppointmentBtn} from "@/components/buttons";
import {Shape} from "@/components/shape";
import {Footer} from "@/components/Footer/Footer";
import {ContactSection} from "@/components/ContactSection/ContactSection";
import {FeedbackSection} from "@/components/FeedbackSection/FeedbackSection";
import {TrustSection} from "@/components/TrustSection/TrustSection";
import {MasterSection} from "@/components/MastersSection/MasterSection";
import {SalesPromotionsSection} from "@/components/SalesPromotionsSection/SalesPromotionsSection";
import {ServicesSection} from "@/components/ServicesSection/ServicesSection";
import siteLogo from '/public/assets/images/rumi-logo-new.webp'
import headerMainPhoto from '/public/assets/images/main_banner_photo.webp'
import catImg from '/public/assets/images/cat.webp'
import dogImg from '/public/assets/images/dog.webp'
import {NAV_LINKS_SECTIONS_IDS} from "@/data/headerNavLinks";
import {Section} from "@/components/Section/Section";

export default function Home() {
  return (
      <div className="flex h-screen flex-col circles">
          <Header/>

          <main className="container">

              <Section id={NAV_LINKS_SECTIONS_IDS.ABOUT}>

                  <div className="flex flex-col mb-48 items-center lg:flex-row lg:justify-center lg:gap-6">

                      <div className={'flex flex-col'}>
                          <Image src={siteLogo} alt={'Rumi logo'}
                                 width={155}
                                 height={136}
                                 className={'self-center mb-20 md:mb-10'}/>

                          <h2 className={`${elMessiri.className} text-6xl uppercase mb-10 text-center lg:text-left tracking-wider`}>Бережная
                              забота о лучшем друге</h2>
                          <p className={'text-3xl text-center lg:text-left font-light tracking-wider'}>Доверьте уход и
                              красоту вашего питомца
                              лучшим грумерам</p>
                      </div>

                      <div className={'mt-10 flex-shrink-0 flex justify-end max-w-[612px] md:pl-[100px] lg:mt-0' +
                          ' relative'}>
                          <div className={'relative'}>
                              <Image src={headerMainPhoto}
                                     alt={'Груммер дерржит собаку на руках'}
                              />
                              <div className={'absolute md:w-[170px] bottom-3 right-0 flex justify-end px-1'}
                              >
                                  <SocialIcon
                                      className={'w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 mr-2 md:mr-3'}
                                      kind={'telegram'}
                                      href={siteMetadata.telegram}
                                  />
                                  <SocialIcon
                                      className={'w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 mr-2 md:mr-3'}
                                      kind={'vk'}
                                      href={siteMetadata.telegram}
                                  />
                                  <SocialIcon
                                      className={'w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11'}
                                      kind={'max'}
                                      href={siteMetadata.max}
                                  />
                              </div>
                          </div>

                          <div className={'absolute left-0 bottom-[-8rem] md:bottom-[-3rem]'}>
                              <MakeAnAppointmentBtn/>
                          </div>
                      </div>
                  </div>


                  <Shape>
                      <>
                          <h2 className={`${elMessiri.className} text-4xl  text-center uppercase tracking-wider mb-4 pt-4`}>Наша
                              философия</h2>
                          <p className={'text-xl md:text-2xl font-light text-center leading-relaxed tracking-wider'}>В основе нашей
                              работы лежит глубокое понимание и любовь к животным.
                              <br/>Мы стремимся создать для них их собственный маленький рай, где каждый четвероногий
                              друг будет чувствовать себя как дома. Вместе с нами ваш питомец получит не только качественный
                              уход, но и море заботы и внимания.</p>
                      </>
                  </Shape>

              </Section>


              <TrustSection/>

              <SalesPromotionsSection/>

              <ServicesSection/>

              <Shape>
                  <>
                      <p className={`${elMessiri.className} text-[40px] font-light text-center uppercase leading-relaxed tracking-wider pt-2`}>запишите
                          своего друга прямо сейчас</p>
                      <div className={'flex justify-center items-center mt-6'}>
                          <a href={siteMetadata.max} target={'_blank'}
                             className={`${rubik.className} bg-amber-200 text-rumi rounded-xl px-5 py-1 text-xl hover:bg-amber-400 hover:text-white`}>Записаться</a>
                      </div>
                  </>
              </Shape>

              <MasterSection/>

              <FeedbackSection/>

              <ContactSection/>

              <div className={'my-32 mx-2'}>
                  <Shape>
                      <div className={'relative pt-2'}>
                          <Image src={catImg}
                                 className={'hidden lg:block absolute bottom-[-140px] left-[-130px] z-10'}
                                 alt={'Кошка'}
                          />
                          <div className={'mr-0 md:mr-[115px] lg:mr-0'}>
                              <p className={`${elMessiri.className} text-[40px] font-light text-center uppercase leading-relaxed tracking-wider pt-2`}>Есть
                                  вопросы - напишите нам</p>
                              <p className={`${elMessiri.className} text-2xl font-light text-center leading-relaxed tracking-wider`}>Наша
                                  команда свяжется с вами и проконсультирует</p>
                              <div className={'flex justify-center items-center mt-6'}>
                                  <a href={siteMetadata.max} target={'_blank'}
                                     className={`${rubik.className} bg-amber-200 text-rumi rounded-xl px-5 py-1 text-xl hover:bg-amber-400 hover:text-white`}>Отправить</a>
                              </div>
                          </div>
                          <Image src={dogImg}
                                 className={'hidden md:block absolute bottom-[-150px] right-[-150px] z-10'}
                                 alt={'Сидит сабака'}
                          />
                      </div>
                  </Shape>
              </div>

          </main>

          <Footer/>
      </div>
  );
}
