import { Component } from 'react';
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
const ONE_PRODUCT_PRICE = 549;
export class ProductCart extends Component {
  state = {
    counter: 1,
  };
  handlePlus = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  handleMinus = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };
  handleUpdate = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'minus':
        this.setState(prevState => ({ counter: prevState.counter - 1 }));
        break;
      case 'plus':
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
        break;
      default:
        return;
    }
    // if (name === 'minus') {
    //   this.setState(prevState => ({ counter: prevState.counter - 1 }));
    // } else if (name === 'plus') {
    //   this.setState(prevState => ({ counter: prevState.counter + 1 }));
    // }
    // this.setState(prevState => ({
    //   counter:
    //     e.currentTarget.name === 'minus'
    //       ? prevState.counter - 1
    //       : prevState.counter + 1,
    // }))
  };
  getTotal() {
    return ONE_PRODUCT_PRICE * this.state.counter;
  }
  render() {
    const { counter } = this.state;
    const total = this.getTotal();
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
            <ProductPrice>{ONE_PRODUCT_PRICE}$</ProductPrice>
          </ProductDetails>
        </ProductContainer>
        <QuantityContainer>
          <QuantityButton onClick={this.handleUpdate} name="minus">
            <FaMinus fontSize={25} />
          </QuantityButton>
          <QuantityLabel>{counter}</QuantityLabel>
          <QuantityButton onClick={this.handleUpdate} name="plus">
            <FaPlus fontSize={25} />
          </QuantityButton>
        </QuantityContainer>
        <TotalContainer>
          <TotalLabel>Total:</TotalLabel>
          <TotalValue>{total}$</TotalValue>
        </TotalContainer>
        <BuyButton type="button">Buy now</BuyButton>
      </Section>
    );
  }
}

// export const ProductCart = () => {
//   return (
//     <Section className="h-custom">
//       <Title>Shopping Cart</Title>
//       <ProductContainer>
//         <ProductImage
//           src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//           alt="Generic placeholder"
//         />
//         <ProductDetails>
//           <ProductName>iPhone 9</ProductName>
//           <ProductBrand>Apple</ProductBrand>
//           <ProductPrice>549$</ProductPrice>
//         </ProductDetails>
//       </ProductContainer>
//       <QuantityContainer>
//         <QuantityButton name="minus">
//           <FaMinus fontSize={25} />
//         </QuantityButton>
//         <QuantityLabel>{0}</QuantityLabel>
//         <QuantityButton name="plus">
//           <FaPlus fontSize={25} />
//         </QuantityButton>
//       </QuantityContainer>
//       <TotalContainer>
//         <TotalLabel>Total:</TotalLabel>
//         <TotalValue>{0}$</TotalValue>
//       </TotalContainer>
//       <BuyButton type="button">Buy now</BuyButton>
//     </Section>
//   );
// // };
