import { useState, useEffect } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Checkbox } from "@/components/ui/checkbox"

export function SubCustomerDropdown({ customer, subCustomers, onSubCustomerSelect, isActive }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSubCustomers, setSelectedSubCustomers] = useState([])

  useEffect(() => {
    if (!isActive) {
      setSelectedSubCustomers([])
      setIsOpen(false)
    }
  }, [isActive])

  const handleCheckboxChange = (subCustomerName) => {
    const updatedSelection = selectedSubCustomers.includes(subCustomerName)
      ? selectedSubCustomers.filter((name) => name !== subCustomerName)
      : [...selectedSubCustomers, subCustomerName]

    setSelectedSubCustomers(updatedSelection)
    onSubCustomerSelect(updatedSelection)
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-end p-1" onClick={(e) => e.stopPropagation()}>
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 space-y-1">
        {subCustomers.map((subCustomer) => (
          <div key={subCustomer.name} className="flex items-center space-x-2 py-1" onClick={(e) => e.stopPropagation()}>
            <Checkbox
              id={`checkbox-${customer.name}-${subCustomer.name}`}
              checked={selectedSubCustomers.includes(subCustomer.name)}
              onCheckedChange={() => handleCheckboxChange(subCustomer.name)}
            />
            <label
              htmlFor={`checkbox-${customer.name}-${subCustomer.name}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 truncate"
            >
              {subCustomer.name}
            </label>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

