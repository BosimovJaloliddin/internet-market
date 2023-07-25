import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productNew } from "../../data/product";
import Footer from "../Footer";
import Product from "../Product";
import {
  Container,
  Wrapper,
  Title,
  Navigate,
  FilterText,
  ButtonDelete,
  ButtonSubmit,
  Input,
  FilterInfo,
  Icons,
  Bg,
} from "./style";

const CategoryItem = () => {
  const params = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    let res = productNew.filter((v) => v.category === params.id);
    setData(res);
  }, [params.id]);
  return (
    <Bg>
      <Container>
        <Wrapper $gap={16}>
          <Navigate $col="#414141">Home</Navigate>
          <span>-</span>
          <Navigate $col="#414141">Category</Navigate>
          <span>-</span>
          <Navigate $col="#8f8f8f">{params.id}</Navigate>
        </Wrapper>
        <Title>{params.id}</Title>
        <Wrapper $mt={60} $gap={40}>
          <Wrapper $flx={1} $gap={40} $cl="column">
            <FilterText
              $fw={700}
              $h={44}
              $bg="#F3F2F1"
              $jc="flex-start"
              $p={10}
            >
              Filter
            </FilterText>
            <Wrapper $jc="space-between">
              <FilterText $fw={400}>Narx</FilterText>
              <ButtonDelete>Tozalash</ButtonDelete>
            </Wrapper>
            <Wrapper $gap={12}>
              <Input placeholder="0" type={"number"} />
              <Input placeholder="100000" type={"number"} />
            </Wrapper>
            <FilterText>4</FilterText>
            <FilterText>5</FilterText>
            <FilterText>6</FilterText>
            <ButtonSubmit>Filterlash</ButtonSubmit>
          </Wrapper>
          <Wrapper $flx={4} $cl="column">
            <Wrapper $gap={24}>
              <FilterInfo $bg="#70C05B" $col="#fff">
                Filter <Icons.X $col="#fff" />
              </FilterInfo>
              <FilterInfo $bg="#70C05B" $col="#fff">
                Narx 0 dan 10000 gacha <Icons.X $col="#fff" />
              </FilterInfo>
              <FilterInfo $bg="#F3F2F1" $col="#606060">
                Filterni tozalash <Icons.X $col="#606060" />
              </FilterInfo>
            </Wrapper>
            <Wrapper $mt={40} $gap={15}>
              {!data?.length ? (
                <h1>No data</h1>
              ) : (
                data?.map((value, index) => {
                  return <Product key={index} data={value} />;
                })
              )}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>
      <Footer />
    </Bg>
  );
};

export default CategoryItem;
