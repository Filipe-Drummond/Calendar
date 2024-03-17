import { Text, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  bold?: boolean;
  color?: string;
}

export const CustomText = ({
  children,
  style,
  bold,
  color,
  ...rest
}: CustomTextProps) => {
  return (
    <Text
      style={[
        {
          fontFamily: bold ? "Poppins_600SemiBold" : "Poppins_500Medium",
          color: color ?? "#fff",
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};
