import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #f5ebe9;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  overflow: auto;
  position: relative;
`;

const StyledBox = styled.div`
  position: absolute;
  z-index: 10;
  top: 100px;
  left: 150px;
  width: 300px;
  height: 300px;
  background-color: #c65847;
  border-radius: 19% 81% 74% 26% / 22% 30% 70% 78%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const StyledBox2 = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 70px;
  right: 250px;
  width: 250px;
  height: 250px;
  background-color: #002526;
  border-radius: 62% 38% 71% 29% / 35% 57% 43% 65%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const StyledBorder = styled.div`
  position: absolute;
  top: 80px;
  left: 47%;
  width: 370px;
  height: 500px;
  border: 7.5px solid #f3c09f;
  border-radius: 3px;
`;

const Text = styled.div`
  position: absolute;
  z-index: 10;
  top: 20%;
  right: 30%;
  font-size: 80px;
  font-family: "Cafe24Oneprettynight";
  color: #002526;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 220vh;
  background-color: #b9b4a8;
  gap: 20px;
`;

const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  width: 300px;
  height: 500px;
  border-radius: 3px;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const ProfileComment = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 3px 3px 0 0;
`;

const Profile = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 0 0 3px 3px;
  background-image: linear-gradient(
      to bottom,
      rgba(230, 140, 115, 0.75),
      rgba(230, 140, 115, 0.35)
    ),
    url("/images/userImg.jpg");
`;

const Img = styled.img`
width: 50%;
height: 50%;
object-fit: contain;

`;

export {
  Container,
  TextContainer,
  StyledBox,
  StyledBox2,
  StyledBorder,
  Text,
  ProfileContainer,
  ProfileLayout,
  ProfileComment,
  Profile,
  Img,
};
