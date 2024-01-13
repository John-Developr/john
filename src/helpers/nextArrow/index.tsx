import React, { Component } from 'react';
import Link from 'next/link';

interface NextArrowProps {
  text: string;
  className: string;
  path: string;
}

class NextArrow extends Component<NextArrowProps> {
  render() {
    const { text, className, path, ...rest } = this.props;

    return (
        <Link href={path} className={`nextp ${className}`} id="cardHover" {...rest}>
            {text}
        </Link>
    );
  }
}

export default React.memo(NextArrow);