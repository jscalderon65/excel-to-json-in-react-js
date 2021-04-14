import React, { useState } from 'react';
import PropTypes from 'prop-types';
const ExcelToJson = ({
  ContainerClassName = "",
  InputFileClassName = "",
  ContainerButtonsClassName = "",
  ConvertButtonClassName = "",
  CleanButtonsClassName = "",
  ConvertButtonText = "Convert",
  CleanButtonText = "Clean",
  JsonDataSetter,
}) => {
  const [selectedFile, setSelectedFile] = useState("");
  let data = [
    {
      name: "jayanth",
      data: "scd",
      abc: "sdef",
    },
  ];
  const OnchangeValue = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const CleanValues = () => {
    setSelectedFile("");
    document.getElementById("excel-to-json-input-file").value = "";
  };
  const onSubmitXLS = () => {
    window.XLSX.utils.json_to_sheet(data, "out.xlsx");
    if (selectedFile) {
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(selectedFile);
      fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = window.XLSX.read(data, { type: "binary" });
        console.log(workbook);
        const FinalData = workbook.SheetNames.map((sheet) => {
          let rowObject = window.XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet]
          );
          return rowObject;
        });
        JsonDataSetter(FinalData[0]);
      };
    }
  };
  return (
    <div className={ContainerClassName}>
      <input
        onChange={OnchangeValue}
        id="excel-to-json-input-file"
        className={InputFileClassName}
        type="file"
        accept=".xls,.xlsx"
      />
      <div className={`${ContainerButtonsClassName}`}>
        {selectedFile && (
          <button className={ConvertButtonClassName} onClick={onSubmitXLS}>
            {ConvertButtonText}
          </button>
        )}
        {selectedFile && (
          <button className={CleanButtonsClassName} onClick={CleanValues}>
            {CleanButtonText}
          </button>
        )}
      </div>
    </div>
  );
};
ExcelToJson.propTypes = {
  ContainerClassName :PropTypes.string,
  InputFileClassName :PropTypes.string,
  ContainerButtonsClassName :PropTypes.string,
  ConvertButtonClassName :PropTypes.string,
  CleanButtonsClassName :PropTypes.string,
  ConvertButtonText :PropTypes.string,
  CleanButtonText :PropTypes.string,
  JsonDataSetter:PropTypes.func.isRequired
};
export default ExcelToJson;
