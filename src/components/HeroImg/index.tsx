import React from "react";

import { TouchableOpacityProps } from "react-native";
import { usePromo } from "../../hooks/usePromotion";
import { HeroContainer, Hero, ImgOverlay } from "./styles";

export function HeroImg({ ...rest }: TouchableOpacityProps) {
  const { collection } = usePromo();

  return (
    <HeroContainer {...rest}>
      <ImgOverlay style={{ elevation: 1 }} />
      <Hero
        source={{
          uri: collection.banner_img,
        }}
      />
    </HeroContainer>
  );
}
