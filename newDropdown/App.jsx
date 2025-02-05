import { Breadcrumb } from "./components/Breadcrumb"

const customers = [
  {
    name: "Customer A with a very long name",
    subCustomers: [{ name: "Sub-Customer A1 with a long name" }, { name: "Sub-Customer A2" }],
  },
  {
    name: "Customer B",
  },
  {
    name: "Customer C",
    subCustomers: [{ name: "Sub-Customer C1" }, { name: "Sub-Customer C2" }, { name: "Sub-Customer C3" }],
  },
]

function App() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Breadcrumb Navigation Example</h1>
      <Breadcrumb customers={customers} />
    </div>
  )
}

export default App

