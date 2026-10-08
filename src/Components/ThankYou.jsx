import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="py-28 text-center">
      <h2 className="text-3xl font-bold">Thanks! We received your request</h2>
      <p className="mt-4 text-gray-600 ">We will reach out to you shortly to discuss details and availability.</p>
      <div className="mt-6">
        <Link to="/" className="text-indigo-600 underline">Back to home</Link>
      </div>
    </div>
  )
}