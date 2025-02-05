import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
import { SubCustomerCheckboxes } from "./SubCustomerCheckboxes"

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
    }
    setSelectedSubCustomers(subCustomers)
    console.log("Selected customer:", customer.name)
    console.log("Selected subcustomers:", subCustomers)
  }

  const getDisplayText = () => {
    if (selectedCustomer) {
      if (selectedSubCustomers.length > 0) {
        return `${selectedCustomer.name} (${selectedSubCustomers.length} selected)`
      }
      return selectedCustomer.name
    }
    return "Select Customer"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="inline-flex items-center min-w-[200px] justify-between">
          <span className="truncate">{getDisplayText()}</span>
          <ChevronDown className="w-4 h-4 ml-2 flex-shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        {customers.map((customer) =>
          customer.subCustomers ? (
            <DropdownMenuSub key={customer.name}>
              <DropdownMenuSubTrigger className="justify-between" onClick={() => handleCustomerSelect(customer)}>
                {customer.name}
                <ChevronRight className="w-4 h-4 ml-2" />
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-64 p-2">
                <SubCustomerCheckboxes
                  customer={customer}
                  subCustomers={customer.subCustomers}
                  selectedSubCustomers={selectedCustomer === customer ? selectedSubCustomers : []}
                  onSubCustomerSelect={(subCustomers) => handleSubCustomerSelect(customer, subCustomers)}
                />
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          ) : (
            <DropdownMenuItem key={customer.name} onSelect={() => handleCustomerSelect(customer)}>
              {customer.name}
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

