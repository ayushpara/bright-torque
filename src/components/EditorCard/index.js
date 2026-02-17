import React from 'react';
import linkedin from "../../static/images/editorial/linkedin.png";
import figma from "../../static/images/editorial/figma.png";
import dribble from "../../static/images/editorial/dribble.png"
import behance from "../../static/images/editorial/behance.png"
import Image from 'next/image';
import Link from 'next/link';

const EditorCard = ({ editor }) => {
    return (
        <div className='flex flex-col items-center px-4'>
            <div className='gap-2 border-[#F2F2F2] border-1 border border solid h-auto p-6 rounded-[20px] flex flex-col items-center w-full'>
                <Image src={editor?.image} alt='editor' preload width={112} height={112} />
                <p className='font-semibold text-black-3'>{editor?.name}</p>
                <p className='font-semibold text-black-3'>{editor?.designation}</p>
                <div className='flex gap-4 mt-2'>
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

                    <Link href={`mailto:${editor?.email}`} className='border border-1 border border-green-1 text-green-1 bg-secondary w-full sm:w-[320px] h-9 rounded-full text-center flex items-center justify-center bg-transparent text-base font-semibold leading-normal mt-2'>
                        Get In Touch
                    </Link>
                )}
            </div>
        </div>
    )
}

export default EditorCard