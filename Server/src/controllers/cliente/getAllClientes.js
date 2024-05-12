const { Cliente } = require("../../DB");

const getAllCliente = async (filters) => {
  const newFilters = {};
  const newOrder = {};
  const order = [];

  if (filters.field) {
    //  si no te envian filters.order que sea por defecto asc
    // se ordena
    const ord = filters.order?.toUpperCase() || "ASC";
    order.push([filters.field, ord]);
  }

  // const ord = filters.order?.toUpperCase() || "ASC";               //TODO así se puede hacer sin necesidad
  // const fieldOrder = filters.field?.toLowerCase() || "apellido";   //TODO de utilizar un if() porque siempre tendriamos los dos valores
  // order.push([fieldOrder, ord]);

  delete filters.order;
  delete filters.field;

  Object.entries(filters).forEach(([field, value]) => {
    // destructuro filters

    if (value) {
      // verifico no sea undefind
      console.log("Prop, valor", field, value);

      if (value === "ord") {
        //verifico que el comando requiera ser ordnado
        newOrder[field.substring(0, field.length - 3)]; //traeme desde el cero hasta los tres anteriorres
      } else {
        newFilters[field] = value; // acá estoy guardando de forma dinamica los valores de cada propiedad
      }

      // se pueden poner mas if para formatear los valores entramtes.
      //por ejemplo: si es un correo usar value.toLowerCase()
    }
  });

  const consulta = {
    where: {
      activo: true,
      ...newFilters, // agrego los campos cuyos valores existan
    },
    order,
  };

  const allClient = await Cliente.findAll(consulta);
  return allClient;
};

module.exports = {
  getAllCliente,
};
