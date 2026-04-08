import {elMessiri} from "@/app/fonts";
import {siteMetadata} from "@/data/siteMetadata";
import {NAV_LINKS_SECTIONS_IDS} from "@/data/headerNavLinks";
import {Section} from "@/components/Section/Section";

export const ContactSection = () => (
    <Section id={NAV_LINKS_SECTIONS_IDS.CONTACTS}>
        <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Контакты</h2>
        <div className={'block lg:flex gap-10'}>
            <div className={'flex flex-col justify-around shrink-0 mb-3 gap-3'}>
                <div>
                    <h3 className={'text-rumi text-3xl font-medium pb-2'}>Режим работы</h3>
                    <p>Ежедневно, 10:00 - 20:00</p>
                </div>

                <div>
                    <h3 className={'text-rumi text-3xl font-medium pb-1'}>Адрес</h3>
                    <a href={siteMetadata.companyLocation.url} className={'font-light text-xl'}>
                        {siteMetadata.companyLocation.name}
                    </a>
                </div>

                <div>
                    <h3 className={'text-rumi text-3xl font-medium pb-1'}>Телефон</h3>
                    {siteMetadata?.contactsNumbers?.map(tel => (
                        <a href={`tel:${tel}`} key={tel} className={'block font-light text-xl'}>{tel}</a>
                    ))}
                </div>

                <div className={'border-2 border-rumi-light rounded-xl px-4 py-3'}>
                    <p className={`${elMessiri.className} text-rumi text-xl font-medium mb-1`}>
                        ★ Награда «Хорошее место»
                    </p>
                    <p className={'text-lg font-light'}>по версии Яндекс Карт: 2023 · 2025 · 2026</p>
                </div>
            </div>

            <div className={'h-[500px] rounded-xl border-2 border-rumi-light grow overflow-hidden'}>

                <div className={'relative overflow-hidden'}>
                    <a
                        href="https://yandex.kz/maps/ru/org/rumi/231681462829/?lang=ru&utm_medium=mapframe&utm_source=maps"
                        className={'text-white text-xl absolute top-0'}
                    >
                        Rumi
                    </a>
                    <a
                        href="https://yandex.kz/maps/ru/21619/fryazino/category/pet_salon/184107224/?lang=ru&utm_medium=mapframe&utm_source=maps"
                        className={'ext-white text-xl absolute top-[14px]'}
                    >
                        Зоосалон, зоопарикмахерская во Фрязино
                    </a>
                    <iframe
                        src="https://yandex.kz/map-widget/v1/?ll=38.064018%2C55.956738&mode=poi&poi%5Bpoint%5D=38.063786%2C55.956769&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D231681462829&z=19.1"
                        width="100%" height="500" allowFullScreen
                        className={'relative'}
                    >
                    </iframe>
                </div>

            </div>
        </div>
    </Section>
)


