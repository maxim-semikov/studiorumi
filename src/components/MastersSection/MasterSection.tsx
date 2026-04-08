import React from "react";
import {elMessiri} from "@/app/fonts";
import {MasterDetails} from "@/components/MastersSection/MasterDetails";
import './MasterSectionStyles.css'
import {NAV_LINKS_SECTIONS_IDS} from "@/data/headerNavLinks";
import {Section} from "@/components/Section/Section";

export const MasterSection = () => {
    return (
        <Section id={NAV_LINKS_SECTIONS_IDS.MASTERS}>
            <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Наш мастер</h2>

            <div className={'flex flex-col gap-10'}>
                <div>
                    <div className={'details-container bg-bgColor'}>
                        <MasterDetails activeMasterIndex={0} />
                    </div>
                    <div className={'flex'}>
                        <div className={'grow flex flex-col bg-bgColor'}>
                            <div className={'h-[40px] border-l border-rumi-light'}/>
                            <div className={'h-[24px] border border-rumi-light border-t-0 rounded-bl-3xl' +
                                ' rounded-br-3xl'}/>
                        </div>

                        <div className={'flex-shrink-0 w-[200px] h-full flex flex-col'}>
                            <div className={'h-[24px] flex bg-bgColor'}>
                                <div className={'w-[40px] grow'}/>
                                <div className={'w-[160px] grow border-rumi-light border-b border-r rounded-br-3xl'}/>
                            </div>
                            <div className={'round-out-line h-[24px]'}/>
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    )
}
