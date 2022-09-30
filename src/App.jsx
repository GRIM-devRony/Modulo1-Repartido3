//IMPORTACIONES
import { useState } from "react";
import "./app.css";
import React from "react";
import FormInput from "./components/FormInput";

//FUNCION APP
const App = () => {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    edad: "",
    email: "",
    celular: "",
    barrio: "",
    ciudad: "",
    profesion: "",
    lugarDeTrabajo: "",
  });

//ARRAY QUE CONTIENE MIS INPUTS
  const inputs = [
    {
      id: 1,
      name: "nombre",
      type: "text",
      placeholder: "Nombre",
      errorMessage:
        "Nombre No puede tener una extensión de más de 30 caracteres tampoco podrá tener números, ni estar vacío.",
      label: "Nombre",
      pattern: "^[a-zA-Z ]{1,30}$",
      required: true,
    },

    {
      id: 2,
      name: "apellido",
      type: "text",
      placeholder: "Apellido",
      errorMessage:
        "Apellido no puede tener una extensión de más de 30 caracteres, tampoco podrá tener números, ni estar vacío.",
      pattern: "^[a-zA-Z ]{1,30}$",
      label: "Apellido",
      required: true,
    },
    {
      id: 3,
      name: "cedula",
      type: "text",
      placeholder: "CI",
      label: "Cedula de identidad.",
      errorMessage:
        "Cedula puede contener solamente números. No se aceptan puntos ni guiones. Deberá tener una extensión de 8 caracteres, ni más ni menos.",
      pattern: "^[0-9]{8,8}$",
      required: true,
    },
    {
      id: 4,
      name: "edad",
      type: "text",
      placeholder: "Edad",
      errorMessage: "Campo obligatorio, ingrese una edad válida.",
      label: "Edad",
      pattern: "^[1-9][0-9]?$|^140$",
      required: true,
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:
        "Por favor ingrese el Email correctamente. no se permiten mayúsculas y no podrá estar vacío.",
      label: "Email",
      pattern:
        "^(?=[A-Z0-9][A-Z0-9@.%+-]{5,253}+$)[A-Z0-9.%+-]{1,64}+@(?:(?=[A-Z0-9-]{1,63}+.)[A-Z0-9]++(?:-[A-Z0-9]++)*+.){1,8}+[A-Z]{2,63}+$",
      required: true,
    },

    {
      id: 6,
      name: "celular",
      type: "text",
      placeholder: "Celular",
      errorMessage: "Por favor ingrese un numero de Celular valido.",
      label: "Celular",
      pattern: "^[0-9]{9,9}$",
      required: true,
    },
    {
      id: 7,
      name: "barrio",
      type: "text",
      placeholder: "Barrio",
      errorMessage: "Ingrese su barrio correctamente.",
      label: "Barrio",
      required: true,
    },
    {
      id: 8,
      name: "lugarDeTrabajo",
      type: "text",
      placeholder: "Lugar de trabajo",
      errorMessage: "Por favor ingrese la empresa en la que trabaja.",
      label: "Lugar de trabajo",
      required: true,
    },
  ];


//EVENTO VALIDADOR.
  const handleSubmit = (e) => {
    e.preventDefault();
  };
//EVENTO "onChange" EL CUAL OBTIENE MIS NUEVOS VALORES.
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


//ESTADO DE SELECT CIUDAD
  const [ciudad, setCiudad] = useState("");

  function cambioCiudad(e) {
    setCiudad(e.target.value);
  }


//ESTADO DE SELECT PROFESION
  const [profesion, setProfesion] = useState("");

  function cambioProfesion(e) {
    setProfesion(e.target.value);
  }

  /*DENTRO DEL RETURN, TENEMOS UN DIV LLAMADO 'display' EN EL CUAL TENEMOS TODO EL FORMATO DE COMO
  SE VE TODO DENTRO DE LA APP, SON LOS DATOS INGRESADOS EN EL FORMULARIO, DENTRO DEL FORMULARIO
  TENEMOS EL MAPEO DE MI ARRAY DE INPUTS JUNTO CON OTRO COMPONENTE 'FormInput', DEBAJO ESTAN LOS SELECTS
  Y POR ULTIMO EL BOTON. FormInput CONTIENE LA PROPS, LS ESTADOS Y DEMAS DATOS SOBRE LOS INPUTS

  */

  return (
    <div className="app">



      <div className="display">
        <h1>MATEA</h1>
        <div className="imagen1">
          <img
            src="https://avatars.githubusercontent.com/u/59933886?s=200&v=4"
            alt="Imagen1"
          />
          <div>
            <h2>NOMBRE: {values.nombre}</h2>
            <h2>APELLIDO: {values.apellido}</h2>
          </div>
        </div>



        <div className="DatosP1">
          <h3>CÉDULA: {values.cedula}</h3>
          <h3>EDAD: {values.edad}</h3>
          <h3>EMAIL: {values.email}</h3>
          <h3>CELULAR: {values.celular}</h3>
          <img
            className="imgUruguay"
            src="http://gooova.com/wp-content/uploads/2020/12/uruguay-colorear.png"
            alt="imagen Uruguay"
          />
        </div>


        <div className="DatosP2">
          <h2>CIUDAD: {ciudad}</h2>
          <h2>PROFESION: {profesion}</h2>
          <h2>BARRIO: {values.barrio}</h2>
          <h2>LUGAR DE TRABAJO: {values.lugarDeTrabajo}</h2>
        </div>
      </div>



      
      <div>
        <form className="Formulario" onSubmit={handleSubmit}>
          <h2 className="formH1">FORMULARIO</h2>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}



          <label>Ciudad</label>
          <select value={ciudad} onChange={cambioCiudad}>
            <option>Artigas</option>
            <option>Canelones</option>
            <option>Cerro Largo</option>
            <option>Colonia</option>
            <option>Durazno</option>
            <option>Flores</option>
            <option>Florida</option>
            <option>Lavalleja</option>
            <option>Maldonado</option>
            <option>Montevideo</option>
            <option>Paysandú</option>
            <option>Río Negro</option>
            <option>Rivera</option>
            <option>Rocha</option>
            <option>Salto</option>
            <option>San José</option>
            <option>Soriano</option>
            <option>Tacuarembó</option>
            <option>Treinta y Tres</option>
          </select>




          <label>Lugar de trabajo</label>
          <select value={profesion} onChange={cambioProfesion}>
            <option>Diseñador</option>
            <option>Programador</option>
            <option>Analista</option>
            <option>Ingeniero</option>
          </select>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;

/*RONY SILVA, BRUNO ALVEZ.*/
