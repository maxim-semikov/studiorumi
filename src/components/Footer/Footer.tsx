import Image from "next/image";
import Link from "@/components/Link";
import SocialIcon from "@/components/icons";
import {headerNavLinks} from "@/data/headerNavLinks";
import {siteMetadata} from "@/data/siteMetadata";
import siteLogo from '/public/assets/images/rumi-logo.webp'
export const Footer = () => {
    return (
        <footer className={'py-10'}>
            <div className={'container flex justify-between flex-wrap gap-10'}>
                <div className={'flex flex-col justify-center'}>
                    <Image src={siteLogo}
                           alt={'Rumi logo'}
                           className={'self-center mb-6'}
                    />
                    <div className={'flex justify-center gap-2 mb-10 md:mb-0'}>
                        <SocialIcon kind={'telegram'} href={siteMetadata.telegram} className={'w-10 h-10'}/>
                        <SocialIcon kind={'vk'} href={siteMetadata.vk} className={'w-10 h-10'}/>
                        <SocialIcon kind={'max'} href={siteMetadata.max} className={'w-10 h-10'}/>
                    </div>
                </div>

                <div>
                    <h3 className={'text-rumi text-3xl font-medium pb-3'}>Телефон</h3>
                    {siteMetadata?.contactsNumbers?.map(tel => (
                        <a href={`tel:${tel}`} key={tel} className={'block font-light text-xl'}>{tel}</a>
                    ))}

                    <h3 className={'text-rumi text-3xl font-medium pb-1 pt-7'}>Адрес</h3>
                    <a href={siteMetadata.companyLocation.url} className={'font-light text-xl'}>
                        {siteMetadata.companyLocation.name}
                    </a>
                </div>


                <div>
                    <h3 className={'text-rumi text-3xl font-medium pb-3'}>Навигация</h3>
                    <nav>
                        {headerNavLinks
                            .map((link) => (
                                <div key={link.title}>
                                    <Link
                                        href={link.href}
                                        className={'font-light text-xl'}
                                    >
                                        {link.title}
                                    </Link>
                                </div>
                            ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}
