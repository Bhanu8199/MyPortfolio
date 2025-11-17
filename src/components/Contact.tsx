import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { saveContactMessage, ContactFormData } from "@/lib/contact";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await saveContactMessage(formData);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "My Address",
      value: "Somavarappadu, Eluru, Andhra Pradesh - 534450",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Call me:",
      value: "+91 9347978199",
      href: "tel:+919347978199",
      color: "text-green-500"
    },
    {
      icon: Mail,
      label: "Mail me:",
      value: "mbhanuvardhan630@gmail.com",
      href: "mailto:mbhanuvardhan630@gmail.com",
      color: "text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Contact
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:items-stretch">
          {/* Contact Info */}
          <div className="space-y-6 md:h-full">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-muted ${info.color}`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-2 bg-gradient-to-br from-primary/10 to-secondary/10 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <p className="font-medium text-foreground mb-3">Follow me:</p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-2"
                      onClick={() => window.open('https://www.linkedin.com/in/bhanu-vardhan-medapalli/', '_blank')}
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-2"
                      onClick={() => window.open('https://leetcode.com/u/Bhanu8199/', '_blank')}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                        alt="LeetCode"
                        className="w-5 h-5 mr-2"
                      />
                      LeetCode
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2"
                      onClick={() => window.open('https://github.com/bhanu8199', '_blank')}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 hover:shadow-lg transition-shadow duration-300 md:h-full">
            <CardContent className="p-6 md:flex md:flex-col md:h-full">

              <form onSubmit={handleSubmit} className="space-y-4 md:flex-grow">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-2"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-2"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="border-2"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="border-2 resize-none"
                  />
                </div>
                <div className="md:mt-auto">
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 font-semibold"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;