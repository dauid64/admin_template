import Layout from "../components/template/Layout"
import { AppConsumer } from "../data/context/AppContext"
import useAppData from "../data/hook/useAppData"

export default function Notifications() {
  const ctx = useAppData()
  return (
    <Layout title="Notificações" subtitle="Aqui você irá gerenciar as suas notificações">
      <button onClick={ctx.alternarTema}>Alternar Tema</button>
    </Layout>
  )
}
