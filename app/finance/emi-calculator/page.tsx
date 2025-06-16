'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const COLORS = ['#3B82F6', '#EF4444', '#10B981'];

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState([1000000]);
  const [interestRate, setInterestRate] = useState([9.5]);
  const [tenure, setTenure] = useState([5]);

  const calculateEMI = () => {
    const principal = loanAmount[0];
    const monthlyRate = interestRate[0] / (12 * 100);
    const tenureMonths = tenure[0] * 12;
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / 
                (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalAmount = Math.round(emi * tenure[0] * 12);
  const totalInterest = totalAmount - loanAmount[0];

  const pieData = [
    { name: 'Principal', value: loanAmount[0], color: '#3B82F6' },
    { name: 'Interest', value: totalInterest, color: '#EF4444' },
  ];

  const yearlyData = Array.from({ length: tenure[0] }, (_, index) => {
    const year = index + 1;
    const yearlyEMI = emi * 12;
    const remainingPrincipal = loanAmount[0] - (loanAmount[0] / tenure[0]) * (year - 1);
    const yearlyInterest = remainingPrincipal * (interestRate[0] / 100);
    const yearlyPrincipal = yearlyEMI - yearlyInterest;
    
    return {
      year: `Year ${year}`,
      Principal: Math.round(yearlyPrincipal),
      Interest: Math.round(yearlyInterest),
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">EMI Calculator</h1>
            <p className="text-gray-600">Calculate your monthly EMI and plan your car purchase budget</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Controls */}
            <Card>
              <CardHeader>
                <CardTitle>Loan Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Loan Amount</Label>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">₹</span>
                      <Input
                        type="number"
                        value={loanAmount[0]}
                        onChange={(e) => setLoanAmount([Number(e.target.value)])}
                        className="w-32 text-right"
                      />
                    </div>
                  </div>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={5000000}
                    min={100000}
                    step={50000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>₹1 Lakh</span>
                    <span>₹50 Lakh</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Interest Rate (% per annum)</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        step="0.1"
                        value={interestRate[0]}
                        onChange={(e) => setInterestRate([Number(e.target.value)])}
                        className="w-20 text-right"
                      />
                      <span className="text-sm text-gray-600">%</span>
                    </div>
                  </div>
                  <Slider
                    value={interestRate}
                    onValueChange={setInterestRate}
                    max={20}
                    min={5}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Loan Tenure</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        value={tenure[0]}
                        onChange={(e) => setTenure([Number(e.target.value)])}
                        className="w-20 text-right"
                      />
                      <span className="text-sm text-gray-600">years</span>
                    </div>
                  </div>
                  <Slider
                    value={tenure}
                    onValueChange={setTenure}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>1 year</span>
                    <span>10 years</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Get Pre-Approved
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {/* EMI Result */}
              <Card>
                <CardHeader>
                  <CardTitle>EMI Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
                      <p className="text-2xl font-bold text-blue-600">₹{emi.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Principal Amount</p>
                      <p className="text-xl font-bold text-green-600">₹{(loanAmount[0] / 100000).toFixed(1)}L</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                      <p className="text-xl font-bold text-red-600">₹{(totalInterest / 100000).toFixed(1)}L</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
                    <p className="text-sm text-gray-600 mb-1">Total Amount Payable</p>
                    <p className="text-2xl font-bold text-gray-900">₹{(totalAmount / 100000).toFixed(1)} Lakh</p>
                  </div>
                </CardContent>
              </Card>

              {/* Pie Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: any) => `₹${(value / 100000).toFixed(1)}L`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Yearly Breakdown Chart */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Yearly Payment Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis tickFormatter={(value: number) => `₹${(value / 1000).toFixed(0)}K`} />
                    <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                    <Legend />
                    <Bar dataKey="Principal" stackId="a" fill="#3B82F6" />
                    <Bar dataKey="Interest" stackId="a" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>EMI Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Ways to Reduce EMI</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Increase down payment amount</li>
                    <li>• Choose longer tenure (increases total interest)</li>
                    <li>• Negotiate for better interest rates</li>
                    <li>• Consider pre-payment options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Things to Remember</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• EMI should not exceed 40% of monthly income</li>
                    <li>• Factor in insurance and maintenance costs</li>
                    <li>• Compare rates from multiple lenders</li>
                    <li>• Read all terms and conditions carefully</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}