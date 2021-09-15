import styled from "styled-components";

type ProfileCardProps = {
  label: string;
};

const CrimsonBox = styled.div`
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

const TurquoiseBox = styled.div`
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

const YellowBox = styled.div`
  position: absolute;
  z-index: 9;
  top: 90%;
  left: 33%;
  width: 130px;
  height: 130px;
  background-color: #f8b73b;
  transform: rotate(90deg);
  border-radius: 63% 37% 72% 28% / 27% 58% 42% 73%;
  box-shadow: rgba(177, 103, 113, 0.65) 3px 4px 10px,
    rgba(214, 124, 136, 0.72) 10px 10px 12px;
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
const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: #f5ebe9;
  scroll-snap-type: y mandatory;
  overflow: auto;
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
`;

const HeaderText = styled.div`
  position: absolute;
  z-index: 10;
  top: 20%;
  right: 30%;
  font-size: 80px;
  font-family: "Cafe24Oneprettynight";
  color: #002526;
`;

const ArticleText = styled.div`
  position: absolute;
  z-index: 11;
  top: 95%;
  left: 10%;
  font-size: 50px;
  font-family: "Cafe24Oneprettynight";
  color: #002526;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 120vh;
  background-color: #b9b4a8;
`;

const ProfileCard = styled.div<ProfileCardProps>`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  border-radius: 23px;
  background-color: ${(props) => {
    if (props.label === "pastorCard") return "#654173";
    if (props.label === "executivesCard") return "#bf4b75";
    if (props.label === "choirCard") return "#d98c8b";
    return "#c7c7c7";
  }};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const ProfileContent = styled.div`
  position: absolute;
  z-index: 12;
  width: 300px;
  height: 430px;
  background-color: #f5f5f5;
  border-radius: 23px;
`;

const Profile = styled.img`
  position: absolute;
  z-index: 12;
  width: 300px;
  height: 300px;
  border-radius: 23px;
`;

const ScrollButton = styled.div`
  position: absolute;
  z-index: 12;
  right: 30px;
  top: 507%;
  width: 60px;
  height: 60px;
  font-size: 80px;
  border-radius: 11px;
  border: transparent;
  transition: 0.1s all ease-in;
  cursor: pointer;
  &:hover {
    background-color: rgba(97, 105, 105, 0.75);
  }
`;

const ProfileName = styled.h1`
  margin-top: 340px;
  color: #002526;
  text-align: center;
  font-family: "Cafe24Oneprettynight";
`;

const ProfileLabel = styled.h1`
  margin-top: 70px;
  color: #f5ebe9;
  text-align: center;
  font-family: "Cafe24Oneprettynight";
`;

const ScrollImg = styled.img`
  position: absolute;
  z-index: 12;
  right: 10px;
  width: 40px;
  height: 40px;
`;

const ScrollText = styled.text`
  position: absolute;
  z-index: 12;
  right: 12px;
  bottom: 0;
  font-size: 25px;
  font-weight: 600;
  font-family: "Cafe24Oneprettynight";
  color: #f5ebe9;
`;

export {
  Container,
  TextWrapper,
  CrimsonBox,
  TurquoiseBox,
  YellowBox,
  StyledBorder,
  HeaderText,
  ArticleText,
  ProfileWrapper,
  ProfileCard,
  ProfileContent,
  Profile,
  ScrollButton,
  ProfileName,
  ProfileLabel,
  ScrollImg,
  ScrollText,
};
