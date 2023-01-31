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
    <div id="contactme" className="h-screen p-2">
      <div className="h-[10%] p-2 text-center text-tprimary">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="text-txThird/50">Get in touch</p>
      </div>

      <form
        action=""
        onSubmit={handleSubmit}
        className=" h-[80%] py-2 px-4 my-2 xl:px-[10%]"
      >
        <div className="md:flex md:space-x-4">
          <Input
            type="value"
            name="name"
            changeValue={handleChangeForm}
            value={form.name}
          />
          <Input
            type="email"
            name="email"
            changeValue={handleChangeForm}
            value={form.email}
          />
        </div>
        <Input
          type="value"
          name="subject"
          changeValue={handleChangeForm}
          value={form.subject}
        />
        <div className="w-full">
          <TextArea
            name="message"
            cols="30"
            rows="10"
            changeValue={handleChangeForm}
            value={form.message}
          />
        </div>
        <div className="w-full flex justify-center py-2 my-4 md:my-2">
          <Button />
        </div>
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
