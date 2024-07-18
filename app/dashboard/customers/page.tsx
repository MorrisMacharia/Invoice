import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, ReactPortal, Key } from "react";

export default function Page() {
  return (
    <div>
      <p>Customers Page</p>
      <div className="customers p-8 bg-gray-50">
  <ul className="space-y-8">
    {[
      { name: "Amy Burns", age: 29, location: "New York, NY", image: "/customers/amy-burns.png" },
      { name: "Evil Rabbit", age: 34, location: "Los Angeles, CA", image: "/customers/evil-rabbit.png" },
      { name: "Delba de Oliveira", age: 28, location: "San Francisco, CA", image: "/customers/delba-de-oliveira.png" },
      { name: "Steven Tey", age: 31, location: "Austin, TX", image: "/customers/steven-tey.png" },
      { name: "Lee Robinson", age: 30, location: "Chicago, IL", image: "/customers/lee-robinson.png" },
      { name: "Michael Novotny", age: 35, location: "Seattle, WA", image: "/customers/michael-novotny.png" },
      { name: "Emil Kowalski", age: 27, location: "Boston, MA", image: "/customers/emil-kowalski.png" },
      { name: "Balazs Orban", age: 33, location: "Miami, FL", image: "/customers/balazs-orban.png" },
      { name: "Hector Simpson", age: 32, location: "Denver, CO", image: "/customers/hector-simpson.png" },
      { name: "Steph Dietz", age: 29, location: "Portland, OR", image: "/customers/steph-dietz.png" },
    ].map((customer, index) => (
      <li key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
        <img src={customer.image} alt={customer.name} className="w-16 h-16 rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">{customer.name}</span>
          <span className="text-gray-500">Age: {customer.age}</span>
          <span className="text-gray-500">Location: {customer.location}</span>
        </div>
      </li>
    ))}
  </ul>
</div>


    </div>
  );
}
