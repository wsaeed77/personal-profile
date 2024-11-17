import Image from 'next/image';

import logo from '@images/logo-waqas.svg';

const LogoImage = () => {
  return (
    <Image
      src={logo}
      width={156}
      height={50}
      alt="Waqas Saeed - Portfolio - Logo image"
    />
  );
};

export default LogoImage;
