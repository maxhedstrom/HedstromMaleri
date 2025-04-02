import { useState } from "react";
import { Button } from "/src/components/ui/button";
import { Input } from "/src/components/ui/input";
import { Textarea } from "/src/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-lg shadow-lg rounded-2xl p-6 bg-white">
        <CardContent>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Kontakta oss</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Namn</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ditt namn"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">E-post</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Din e-post"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Meddelande</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Skriv ditt meddelande här..."
                rows="4"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Skicka
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
