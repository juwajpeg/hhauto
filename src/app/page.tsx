import { Button } from "/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card"
import { Badge } from "/components/ui/badge"
import { Phone, MapPin, Clock, Star, Wrench, Truck, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Wrench className="h-8 w-8 text-orange-500" />
              <div>
                <h1 className="text-xl font-bold">H.A Auto & Truck Repair</h1>
                <p className="text-sm text-slate-300">Mobile Auto Repair Services</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#services" className="hover:text-orange-500 transition-colors">
                Services
              </Link>
              <Link href="#about" className="hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link href="#contact" className="hover:text-orange-500 transition-colors">
                Contact
              </Link>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-orange-600 text-white px-4 py-2 text-sm">
                  15+ Years of Professional Experience
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Professional Mobile Auto Repair
                  <span className="text-orange-500"> At Your Location</span>
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Expert automotive repair services that come to you. Serving Southern Ontario with reliable,
                  professional mobile auto and truck repair solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                    <Phone className="h-5 w-5 mr-2" />
                    Get Free Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 bg-transparent"
                  >
                    View Services
                  </Button>
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <span className="text-slate-300">Southern Ontario</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="text-slate-300">24/7 Emergency Service</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Professional mobile auto repair service"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-semibold">15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Mobile Repair Services</h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Professional automotive repair services delivered directly to your location across Southern Ontario
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Engine Repair & Diagnostics</CardTitle>
                  <CardDescription>Complete engine diagnostics, repairs, and maintenance services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Engine diagnostics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Oil changes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Tune-ups
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Engine repairs
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Brake Services</CardTitle>
                  <CardDescription>Professional brake inspection, repair, and replacement services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Brake pad replacement
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Brake fluid service
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Brake inspection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Rotor service
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Truck & Fleet Services</CardTitle>
                  <CardDescription>Specialized repair services for trucks and commercial vehicles</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Heavy-duty repairs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Fleet maintenance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Commercial vehicles
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Emergency roadside
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Emergency Services</CardTitle>
                  <CardDescription>24/7 emergency mobile repair services when you need them most</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      24/7 availability
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Roadside assistance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Jump starts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Battery replacement
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Preventive Maintenance</CardTitle>
                  <CardDescription>Regular maintenance services to keep your vehicle running smoothly</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Scheduled maintenance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Filter replacements
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Fluid checks
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Safety inspections
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Mobile Convenience</CardTitle>
                  <CardDescription>We come to your home, office, or anywhere in Southern Ontario</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      At your location
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      No towing needed
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Save time & money
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Professional equipment
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Professional automotive technician"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Trusted Since 2008</Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">15+ Years of Professional Excellence</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  H.A Auto & Truck Repair has been serving Southern Ontario with reliable, professional mobile
                  automotive services for over 15 years. Our experienced technicians bring the shop to you, providing
                  convenient, high-quality repairs and maintenance at your location.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Licensed & Insured</h4>
                      <p className="text-slate-600 text-sm">Fully licensed and insured for your peace of mind</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Quality Guarantee</h4>
                      <p className="text-slate-600 text-sm">All work backed by our satisfaction guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Fair Pricing</h4>
                      <p className="text-slate-600 text-sm">Transparent, competitive pricing with no hidden fees</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Expert Technicians</h4>
                      <p className="text-slate-600 text-sm">Certified professionals with years of experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Need Mobile Auto Repair Services?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get professional automotive repair services at your location. Call us today for a free quote and
              experience the convenience of mobile repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100 text-lg px-8 py-3">
                <Phone className="h-5 w-5 mr-2" />
                Call for Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-3 bg-transparent"
              >
                Schedule Service
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact H.A Auto & Truck Repair</h3>
              <p className="text-xl text-slate-600">Ready to schedule your mobile auto repair service?</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-slate-900 mb-2">(XXX) XXX-XXXX</p>
                  <p className="text-slate-600">Available 24/7 for emergencies</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Service Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-slate-900 mb-2">Southern Ontario</p>
                  <p className="text-slate-600">Mobile service to your location</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-900 mb-1">Mon-Fri: 8AM-6PM</p>
                  <p className="text-slate-900 mb-1">Sat: 9AM-4PM</p>
                  <p className="text-slate-600">24/7 Emergency Service</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Wrench className="h-8 w-8 text-orange-500" />
                <div>
                  <h4 className="text-xl font-bold">H.A Auto & Truck Repair</h4>
                  <p className="text-slate-400">Mobile Auto Repair Services</p>
                </div>
              </div>
              <p className="text-slate-400">
                Professional mobile automotive repair services serving Southern Ontario for over 15 years.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-slate-400">
                <li>Engine Repair & Diagnostics</li>
                <li>Brake Services</li>
                <li>Truck & Fleet Services</li>
                <li>Emergency Services</li>
                <li>Preventive Maintenance</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (XXX) XXX-XXXX
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Southern Ontario
                </p>
                <p className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24/7 Emergency Service
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} H.A Auto & Truck Repair. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
