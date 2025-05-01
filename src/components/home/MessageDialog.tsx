
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function MessageDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      })
      
      if (response.ok) {
        toast({
          title: "Message sent",
          description: "Thank you for your message. We'll get back to you shortly."
        })
        setFormData({ name: "", email: "", company: "", message: "" })
        setIsOpen(false)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive"
      })
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-gray-600 hover:text-purple-600 transition-colors">
          Send a message
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Send us a message</DialogTitle>
          <DialogDescription>
            We'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="subject" value="New contact form submission" />
          <input type="hidden" name="to" value="info@thecroquet.com" />
          <div>
            <Input
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              placeholder="Company (Optional)"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <Textarea
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[100px]"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
