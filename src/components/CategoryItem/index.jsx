import React, { useEffect, useRef, useState } from "react";
import { Pagination } from "antd";
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
  const [num, setNum] = useState(0);
  useEffect(() => {
    let res = productNew.filter((v) => v.category === params.id);
    setData(res);
  }, [params.id]);

  const startRef = useRef();
  const endRef = useRef();

  const onFilter = () => {
    let start = startRef.current.value;
    let end = endRef.current.value;
    if (start && end) {
      let res = productNew.filter(
        (value) =>
          value.salary >= start &&
          value.salary <= end &&
          value.category === params.id
      );
      setData(res);
    } else if (start && !end) {
      let res = productNew.filter(
        (value) => value.salary >= start && value.category === params.id
      );
      setData(res);
    } else if (!start && end) {
      let res = productNew.filter(
        (value) => value.salary <= end && value.category === params.id
      );
      setData(res);
    } else {
      let res = productNew.filter((value) => value.category === params.id);
      setData(res);
    }
  };

  const onChange = (e) => {
    setNum((e - 1) * 6);
  };
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
              <Input ref={startRef} placeholder="0" type={"number"} />
              <Input ref={endRef} placeholder="100000" type={"number"} />
            </Wrapper>
            <FilterText>4</FilterText>
            <FilterText>5</FilterText>
            <FilterText>6</FilterText>
            <ButtonSubmit onClick={onFilter}>Filterlash</ButtonSubmit>
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
            <Wrapper $mt={40} $gap={15} $fw="wrap">
              {!data?.length ? (
                <h1>No data</h1>
              ) : (
                data?.slice(num, num + 6).map((value, index) => {
                  return <Product key={index} data={value} />;
                })
              )}
            </Wrapper>
            <Wrapper $mt={24} $jc="center">
              {data?.length > 6 ? (
                <Pagination
                  onChange={onChange}
                  defaultCurrent={1}
                  total={Math.trunc((data?.length / 6) * 10)}
                />
              ) : null}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>
      <Footer />
    </Bg>
  );
};

export default CategoryItem;
