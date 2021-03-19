import cn from 'classnames';

export default function Container({ className, children }) {
    return (
        <div className={cn('container mx-auto p-4', className)}>{children}</div>
    );
}
