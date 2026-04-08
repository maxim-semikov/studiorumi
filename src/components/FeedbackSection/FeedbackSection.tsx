import React from "react";
import Image from "next/image";
import {elMessiri} from "@/app/fonts";
import {feedbacks} from "@/data/feedbacks";
import {NAV_LINKS_SECTIONS_IDS} from "@/data/headerNavLinks";
import {Section} from "@/components/Section/Section";

export const FeedbackSection = () => (
    <Section id={NAV_LINKS_SECTIONS_IDS.FEEDBACKS} className={'pb-10'}>
        <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Отзывы</h2>

        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'}>
            {feedbacks.map(feedback => (
                <div key={feedback.avatarUrl + feedback.mainText} className={'pt-[30px] pl-[30px]'}>
                    <div className={'relative rounded-xl bg-rumi-light text-white px-4 pt-5 pb-5'}>
                        <div className={'absolute size-32 -top-[30px] -left-[30px]'}>
                            <Image src={feedback.avatarUrl} alt={'Фото клиента'} fill/>
                        </div>
                        <div>
                            <h4 className={'text-xl pl-[100px] pb-8'}>{feedback.mainText}</h4>
                            <p>{feedback.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
)
