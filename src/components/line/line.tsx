import React, {useCallback} from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import {Tooltip} from 'react-native-elements';
import {styles} from './styles';

interface LineProps {
  line: Line;
  isAnswerLine?: boolean;
  answer?: Answer;
}

export const Line: React.FC<LineProps> = ({
  line,
  isAnswerLine = false,
  answer,
}) => {
  const renderPart = useCallback(
    (part?: TextProps[], underline = false) =>
      part
        ?.filter(textProps => !!textProps.text)
        .map(textProps => {
          const currentStyles: StyleProp<TextStyle> = [styles.defaultText];
          if (textProps.hint) {
            currentStyles.push(styles.hint);
          }
          if (underline) {
            currentStyles.push(styles.underline);
          }
          if (textProps.hint) {
            return (
              <Tooltip
                width={70}
                key={textProps.text}
                backgroundColor="white"
                withOverlay={false}
                popover={<Text>{textProps.hint}</Text>}>
                <Text style={currentStyles}>{textProps.text}</Text>
              </Tooltip>
            );
          }
          return (
            <Text key={textProps.text} style={currentStyles}>
              {textProps.text}
            </Text>
          );
        }),
    [],
  );

  const renderAnswer = useCallback(
    (currentAnswer: Answer) => (
      <View style={styles.answerContainer}>
        <Text>{currentAnswer.text}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.lineContainer}>
      <Text>{renderPart(line.start)}</Text>
      {answer ? (
        renderAnswer(answer)
      ) : (
        <Text>{renderPart(line.underline, !isAnswerLine)}</Text>
      )}
      <Text>{renderPart(line.end)}</Text>
    </View>
  );
};
