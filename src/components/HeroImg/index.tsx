import React from "react";

import { View, Image } from "react-native";
import { HeroContainer, Hero, ImgOverlay } from "./styles";

export function HeroImg() {
  return (
    <HeroContainer activeOpacity={0.8}>
      <ImgOverlay style={{ elevation: 1 }} />
      <Hero
        source={{
          uri: "https://static.nike.com/a/images/w_1920,c_limit/c5048093-6540-4256-a13e-0b048bb11650/como-posso-tornar-me-nike-member-ajuda-nike.jpg",
        }}
      />
    </HeroContainer>
  );
}
