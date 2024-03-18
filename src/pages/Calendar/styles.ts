import styled from "styled-components/native";

import { CustomText } from "../../components/CustomText";

interface DayProps {
  $isSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #030303;
  padding: 0 28px;
`;

export const Title = styled(CustomText)`
  align-self: flex-start;
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 16px;
`;

export const CalendarWrapper = styled.View`
  height: 288px;
  width: 100%;
  background-color: #131313;
  border: 1px solid #505050;
  border-radius: 7px;
  padding: 16px 0px;
`;

export const CalendarHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  margin-bottom: 18px;
`;

export const Month = styled(CustomText)`
  font-size: 15px;
`;

export const Year = styled(CustomText)`
  font-size: 25px;
  line-height: 37.5px;
`;

export const ChevronsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CalendarContent = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 14px;
  justify-content: space-between;
  align-content: space-between;
  column-gap: 34px;
`;

export const Day = styled.TouchableOpacity<DayProps>`
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#00a19b" : "transparent"};
`;

export const Chevron = styled.TouchableOpacity`
  padding: 2px 8px;
`;
