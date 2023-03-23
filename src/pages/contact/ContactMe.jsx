import Input from "../../components/inputs/Input";
import TextArea from "../../components/inputs/TextArea";
import Button from "../../components/inputs/Button";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import Success from "../../components/alerts/Success";

const Form = {
  name: "",
  email: "",
  subject: "",
  message: "",
  view: false,
};

export default function ContactMe() {
  const [form, setForm] = useState(Form);
  const [response, setResponse] = useState({
    status: true,
    message: "Enviado Correctamente",
  });

  const handleChangeForm = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;

    setForm((previus) => {
      return { ...previus, [name]: value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    emailjs
      .send("default_service", "template_woi754e", form, "ptr6CixDah4R-FpE-")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setForm({ ...Form, view: true });
      })
      .catch((err) => {
        alert("Error, Reintentar");
        console.log("FAILED...", err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setForm({ ...form, view: false });
    }, 3000);
  }, [form.view]);

  return (
    <div id="contactme" className="bg-main text-textOne min-h-screen px-6">
      <div className="flex flex-col items-center justify-center pt-6 md:pt-[5.5rem]">
        <h1 className="text-3xl font-bold">Contactame</h1>
        <p className="text-textThree"></p>
      </div>

      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4"
      >
        <section className="md:flex-1 p-5">
          <Input
            type="value"
            name="name"
            changeValue={handleChangeForm}
            value={form.name}
            label="Nombre"
          />
          <Input
            type="email"
            name="email"
            changeValue={handleChangeForm}
            value={form.email}
            label="Correo"
          />
          <Input
            type="value"
            name="subject"
            changeValue={handleChangeForm}
            value={form.subject}
            label="Asunto"
          />
          <div className="hidden place-content-center md:grid">
            <Button />
          </div>
        </section>
        <section className="md:flex-1 p-5">
          <TextArea
          name="message"
          cols={30}
          rows={10}
          changeValue={handleChangeForm}
          value={form.message}
          />
          <div className="grid place-content-center md:hidden">
            <Button />
          </div>
        </section>
      </form>

      
      <Success
        status={response.status}
        message={response.message}
        view={form.view}
        setView={() => {
          setForm({ ...form, view: false });
        }}
      /> 
    </div>
  );
}
