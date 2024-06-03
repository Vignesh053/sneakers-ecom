import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../spacer/Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          {variant === "on-sale" ? (
            <>
              <SaleTag>
                <TagText>Sale</TagText>
              </SaleTag>
              <OldPrice>{formatPrice(price)}</OldPrice>
              <NewPrice>{formatPrice(salePrice)}</NewPrice>
            </>
          ) : variant === "new-release" ? (
            <>
              <NewReleaseTag>
                <TagText>Just Released!</TagText>
              </NewReleaseTag>
              <Price>{formatPrice(price)}</Price>
            </>
          ) : (
            variant === "default" && <Price>{formatPrice(price)}</Price>
          )}
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Tag = styled.div`

  height: 32px;
  padding: 0 8px;
  border-radius: 2px;
  position: absolute;
  display: flex;
  top: 12px;
  align-items: center;
  right: -4px;
`;

const SaleTag = styled(Tag)`
  background-color: ${COLORS.primary};
`;

const NewReleaseTag = styled(Tag)`
  background-color: ${COLORS.secondary};
`;

const TagText = styled.p`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.white};
`;
const Wrapper = styled.article`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const OldPrice = styled(Price)`
  text-decoration: line-through;
`;

const NewPrice = styled(Price)`
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: ${COLORS.primary};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
