
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

   

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
  name="contact"
  method="POST"
  data-netlify="true"
  className="space-y-4"
>
  <input type="hidden" name="form-name" value="contact" />
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
          <Button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600">
            Send message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
