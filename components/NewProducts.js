import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;

const Container = styled.div`
  margin-top: 10%;
  padding-bottom: 80px;
  margin-left:15%;
`;

export default function NewProducts({ products }) {
  return (
    <Container>
      <Center>
        <Title>New Arrivals</Title>
        <ProductsGrid products={products} />
      </Center>
    </Container>
  );
}
