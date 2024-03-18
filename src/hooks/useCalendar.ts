import { useCallback, useState } from "react";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const useCalendar = () => {
  const [days, setDays] = useState<{ day: number; isCurrentMonth: boolean }[]>(
    [],
  );
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const createMonth = useCallback(() => {
    const numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const newDays = Array.from({ length: numberOfDays }, (_, day) => ({
      day: day + 1,
      isCurrentMonth: true,
    }));

    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    newDays.unshift(
      { day: prevMonthLastDay - 1, isCurrentMonth: false },
      { day: prevMonthLastDay, isCurrentMonth: false },
    );

    const daysNeededFromNextMonth = 36 - newDays.length;
    for (let i = 1; i <= daysNeededFromNextMonth; i++) {
      newDays.push({ day: i, isCurrentMonth: false });
    }

    setDays(newDays);
  }, [currentMonth, currentYear]);

  const onNextMonth = useCallback(() => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }, [currentMonth, currentYear]);

  const onPreviousMonth = useCallback(() => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }, [currentMonth, currentYear]);

  const onSelectedDay = useCallback((day: number) => {
    setSelectedDay(day);
  }, []);

  return {
    days,
    selectedDay,
    currentMonth,
    currentYear,
    createMonth,
    onNextMonth,
    onPreviousMonth,
    onSelectedDay,
  };
};
