import React from 'react';
import linkedin from "../../static/images/editorial/linkedin.png";
import figma from "../../static/images/editorial/figma.png";
import dribble from "../../static/images/editorial/dribble.png"
import behance from "../../static/images/editorial/behance.png"
import Image from 'next/image';
import Link from 'next/link';

const EditorCard = ({ editor }) => {
    return (
        <div className='flex flex-col items-center'>
            <Image src={editor?.image} alt='editor' />
            <p className='font-semibold'>{editor?.name}</p>
            <p className='font-semibold'>{editor?.designation}</p>
            <div className='flex gap-4'>
                {editor?.linkedin && (

                    <Link href={editor?.linkedin}>
                        <Image src={linkedin} width={24} height={24} className='object-cover' alt='linkedin'
                        />
                    </Link>
                )}
                {editor?.figma && (

                    <Link href={editor?.figma}>
                        <Image src={figma} width={24} height={24} className='object-cover' alt='figma'
                        />
                    </Link>
                )}
                {editor?.dribble && (

                    <Link href={editor?.dribble}>
                        <Image src={dribble} width={24} height={24} className='object-cover' alt='dribble'
                        />
                    </Link>
                )}
                {editor?.behance && (

                    <Link href={editor?.behance}>
                        <Image src={behance} width={24} height={24} className='object-cover' alt='behance'
                        />
                    </Link>
                )}
            </div>
            {editor?.email && (

                <Link href={`mailto:${editor?.email}`} className='border border-1 border border-green-1 text-green-1 bg-secondary w-[320px] h-9 rounded-full text-center flex items-center justify-center bg-transparent text-base font-semibold leading-normal'>
                    Get In Touch
                </Link>
            )}
        </div>
    )
}

export default EditorCard