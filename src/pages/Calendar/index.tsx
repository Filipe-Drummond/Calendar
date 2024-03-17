import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

import {
  CalendarContent,
  CalendarHeader,
  CalendarWrapper,
  ChevronsContainer,
  Container,
  Day,
  Month,
  Title,
  Year,
} from "./styles";

export const Calendar = () => {
  const days = [
    27, 28, 29, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25, 26, 27, 18, 19, 30, 31, 1, 2,
  ];
  return (
    <Container>
      <View>
        <Title bold>Calendar</Title>
        <CalendarWrapper>
          <CalendarHeader>
            <Month>
              March <Year>2024</Year>
            </Month>
            <ChevronsContainer>
              <TouchableOpacity
                style={{ paddingHorizontal: 4, paddingVertical: 2 }}
              >
                <Feather name="chevron-left" size={15} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingHorizontal: 4, paddingVertical: 2 }}
              >
                <Feather name="chevron-right" size={15} color="#fff" />
              </TouchableOpacity>
            </ChevronsContainer>
          </CalendarHeader>
          <CalendarContent>
            {days.map((day, index) => (
              <Day key={index}>
                <Month color="#fff">{day}</Month>
              </Day>
            ))}
          </CalendarContent>
        </CalendarWrapper>
      </View>
    </Container>
  );
};
