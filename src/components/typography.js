import cn from 'classnames';

function Title({ className, children }) {
    return (
        <h1 className={cn('text-3xl font-semibold font-fancy pb-4', className)}>
            {children}
        </h1>
    );
}

function Header({ className, children }) {
    return (
        <h2 className={cn('text-2xl font-semibold pb-3', className)}>
            {children}
        </h2>
    );
}

function Subheader({ className, children }) {
    return (
        <h3 className={cn('text-xl font-semibold pb-3', className)}>
            {children}
        </h3>
    );
}

function Paragraph({ className, children }) {
    return <p className={cn('pb-2', className)}>{children}</p>;
}

function Link({ className, href, children }) {
    return (
        <a
            className={cn(
                'text-indigo-600 hover:text-indigo-500 transition-all',
                className
            )}
            href={href}
        >
            {children}
        </a>
    );
}

export { Title, Header, Subheader, Paragraph, Link };
