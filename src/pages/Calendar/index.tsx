import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";

import {
  CalendarContent,
  CalendarHeader,
  CalendarWrapper,
  Chevron,
  ChevronsContainer,
  Container,
  Day,
  Month,
  Title,
  Year,
} from "./styles";
import { monthNames, useCalendar } from "../../hooks/useCalendar";

export const Calendar = () => {
  const {
    days,
    selectedDay,
    currentMonth,
    currentYear,
    createMonth,
    onNextMonth,
    onPreviousMonth,
    onSelectedDay,
  } = useCalendar();

  useEffect(() => {
    createMonth();
  }, [createMonth]);

  return (
    <Container>
      <View>
        <Title bold>Calendar</Title>
        <CalendarWrapper>
          <CalendarHeader>
            <Month>
              {monthNames[currentMonth]} <Year>{currentYear}</Year>
            </Month>
            <ChevronsContainer>
              <Chevron onPress={onPreviousMonth}>
                <Feather name="chevron-left" size={15} color="#fff" />
              </Chevron>
              <TouchableOpacity onPress={onNextMonth}>
                <Feather name="chevron-right" size={15} color="#fff" />
              </TouchableOpacity>
            </ChevronsContainer>
          </CalendarHeader>
          <CalendarContent>
            {days.map(({ day, isCurrentMonth }, index) => (
              <Day
                key={index}
                $isSelected={selectedDay === day && isCurrentMonth}
                onPress={() => onSelectedDay(day)}
                disabled={!isCurrentMonth}
              >
                <Month color={isCurrentMonth ? "#fff" : "#424242"}>{day}</Month>
              </Day>
            ))}
          </CalendarContent>
        </CalendarWrapper>
      </View>
    </Container>
  );
};
