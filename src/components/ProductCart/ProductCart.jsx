import { FaMinus, FaPlus } from 'react-icons/fa';
import {
  BuyButton,
  ProductBrand,
  ProductContainer,
  ProductDetails,
  ProductImage,
  ProductName,
  ProductPrice,
  QuantityButton,
  QuantityContainer,
  QuantityLabel,
  Section,
  Title,
  TotalContainer,
  TotalLabel,
  TotalValue,
} from './ProductCart.styled';

export const ProductCart = () => {
  return (
    <Section className="h-custom">
      <Title>Shopping Cart</Title>
      <ProductContainer>
        <ProductImage
          src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          alt="Generic placeholder"
        />
        <ProductDetails>
          <ProductName>iPhone 9</ProductName>
          <ProductBrand>Apple</ProductBrand>
          <ProductPrice>549$</ProductPrice>
        </ProductDetails>
      </ProductContainer>
      <QuantityContainer>
        <QuantityButton name="minus">
          <FaMinus fontSize={25} />
        </QuantityButton>
        <QuantityLabel>{0}</QuantityLabel>
        <QuantityButton name="plus">
          <FaPlus fontSize={25} />
        </QuantityButton>
      </QuantityContainer>
      <TotalContainer>
        <TotalLabel>Total:</TotalLabel>
        <TotalValue>{0}$</TotalValue>
      </TotalContainer>
      <BuyButton type="button">Buy now</BuyButton>
    </Section>
  );
};
