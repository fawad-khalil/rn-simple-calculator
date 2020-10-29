import { buttonsConfig, operatorNameToOperatorDictionary } from './resources';

export const handleOperator = ({ currentResult, previousOperator, previousInput }) => {
  const { divide, multiply, minus, plus } = buttonsConfig;
  const operatorBasedResult = {
    [divide.name]: () => parseFloat(currentResult) / parseFloat(previousInput),
    [multiply.name]: () => parseFloat(currentResult) * parseFloat(previousInput),
    [minus.name]: () => parseFloat(currentResult) - parseFloat(previousInput),
    [plus.name]: () => parseFloat(currentResult) + parseFloat(previousInput),
  };
  const operate = operatorBasedResult[previousOperator];

  return operate();
};

export const handleOperatorInput = ({
  previousInput,
  setPreviousInput,
  previousOperator,
  setPreviousOperator,
  currentResult,
  setCurrentResult,
  operatorName,
  setCurrentExpression,
  currentExpression,
}) => {
  if (previousInput && !previousOperator) {
    setCurrentExpression([...currentExpression, previousInput, operatorNameToOperatorDictionary[operatorName]]);

    setPreviousOperator(operatorName);
    setCurrentResult(parseFloat(previousInput));
    setPreviousInput(null);
  } else if (previousOperator && previousInput) {
    const result = handleOperator({ currentResult, previousOperator, previousInput });

    setCurrentExpression([...currentExpression, previousInput, operatorNameToOperatorDictionary[operatorName]]);

    setPreviousOperator(operatorName);
    setCurrentResult(result);
    setPreviousInput(null);
  } else if (currentResult === 0 && !previousOperator && !previousInput) {
    setCurrentExpression([currentResult, operatorNameToOperatorDictionary[operatorName]]);

    setPreviousOperator(operatorName);
  } else if (previousOperator && !previousInput) {
    currentExpression.pop();
    setCurrentExpression([...currentExpression, operatorNameToOperatorDictionary[operatorName]]);

    setPreviousOperator(operatorName);
  }
};

const handleNumberInput = ({
  previousInput,
  setPreviousInput,
  previousOperator,
  currentResult,
  setCurrentResult,
  number,
}) => {
  const stringNumber = number.toString();
  if (currentResult === 0 && !previousOperator && !previousInput) {
    setCurrentResult(number);
    setPreviousInput(stringNumber);
  } else if (currentResult && !previousOperator && previousInput) {
    const newInput = previousInput + stringNumber;

    setPreviousInput(newInput);
    setCurrentResult(parseFloat(newInput));
  } else if (currentResult === 0 && previousOperator && !previousInput) {
    setPreviousInput(stringNumber);
  } else if (currentResult && previousOperator && !previousInput) {
    setPreviousInput(stringNumber);
  } else if (currentResult && previousOperator && previousInput) {
    const newInput = previousInput + stringNumber;

    setPreviousInput(newInput);
  } else if (!previousOperator && !previousInput) {
    const newInput = stringNumber;

    setPreviousInput(newInput);
    setCurrentResult(number);
  }
};

