import {
    WhatsApp,
    Telegram,
    vKontakte,
    MaxMessenger,
} from './icons'

const components = {
    whatsApp: WhatsApp,
    telegram: Telegram,
    vk: vKontakte,
    max: MaxMessenger,
}

type SocialIconProps = {
    kind: keyof typeof components
    href: string | undefined
    className: string;
}

const SocialIcon = ({ kind, href, className }: SocialIconProps) => {
    if (!href) {
        return null
    }

    const SocialSvg = components[kind]

    return (
        <a
            className="text-sm transition"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            <div
                className={`flex justify-center items-center rounded-full bg-rumi-light hover:bg-rumi ${className}`}
            >
                <span className="sr-only">{kind}</span>
                <SocialSvg

                    className={`fill-current text-white`}
                />
            </div>
        </a>
)
}

export default SocialIcon
