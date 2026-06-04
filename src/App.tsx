export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <header className="bg-amber-900 text-white p-4">
        <h1 className="text-3xl font-serif font-bold">Bean to Bag</h1>
        <p className="text-amber-100">Premium Ethiopian Specialty Coffee</p>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">
            Welcome to Caffeol Coffee
          </h2>
          <p className="text-gray-700 mb-6">
            Experience premium Ethiopian Arabica specialty coffee, empowering women in coffee production.
          </p>
          <button className="bg-amber-900 hover:bg-amber-800 text-white font-semibold py-3 px-6 rounded-lg transition">
            Shop Now
          </button>
        </section>
      </main>
    </div>
  )
}
