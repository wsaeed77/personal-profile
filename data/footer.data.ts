import { MdOutlineEmail, MdPhoneInTalk } from 'react-icons/md';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export const footerData = {
  heading: "Let's stay in touch",
  description:
    'I am always happy to discuss new opportunities. Please feel free to reach out to me, and we can go over the details together.',
  links: [
    {
      text: 'w.saeed77@gmail.com',
      href: 'mailto:w.saeed77@gmail.com',
      icon: MdOutlineEmail,
      iconTitle: 'E-mail address',
    },
    {
      text: '+44 7857110325',
      href: 'tel:+447857110325',
      icon: MdPhoneInTalk,
      iconTitle: 'Phone number',
    },
  ],
  copyright: `Copyright © ${currentYear} – All rights reserved.`,
};
