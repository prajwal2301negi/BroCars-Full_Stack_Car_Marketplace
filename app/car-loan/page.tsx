'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function CarLoanPage() {
  const features = [
    "Minimum documentation",
    "Quick approval",
    "Low down payment",
  ]

  return (
    <section className="container py-12 space-y-8">
      <div className="text-center space-y-3">
        <Badge variant="secondary" className="text-sm">Powered by broCars</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Drive Now, Pay Later</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          broCars helps you finance your next ride with competitive rates and lightning-fast approvals from our trusted partners.
        </p>
      </div>

      <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Why Choose broCars Loan?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-base text-muted-foreground">
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1" size={20} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
