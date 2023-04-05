import styled from "styled-components"
import { categories } from "../data";
import {CategoryItem} from "./CategoryItem";
import {mobile} from "../responsive";

const Conatiner = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({padding:"0px", flexDirection:"column"})};
`;

export const Categories = () => {
  return (
    <Conatiner>
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Conatiner>
  )
}

