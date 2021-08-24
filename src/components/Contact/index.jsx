import "./style.css";
import { TextField } from "@material-ui/core";

const About = () => {
  return (
    <div className="contact">
      <h1>Participe</h1>
      <h1>Em construção</h1>
      <form>
        <TextField id="standard-basic" label="Nome" />
        <TextField id="standard-basic" label="E-mail" />
        <TextField id="standard-basic" label="Telefone" />
      </form>
    </div>
  );
};

export default About;
