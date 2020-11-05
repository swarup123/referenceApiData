function formatJsonValue(inputJson, referenceData) {
  let inputJsonValue = inputJson.value;
  for (let i = 0; i < inputJsonValue.length; i++) {
    if (inputJsonValue[i].valueType === "string") {
      let inputValue = inputJsonValue[i].value;
      inputJsonValue[i].value =
        referenceData[inputValue.substring(1, inputValue.length - 1)] ||
        inputValue;
    } else {
      formatJsonValue(inputJsonValue[i], referenceData);
    }
  }

  return inputJsonValue;
}

exports.reference = async (req, res, next) => {
  try {
    const inputJson = req.body;

    const inputJsonValue = inputJson["payload"];
    const referenceData = inputJson["referenceData"];

    const formattedValue = formatJsonValue(inputJsonValue, referenceData);

    res.send({ value: formattedValue });
  } catch (error) {
    res.send({ err: error });
  }
};
