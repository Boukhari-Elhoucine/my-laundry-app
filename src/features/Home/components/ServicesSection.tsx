import { Stack } from '@mui/material';
import React from 'react';
import { Card } from 'src/shared/components/Card';
import { HeaderServices } from 'src/shared/components/HeaderServices';
import { CardContainer } from './CardContainer';
import { cardPropsArrayFunc } from 'src/utils/CardPropsArrayFunc';

export const ServicesSection: React.FC = () => {
  const cardPropsArray = cardPropsArrayFunc();

  return (
    <Stack
      sx={{
        marginTop: '60px',
        minHeight: '802px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <HeaderServices />

      <Stack
        paddingTop="40px"
        direction="row"
        gap="60px 24px"
        flexWrap="wrap"
        justifyContent="center"
      >
        {cardPropsArray.map((card) => (
          <CardContainer key={card.avatarSrc} borderRadius={card.borderRadius}>
            <Card
              avatarSrc={card.avatarSrc}
              titleHeader={card.titleHeader}
              subTitleHeader={card.subTitleHeader}
              price={card.price}
              listItems={card.listItems}
            />
          </CardContainer>
        ))}
      </Stack>
    </Stack>
  );
};
