import Link from 'next/link';
import NavLink from './nav-link';

export default function Header() {
    return (
        <div className="bg-transparent hover:bg-lightbox-light transition-all py-4 px-12 flex justify-between w-full top-0 right-0 left-0 fixed z-50">
            <div>
                <Link href="/">
                    <a className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight font-fancy">
                        Wing on Wing
                    </a>
                </Link>
            </div>

            <div className="flex items-center">
                <NavLink href="/about-us">{'About Us'}</NavLink>
                <NavLink href="/destinations">{'Destinations'}</NavLink>
                <NavLink href="/resources">{'Resources'}</NavLink>
                <NavLink href="/travel-records">{'Travel Records'}</NavLink>
            </div>
        </div>
    );
}
