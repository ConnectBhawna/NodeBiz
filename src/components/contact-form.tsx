'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  return (
    <section className="container px-4 md:px-6 py-12 ml-32" id="contact">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
        <p className="text-gray-400 mb-8">
          Contact us for additional details or assistance.
        </p>
        <form className="space-y-4">
          <div>
            <Input
              placeholder="Name"
              className="bg-gray-900 border-gray-800"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="bg-gray-900 border-gray-800"
            />
          </div>
          <div>
            <Textarea
              placeholder="Message"
              className="bg-gray-900 border-gray-800 min-h-[150px]"
            />
          </div>
          <Button className="w-full bg-[#96EA63] hover:bg-green-600">
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}

