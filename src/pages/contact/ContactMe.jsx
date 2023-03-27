//Components
import Success from "../../components/alerts/Success";
import HTitle from "../../components/headers/HTitle";
import Input from "../../components/inputs/Input";
import TextArea from "../../components/inputs/TextArea";
import BContactme from "../../components/form/buttons/BContactme";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

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
      <HTitle title="Contact Me" sub="Send me a message" />

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
            label="Name"
          />
          <Input
            type="email"
            name="email"
            changeValue={handleChangeForm}
            value={form.email}
            label="Email"
          />
          <Input
            type="value"
            name="subject"
            changeValue={handleChangeForm}
            value={form.subject}
            label="Subject"
          />
          <div className="hidden place-content-center md:grid">
            <BContactme />
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
            <BContactme />
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
