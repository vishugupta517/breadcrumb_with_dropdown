import { Checkbox } from "@/components/ui/checkbox"

export function SubCustomerCheckboxes({ customer, subCustomers, selectedSubCustomers, onSubCustomerSelect }) {
  const handleCheckboxChange = (subCustomerName) => {
    const updatedSelection = selectedSubCustomers.includes(subCustomerName)
      ? selectedSubCustomers.filter((name) => name !== subCustomerName)
      : [...selectedSubCustomers, subCustomerName]

    onSubCustomerSelect(updatedSelection)
  }

  return (
    <div className="space-y-2">
      {subCustomers.map((subCustomer) => (
        <div key={subCustomer.name} className="flex items-center space-x-2">
          <Checkbox
            id={`checkbox-${customer.name}-${subCustomer.name}`}
            checked={selectedSubCustomers.includes(subCustomer.name)}
            onCheckedChange={() => handleCheckboxChange(subCustomer.name)}
          />
          <label
            htmlFor={`checkbox-${customer.name}-${subCustomer.name}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {subCustomer.name}
          </label>
        </div>
      ))}
    </div>
  )
}

