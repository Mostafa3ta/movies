import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { LiaLinkedin } from 'react-icons/lia'

export default function Footer() {
    const FooterLinks = [
        { name: 'Profile', link: 'https://portfolio-ten-tau-56.vercel.app/', icon: <IoPersonCircleOutline /> },
        { name: 'GitHub', link: 'https://github.com/Mostafa3ta', icon: <BsGithub /> },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0', icon: <LiaLinkedin /> },
    ]
    return (
        <footer className="py-1 fixed-bottom text-white">
            <section className='col-sm-10 content-margain ms-auto text-center'>
                {FooterLinks.map((item, index) =>
                    <Link key={index} className="mx-1" href={item.link} target='_blank' role="button">
                        {item.icon}
                    </Link>
                )}
            </section>
        </footer>
    )
}
