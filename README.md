## excel-to-json-in-react-js
---
_excel-to-json-in-react-js es un componente de React Js que contiene un input file el cual permite la conversión de los datos de un archivo excel a formato JSON._

## Instalación
---
```bash
npm install  excel-to-json-in-react-js
```

## Modo de uso
---
_Se necesita pasar por las props del componente, un hook que será el que almacene los valores JSON retornados del archivo de excel escogido e importar en el head del index html de la aplicación el siguiente CDN:_

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js"></script>
```
---

```jsx
import React,{useState} from 'react';
import {ExcelToJson} from 'excel-to-json-in-react-js';
const App = () => {
  const [JsonData,setJsonData]=useState("");
  return (
    <>    
    <ExcelToJson
    JsonDataSetter={setJsonData}
    />
    {JsonData&&JSON.stringify(JsonData)}
    </>
  );
};
export default App;
```

## Props:
---
| Props                     | Función                                                                                  | Valor esperado | Valor por defecto | Es requerido |
|---------------------------|------------------------------------------------------------------------------------------|----------------|-------------------|--------------|
| ContainerClassName        | Clase de CSS para el contenedor del componente.                                          | String         |         ""        | false        |
| InputFileClassName        | Clase de CSS para el input file del componente.                                          | String         |         ""        | false        |
| ContainerButtonsClassName | Clase de CSS para el contenedor de los botones del componente.                           | String         |         ""        | false        |
| ConvertButtonClassName    | Clase de CSS para el botón de conversión de datos del componente.                        | String         |         ""        | false        |
| CleanButtonsClassName     | Clase de CSS para el botón de limpieza de datos del componente.                          | String         |         ""        | false        |
| ConvertButtonText         | Texto del botón de conversión de datos.                                                  | String         |     "Convert"     | false        |
| CleanButtonText           | Texto del botón de limpieza de datos.                                                    | String         |      "Clean"      | false        |
| JsonDataSetter            | Función que modifica el estado del la variable que contiene los valores JSON retornados. | Function       |     undefined     | true         |

## Autores 
---
* **Sebastian Calderon** - [jscalderon65](https://github.com/jscalderon65)

## Créditos
---
_Todos los créditos del funcionamiento del componente a la hora de hacer la conversión de los archivos excel a JSON, se le atribuye al repositorio de GitHub excel-to-json-by-javascript y su creador: jayanthbabu123._

* **jayanthbabu123** - *Perfil de GitHub* - [jayanthbabu123](https://github.com/jayanthbabu123)
* **excel-to-json-by-javascript** - *Repositorio de Github* - [excel-to-json-by-javascript](https://github.com/jayanthbabu123/excel-to-json-by-javascript)

## Repositorio de GitHub del proyecto:
* [excel-to-json-in-react-js](https://github.com/jscalderon65/excel-to-json-in-react-js)

## Licencia
MIT © [jscalderon65](https://github.com/jscalderon65)
