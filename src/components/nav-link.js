import Link from 'next/link';
import cn from 'classnames';

export default function NavLink({ className, href, children }) {
    return (
        <Link href={href}>
            <a
                className={cn(
                    className,
                    'font-fancy md:ml-16 hover:text-indigo-600 transition-all'
                )}
            >
                {children}
            </a>
        </Link>
    );
}