export const getButtonsConfigs = () => {
  const {
    AC,
    divide,
    seven,
    eight,
    nine,
    multiply,
    four,
    five,
    six,
    minus,
    one,
    two,
    three,
    plus,
    zero,
    decimal,
    equal,
  } = buttonsConfig;

  return [
    {
      ...AC,
      handler: ({ setCurrentResult, setPreviousInput, setPreviousOperator, setCurrentExpression }) => {
        setPreviousOperator(null);
        setCurrentResult(0);
        setPreviousInput(null);
        setCurrentExpression([]);
      },
    },

    {
      ...divide,
      handler: ({
        previousInput,
        setPreviousInput,
        previousOperator,
        setPreviousOperator,
        currentResult,
        setCurrentResult,
        setCurrentExpression,
        currentExpression,
      }) => {
        handleOperatorInput({
          previousInput,
          setPreviousInput,
          previousOperator,
          setPreviousOperator,
          currentResult,
          setCurrentResult,
          operatorName: divide.name,
          setCurrentExpression,
          currentExpression,
        });
      },
    },

    {
      ...seven,
      handler: ({ currentResult, previousOperator, previousInput, setPreviousInput, setCurrentResult }) => {
        handleNumberInput({
          currentResult,
          previousOperator,
          previousInput,
          setPreviousInput,
          setCurrentResult,
          number: 7,
        });
      },
    },

    {
      ...eight,
      handler: ({ currentResult, previousOperator, previousInput, setPreviousInput, setCurrentResult }) => {
        handleNumberInput({
          currentResult,
          previousOperator,
          previousInput,
          setPreviousInput,
          setCurrentResult,
          number: 8,
        });
      },
    },

    {
      ...nine,
      handler: ({ currentResult, previousOperator, previousInput, setPreviousInput, setCurrentResult }) => {
        handleNumberInput({
          currentResult,
          previousOperator,
          previousInput,
          setPreviousInput,
          setCurrentResult,
          number: 9,
        });
      },
    },

    {
      ...multiply,
      handler: ({
        previousInput,
        setPreviousInput,
        previousOperator,
        setPreviousOperator,
        currentResult,
        setCurrentResult,
        setCurrentExpression,
        currentExpression,
      }) => {
        handleOperatorInput({
          previousInput,
          setPreviousInput,
          previousOperator,
          setPreviousOperator,
          currentResult,
          setCurrentResult,
          operatorName: multiply.name,
          setCurrentExpression,
          currentExpression,
        });
      },
    },

    {
      ...four,
      handler: ({ currentResult, previousOperator, previousInput, setPreviousInput, setCurrentResult }) => {
        handleNumberInput({
          currentResult,
          previousOperator,
          previousInput,
          setPreviousInput,
          setCurrentResult,
          number: 4,
        });
      },
    },

    {
      ...five,
      handler: ({ currentResult, previousOperator, previousInput, setPreviousInput, setCurrentResult }) => {
        handleNumberInput({
          currentResult,
          previousOperator,
          previousInput,
          setPreviousInput,
          setCurrentResult,
          number: 5,
        });
      },
    },

    {
      ...six,
      handler: ({ currentResult, previousOperator, previousInput, setPreviousInput, setCurrentResult }) => {
        handleNumberInput({
          currentResult,
          previousOperator,
          previousInput,
          setPreviousInput,
          setCurrentResult,
          number: 6,
        });
      },
    },

    {
      ...minus,
      handler: ({
        previousInput,
        setPreviousInput,
        previousOperator,
        setPreviousOperator,
        currentResult,
        setCurrentResult,
        setCurrentExpression,
        currentExpression,
      }) => {
        handleOperatorInput({
          previousInput,
          setPreviousInput,
          previousOperator,
          setPreviousOperator,
          currentResult,
          setCurrentResult,
          operatorName: minus.name,
          setCurrentExpression,
          currentExpression,
        });
      },
    },

    {
      ...one,
      handler: ({ currentResult, previousOperator, previousInput, setPreviousInput, setCurrentResult }) => {
        handleNumberInput({
          currentResult,
          previousOperator,
          previousInput,
          setPreviousInput,
          setCurrentResult,
          number: 1,
        });
      },
    },

    {
      ...two,
      handler: ({ currentResult, previousOperator, previousInput, setPreviousInput, setCurrentResult }) => {
        handleNumberInput({
          currentResult,
          previousOperator,
          previousInput,
          setPreviousInput,
          setCurrentResult,
          number: 2,
        });
      },
    },

    {
      ...three,
      handler: ({ currentResult, previousOperator, previousInput, setPreviousInput, setCurrentResult }) => {
        handleNumberInput({
          currentResult,
          previousOperator,
          previousInput,
          setPreviousInput,
          setCurrentResult,
          number: 3,
        });
      },
    },

    {
      ...plus,
      handler: ({
        previousInput,
        setPreviousInput,
        previousOperator,
        setPreviousOperator,
        currentResult,
        setCurrentResult,
        setCurrentExpression,
        currentExpression,
      }) => {
        handleOperatorInput({
          previousInput,
          setPreviousInput,
          previousOperator,
          setPreviousOperator,
          currentResult,
          setCurrentResult,
          operatorName: plus.name,
          setCurrentExpression,
          currentExpression,
        });
      },
    },

    {
      ...zero,
      handler: ({ currentResult, previousOperator, previousInput, setPreviousInput, setCurrentResult }) => {
        handleNumberInput({
          currentResult,
          previousOperator,
          previousInput,
          setPreviousInput,
          setCurrentResult,
          number: 0,
        });
      },
    },

    {
      ...decimal,
      handler: ({ previousInput, setPreviousInput, previousOperator, setCurrentResult }) => {
        if (!previousInput) {
          setPreviousInput('0.');
          setCurrentResult('0.');
        } else if (previousInput) {
          const newInput = previousInput + '.';
          setPreviousInput(newInput);

          if (!previousOperator) {
            setCurrentResult(parseFloat(newInput));
          }
        }
      },
    },

    {
      ...equal,
      handler: ({
        currentResult,
        setCurrentResult,
        previousOperator,
        setPreviousOperator,
        previousInput,
        setPreviousInput,
        setHistoryExpressions,
        historyExpressions,
        currentExpression,
        setCurrentExpression,
      }) => {
        let result;
        let newExpression = [...currentExpression];

        if (!previousOperator && previousInput) {
          result = parseFloat(previousInput);
          newExpression = [...newExpression, previousInput];

          setCurrentResult(result);
          setPreviousInput(null);
        } else if (previousInput && previousOperator) {
          result = handleOperator({ currentResult, previousOperator, previousInput });
          newExpression = [...newExpression, previousInput];

          setCurrentResult(result);
          setPreviousOperator(null);
          setPreviousInput(null);
        }

        setHistoryExpressions([...historyExpressions, { expression: [...newExpression], result }]);
        setCurrentExpression([]);
      },
    },
  ];
};
