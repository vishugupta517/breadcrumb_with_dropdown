import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export function SubCustomerCheckboxes({ subCustomers }) {
  const [selectedSubCustomers, setSelectedSubCustomers] = useState([])

  const handleCheckboxChange = (subCustomerName) => {
    setSelectedSubCustomers((prev) =>
      prev.includes(subCustomerName) ? prev.filter((name) => name !== subCustomerName) : [...prev, subCustomerName],
    )
  }

  return (
    <div className="mt-2 ml-4 space-y-2">
      {subCustomers.map((subCustomer) => (
        <div key={subCustomer.name} className="flex items-center space-x-2">
          <Checkbox
            id={`checkbox-${subCustomer.name}`}
            checked={selectedSubCustomers.includes(subCustomer.name)}
            onCheckedChange={() => handleCheckboxChange(subCustomer.name)}
          />
          <label
            htmlFor={`checkbox-${subCustomer.name}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {subCustomer.name}
          </label>
        </div>
      ))}
    </div>
  )
}

