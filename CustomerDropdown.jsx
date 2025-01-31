import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SubCustomerDropdown } from "./SubCustomerDropdown"

export function CustomerDropdown({ customers }) {
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [selectedSubCustomers, setSelectedSubCustomers] = useState([])

  const handleCustomerSelect = (customer) => {
    if (selectedCustomer !== customer) {
      setSelectedCustomer(customer)
      setSelectedSubCustomers([])
      console.log("Selected customer:", customer.name)
    }
  }

  const handleSubCustomerSelect = (customer, subCustomers) => {
    if (selectedCustomer !== customer) {
      setSelectedCustomer(customer)
      setSelectedSubCustomers(subCustomers)
      console.log("Selected customer:", customer.name)
    } else {
      setSelectedSubCustomers(subCustomers)
    }
    console.log("Selected subcustomers:", subCustomers)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="inline-flex items-center">
          {selectedCustomer ? selectedCustomer.name : "Select Customer"}
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {customers.map((customer) => (
          <DropdownMenuItem key={customer.name} onSelect={() => handleCustomerSelect(customer)}>
            <div className="flex items-center justify-between w-full">
              {customer.name}
              {customer.subCustomers && (
                <SubCustomerDropdown
                  customer={customer}
                  subCustomers={customer.subCustomers}
                  onSubCustomerSelect={(subCustomers) => handleSubCustomerSelect(customer, subCustomers)}
                  isActive={selectedCustomer === customer}
                />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

