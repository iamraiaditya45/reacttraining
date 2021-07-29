import React from "react";
import Card from './card.js'
import Card2 from './card2.js'
import Carousel from './carousel.js'
import styled from "styled-components";
import { motion } from "framer-motion";
import Shoes1 from "./shoes1.png";
import Shoes2 from "./shoes2.png";
import Shoes3 from "./shoes3.png";
import Shoes4 from "./shoes4.png";
import Shoes5 from "./shoes5.png";
import Shoes6 from "./shoes6.png";
import Shoe from "./shoe.png";
import Star1 from "./star1.svg";
import Star2 from "./star2.svg";
import Star3 from "./star3.svg";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
const Body = styled.body`
  background: #131313;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem;
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
    color:white;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 350%;
  height: 350%;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  flex-direction: row;
`;
const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;
const Star = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const ColumnRight2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  color:white;
  font-size:30px;
  text-align:center;
`;
const Header=styled.div`
display:flex
`;
const Logo =styled.div`
 padding:10px 15px 15px 25px;
// text-align:center;
`;
const Center=styled.div`
text-align:center;
color:white;
display:flex;
margin-left:250px;
p{
  padding-left:80px;
  padding-top:10px;
  font-size:25px;
}
`;
const Left=styled.div`
text-align:center;
color:white;
display:flex;
padding:25px;
margin-left:250px;
;`

const useStyles = makeStyles((theme) => ({
  color:{
    color:"white",
  },
  }));
const Hero = () => {
  const classes = useStyles();

  const fadeLeft = {
    hidden: { opacity: 0, x: -100, y: -600 },
    visible: { opacity: 1, x: -1, y: 1 },
  };
  const fadeWelcome = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: -1 },
  };
  const fadeButton = {
    hidden: { opacity: 0, x: -100, y: 400 },
    visible: { opacity: 1, x: -1, y: 0 },
  };
  return (
    <>
      <Body>
      <Header>
          <Logo>
            <img src={Shoe}></img>
          </Logo>
          <Center>
          <p>MEN</p>
          <p>WOMEN</p>
          <p>NEW ARRIVALS</p>
          <p>KIDS</p>
          <p>BRANDS</p>
          </Center>
          <Left >
            <List>
              <ListItemIcon className={classes.color}>
            <SearchIcon/>
            </ListItemIcon>
            <ListItemIcon className={classes.color}>
            <AddShoppingCartIcon/>
            </ListItemIcon>
            <ListItemIcon className={classes.color}>
            <SettingsIcon/>
            </ListItemIcon>
            </List>
          </Left>
        </Header>

        <Section>
          <Container>
            <ColumnLeft>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeWelcome}
                transition={{ duration: 1 }}
              >
                Welcome to World of Shoes
              </motion.h1>
              <motion.p
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 2 }}
              >
                Select from range of and have a online trail
              </motion.p>
              <Button
                whileHover={{ scale: 1.05 }}
                whileHover={{
                  scale: 0.95,
                  backgroundColor: "yellow",
                  border: "none",
                  color: "#000",
                }}
                variants={fadeButton}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
              >
                FIND YOUR FIT
              </Button>
            </ColumnLeft>
            <Right>
              <ColumnRight2>
                <Star
                  src={Star1}
                  alt="star"
                  whileHover={{ scale: 1.3 }}
                  drag={true}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ opacity: 0, x: 100, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: -100,
                    y: -450,
                    transition: { duration: 1 },
                  }}
                />
                <Star
                  src={Star2}
                  alt="star"
                  whileHover={{ scale: 1.3 }}
                  drag={true}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ opacity: 0, x: 0, y: -500 }}
                  animate={{
                    opacity: 1,
                    x: 100,
                    y: -480,
                    transition: { duration: 1 },
                  }}
                />
                <Star
                  src={Star3}
                  alt="star"
                  whileHover={{ scale: 1.3 }}
                  drag={true}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: 240,
                    y: -450,
                    transition: { duration: 1 },
                  }}
                />
                <Star
                  src={Star3}
                  alt="star"
                  whileHover={{ scale: 1.3 }}
                  drag={true}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: 380,
                    y: -470,
                    transition: { duration: 1 },
                  }}
                />
                <Star
                  src={Star3}
                  alt="star"
                  whileHover={{ scale: 1.3 }}
                  drag={true}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ opacity: 0, x: 0, y: -100 }}
                  animate={{
                    opacity: 1,
                    x: 100,
                    y: -400,
                    transition: { duration: 1 },
                  }}
                />
              </ColumnRight2>
              <ColumnRight>
                <Image
                  src={Shoes1}
                  alt="planet"
                  whileHover={{ scale: 1.2 }}
                  drag={true}
                  dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -100, transition: { duration: 1 } }}
                />
                <Image
                  src={Shoes2}
                  alt="planet"
                  whileHover={{ scale: 1.2 }}
                  drag={true}
                  dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
                />
                <Image
                  src={Shoes3}
                  alt="planet"
                  whileHover={{ scale: 1.2 }}
                  drag={true}
                  dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                  initial={{ opacity: 0, x: -100, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: 100,
                    y: -100,
                    transition: { duration: 3 },
                  }}
                />
                <Image
                  src={Shoes4}
                  alt="planet"
                  whileHover={{ scale: 1.2 }}
                  drag={true}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: -100, transition: { duration: 4 } }}
                />
                <Image
                  src={Shoes5}
                  alt="planet"
                  whileHover={{ scale: 1.2 }}
                  drag={true}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ opacity: 0, x: 0, y: 200 }}
                  animate={{
                    opacity: 1,
                    x: -230,
                    y: -60,
                    transition: { duration: 5 },
                  }}
                />
                <Image
                  src={Shoes6}
                  alt="planet"
                  whileHover={{ scale: 1.2 }}
                  drag={true}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  initial={{ opacity: 0, x: -1500, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: -1200,
                    y: -195,
                    transition: { duration: 2 },
                  }}
                />
              </ColumnRight>
            </Right>
          </Container>
        </Section>
        <Description>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            class="discover"
            whileHover={{
              scale: 0.95,
              backgroundColor: "blue",
              border: "none",
              color: "black",
            }}
          >
            Discover your Favourite
          </motion.p>
        </Description>
      <Card/>
      <Card2></Card2>
      <Carousel></Carousel>
      </Body>
    </>
  );
};

export default Hero;
