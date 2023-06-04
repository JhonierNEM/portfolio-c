//Components
import Success from '../../components/alerts/Success'
import HTitle from '../../components/headers/HTitle'
import Input from '../../components/form/inputs/Input'
import TextArea from '../../components/form/textareas/TextArea'
import BContactme from '../../components/form/buttons/BContactme'
import emailjs from 'emailjs-com'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Form = {
  name: '',
  email: '',
  subject: '',
  message: '',
  view: false,
}

export default function ContactMe() {
  const [form, setForm] = useState(Form)
  const { CONTACTME } = useSelector((state) => state.app.information.PAGES)
  const [response, setResponse] = useState({
    status: true,
    message: 'Enviado Correctamente',
  })

  const handleChangeForm = (evt) => {
    evt.preventDefault()
    const { name, value } = evt.target

    setForm((previus) => {
      return { ...previus, [name]: value }
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    emailjs
      .send('default_service', 'template_woi754e', form, 'ptr6CixDah4R-FpE-')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setForm({ ...Form, view: true })
      })
      .catch((err) => {
        alert('Error, Reintentar')
        console.log('FAILED...', err)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      setForm({ ...form, view: false })
    }, 3000)
  }, [form.view])

  return (
    <div
      id="contactme"
      itemID="contact"
      className="bg-main text-tx-main min-h-screen px-6"
    >
      <HTitle title={CONTACTME.title} sub={CONTACTME.sub} />

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
            label={CONTACTME.labels[0]}
          />
          <Input
            type="email"
            name="email"
            changeValue={handleChangeForm}
            value={form.email}
            label={CONTACTME.labels[1]}
          />
          <Input
            type="value"
            name="subject"
            changeValue={handleChangeForm}
            value={form.subject}
            label={CONTACTME.labels[2]}
          />
          <div className="hidden place-content-center md:grid">
            <BContactme label={CONTACTME.contact} />
          </div>
        </section>
        <section className="md:flex-1 p-5">
          <TextArea
            name="message"
            cols={30}
            rows={10}
            changeValue={handleChangeForm}
            value={form.message}
            placeholder={CONTACTME.labels[3]}
          />
          <div className="grid place-content-center md:hidden">
            <BContactme label={CONTACTME.contact} />
          </div>
        </section>
      </form>

      <Success
        status={response.status}
        message={response.message}
        view={form.view}
        setView={() => {
          setForm({ ...form, view: false })
        }}
      />
    </div>
  )
}
