import React from "react";
import {elMessiri} from "@/app/fonts";
import './SalesPromotionsSectionStyles.css'
import {NAV_LINKS_SECTIONS_IDS} from "@/data/headerNavLinks";
import {Section} from "@/components/Section/Section";
import {Carousel} from "@/components/Carousel/Carousel";

const slides = [
    <div className={'sales-card sales-card__second'}>
        <div className={'price'}>- 10%</div>
        <div className={'sales-description'}>
            На комплекс <strong>щенкам</strong> и <strong>котятам</strong> до 6 месяцев
        </div>
    </div>,
    <div className={'sales-card sales-card__sixth'}>
        <div className={'price'}>- 10%</div>
        <div className={'sales-description'}>
            Для <strong>трех питомцев</strong> и более
        </div>
    </div>,
]

export const SalesPromotionsSection = () => (
    <Section id={NAV_LINKS_SECTIONS_IDS.SALES_PROMOTIONS} className={'pb-10'}>
        <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Акции</h2>
        <div className={'px-6'}>
            <Carousel slides={slides} slideClassName={'basis-full md:basis-1/2'}/>
        </div>
    </Section>
)
