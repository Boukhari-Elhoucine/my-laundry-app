import { Divider } from '@mui/material';
import React from 'react';
import { SectionCard } from './SectionCard';
import { FooterCard } from './FooterCard';
import { HeaderCardCopy } from './HeaderCard';

interface CardProps {
  avatarSrc: string;
  titleHeader: string;
  subTitleHeader: string;
  price: number;
  listItems: string[];
}

export const Card: React.FC<CardProps> = ({
  avatarSrc,
  titleHeader,
  subTitleHeader,
  price,
  listItems,
}) => {
  return (
    <>
      <HeaderCardCopy
        avatarSrc={avatarSrc}
        titleHeader={titleHeader}
        subTitleHeader={subTitleHeader}
      />

      <SectionCard listItems={listItems} />

      <Divider
        aria-hidden="true"
        variant="middle"
        sx={{ margin: '36px 24px 16px', border: '1px dashed #A9A9AA' }}
      />

      <FooterCard price={price} />
    </>
  );
};
