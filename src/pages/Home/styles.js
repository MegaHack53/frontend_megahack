import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 24px;
  background-color: #fff;
  padding-top: 20px;
`;

export const Header = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-family: "Roboto";
  font-size: 16px;
  color: #cfd8dc;
`;

export const HeaderTextTotal = styled.Text`
  font-family: "Roboto";
  font-size: 28px;
  color: #305f72;
`;

export const CardContainer = styled.ScrollView`
  flex-direction: row;
  margin: 20px 0;
  height: 200px;
`;

export const Card = styled.View`
  width: 142px;
  height: 110px;
  padding: 12px;
  margin-right: 8px;
  background: ${(props) => props.background};
  border-radius: 12px;
`;

export const CardCategory = styled.Text`
  font-size: 18px;
  color: #dfdee6;
`;

export const CardValue = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const CardPercentage = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #dfdee6;
`;

export const RecentActivities = styled.View``;

export const RecentActivitiesTitle = styled.Text``;

export const ListActivities = styled.FlatList``;

export const NavBar = styled.FlatList``;
