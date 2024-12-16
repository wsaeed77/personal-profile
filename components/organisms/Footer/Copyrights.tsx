import Link from 'next/link';
import Container from '@atoms/Container/Container';
import { CopyrightsProps } from './types';

const Copyrights = ({ text }: CopyrightsProps) => {
  return (
    <Container className="text-center py-6">
      <p>{text ? text : 'Copyright © All rights reserved.'}</p>
    </Container>
  );
};

export default Copyrights;
