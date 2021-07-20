import Select from "./Select";
import TextField from "./TextField";

const DefaultExport = (props) => {
  switch (props.type) {
    case "select":
      return <Select {...props} />;
    default:
      return <TextField {...props} />;
  }
};

export default DefaultExport;
