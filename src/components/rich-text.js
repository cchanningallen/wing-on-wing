import React from 'react';
import {
    Title,
    Header,
    Subheader,
    Paragraph,
    Link,
} from '../components/typography';
import cn from 'classnames';

class RichText extends React.Component {
    render() {
        const { content } = this.props;
        console.log(content);
        if (!content.children) return;

        return this._renderNodes(content.children, 'root');
    }

    _renderNodes(nodes, parentKey) {
        return nodes.map((n, i) => this._renderNode(n, `${parentKey}-${i}`));
    }

    _renderNode(node, i) {
        if (node.text) return this._renderText(node, i);

        switch (node.type) {
            case 'heading-one':
                return this._renderHeader(node, i);
            case 'heading-two':
                return this._renderSubheader(node, i);
            case 'paragraph':
                return this._renderParagraph(node, i);
            case 'link':
                return this._renderLink(node, i);
            case 'bulleted-list':
                return this._renderBulletedList(node, i);
            case 'numbered-list':
                return this._renderOrderedList(node, i);
            case 'list-item':
                return this._renderListItem(node, i);
            case 'list-item-child':
                return this._renderListItemChild(node, i);
            case 'class':
                return this._renderCustom(node, i);
        }
    }

    _renderText(node, key) {
        const classes = [];
        if (node.bold) classes.push('font-bold');
        if (node.italic) classes.push('italic');
        if (node.code)
            classes.push('font-mono bg-gray-700 text-white px-1 rounded');

        return (
            <span key={key} className={cn(classes)}>
                {node.text}
            </span>
        );
    }

    _renderHeader(node, key) {
        return (
            <Header className="mt-4" key={key}>
                {this._renderNodes(node.children, key)}
            </Header>
        );
    }

    _renderSubheader(node, key) {
        return (
            <Subheader className="mt-4" key={key}>
                {this._renderNodes(node.children, key)}
            </Subheader>
        );
    }

    _renderParagraph(node, key) {
        return (
            <Paragraph key={key}>
                {this._renderNodes(node.children, key)}
            </Paragraph>
        );
    }

    _renderLink(node, key) {
        return (
            <Link key={key} href={node.href}>
                {this._renderNodes(node.children, key)}
            </Link>
        );
    }

    _renderBulletedList(node, key) {
        return (
            <ul className="list-disc list-outside" key={key}>
                {this._renderNodes(node.children, key)}
            </ul>
        );
    }

    _renderOrderedList(node, key) {
        return (
            <ol className="list-decimal list-outside" key={key}>
                {this._renderNodes(node.children, key)}
            </ol>
        );
    }

    _renderListItem(node, key) {
        return (
            <li key={key} className="ml-5 pb-2">
                {this._renderNodes(node.children, key)}
            </li>
        );
    }

    _renderListItemChild(node, key) {
        return <span key={key}>{this._renderNodes(node.children, key)}</span>;
    }

    _renderCustom(node, key) {
        switch (node.className) {
            case 'example':
                // Add specific logic for cases like this
                return;
            default:
                // Otherwise, just wrap content in a div with the className
                return (
                    <div className={node.className}>
                        {this._renderNodes(node.children, key)}
                    </div>
                );
        }
    }
}

export default RichText;
