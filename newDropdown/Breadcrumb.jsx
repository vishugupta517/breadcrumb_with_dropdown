import { ChevronRight } from "lucide-react"
import { CustomerDropdown } from "./CustomerDropdown"

export function Breadcrumb({ customers }) {
  return (
    <nav className="flex flex-wrap items-center space-x-1 text-sm" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a href="/" className="inline-flex items-center text-gray-700 hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <a href="/helpdesk" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">
              Helpdesk
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <CustomerDropdown customers={customers} />
          </div>
        </li>
      </ol>
    </nav>
  )
}

