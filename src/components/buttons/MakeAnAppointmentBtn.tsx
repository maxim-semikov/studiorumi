import {siteMetadata} from "@/data/siteMetadata";

export const MakeAnAppointmentBtn = () => (
    <a href={siteMetadata.max} target={'_blank'}
        className={'group size-[250px] md:size-[300px] border border-rumi-light rounded-full' +
            ' flex justify-center items-center cursor-pointer hover:border-4'}
    >
        <div
            className={'size-52 md:size-56 bg-rumi-light rounded-full text-white flex justify-center items-center' +
                ' uppercase text-2xl tracking-widest'}
        >
            Записаться
        </div>
    </a>
)
