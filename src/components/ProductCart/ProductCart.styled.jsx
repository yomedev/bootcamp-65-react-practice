import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.24);
  &.h-custom {
    height: auto; 
  }
  background-color: #eee;
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  padding-top: 0.5rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.24);
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const ProductImage = styled.img`
  width: 150px;
`;

export const ProductDetails = styled.div`
  margin-left: 0.75rem;
`;

export const ProductName = styled.h5`
  color: #007bff; /* Blue color */
`;

export const ProductBrand = styled.h6`
  color: #9e9e9e;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  margin-bottom: 0;
  margin-right: 2.5rem;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const QuantityButton = styled.button`
  border-radius: 10px;
  border: 5px solid #007bff;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #007bff;
  :hover {
    background-color: #007bff;
    color: #fff;
  }
`;

export const QuantityLabel = styled.h4`
  margin: auto;
  font-size: 24px;
`;

export const TotalContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #e1f5fe;
`;

export const TotalLabel = styled.h5`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const TotalValue = styled.h5`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const BuyButton = styled.button`
  border-radius: 10px;
  border: 5px solid #cc00ff;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cc00ff;
  :hover {
    background-color: #cc00ff;
    color: #fff;
  }
  max-width: 300px;
`;

