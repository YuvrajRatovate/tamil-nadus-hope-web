
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

// Constants for calculation
const COSTS = {
  alcohol: {
    beer: 150, // Cost per day for average consumption
    wine: 300,
    spirits: 400,
  },
  tobacco: {
    cigarettes: 250,
    beedis: 50,
    other: 150,
  },
  drugs: {
    marijuana: 300,
    other: 600,
  },
};

const PERIODS = [
  { value: '30', label: '30 Days' },
  { value: '365', label: '1 Year' },
  { value: '1825', label: '5 Years' },
  { value: '3650', label: '10 Years' },
];

interface CalculationResult {
  days: number;
  moneySaved: number;
  healthBenefits: string;
  financialEquivalent: string;
}

const SavingsCalculator = () => {
  const [substanceType, setSubstanceType] = useState<'alcohol' | 'tobacco' | 'drugs'>('alcohol');
  const [specificType, setSpecificType] = useState<string>('beer');
  const [dailyCost, setDailyCost] = useState<number>(150);
  const [period, setPeriod] = useState<string>('30');
  const [customAmount, setCustomAmount] = useState<number | ''>('');
  const [results, setResults] = useState<CalculationResult | null>(null);

  // Update daily cost when substance or specific type changes
  useEffect(() => {
    if (substanceType === 'alcohol') {
      setSpecificType('beer');
      setDailyCost(COSTS.alcohol.beer);
    } else if (substanceType === 'tobacco') {
      setSpecificType('cigarettes');
      setDailyCost(COSTS.tobacco.cigarettes);
    } else {
      setSpecificType('marijuana');
      setDailyCost(COSTS.drugs.marijuana);
    }
    setCustomAmount('');
  }, [substanceType]);

  // Update daily cost when specific type changes
  useEffect(() => {
    if (substanceType === 'alcohol') {
      setDailyCost(COSTS.alcohol[specificType as keyof typeof COSTS.alcohol]);
    } else if (substanceType === 'tobacco') {
      setDailyCost(COSTS.tobacco[specificType as keyof typeof COSTS.tobacco]);
    } else {
      setDailyCost(COSTS.drugs[specificType as keyof typeof COSTS.drugs]);
    }
    setCustomAmount('');
  }, [specificType, substanceType]);

  const calculateSavings = () => {
    const days = parseInt(period);
    const finalDailyCost = customAmount !== '' ? customAmount : dailyCost;
    const moneySaved = finalDailyCost * days;
    
    let healthBenefits = '';
    if (substanceType === 'alcohol') {
      if (days >= 30) healthBenefits = 'Improved liver function, better sleep';
      if (days >= 365) healthBenefits = 'Reduced blood pressure, weight loss, improved mental health';
      if (days >= 1825) healthBenefits = 'Significantly lower risk of liver disease and heart problems';
    } else if (substanceType === 'tobacco') {
      if (days >= 30) healthBenefits = 'Improved circulation, lung function begins to improve';
      if (days >= 365) healthBenefits = 'Risk of heart disease drops by half';
      if (days >= 1825) healthBenefits = 'Risk of lung cancer and stroke drops significantly';
    } else {
      if (days >= 30) healthBenefits = 'Improved memory and cognitive function';
      if (days >= 365) healthBenefits = 'Better mental health, reduced risk of psychosis';
      if (days >= 1825) healthBenefits = 'Long-term brain function improvement, reduced risk of mental health issues';
    }

    let financialEquivalent = '';
    if (moneySaved < 5000) {
      financialEquivalent = `A month's groceries for a family`;
    } else if (moneySaved < 50000) {
      financialEquivalent = "A child's school fees for a year";
    } else if (moneySaved < 150000) {
      financialEquivalent = 'A basic motorcycle or major home renovation';
    } else {
      financialEquivalent = 'A significant down payment on a home or full education funding';
    }

    setResults({
      days,
      moneySaved,
      healthBenefits,
      financialEquivalent,
    });
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setCustomAmount('');
    } else {
      const numValue = parseInt(value);
      if (!isNaN(numValue) && numValue >= 0) {
        setCustomAmount(numValue);
      }
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Addiction Savings Calculator</CardTitle>
        <CardDescription>
          Calculate how much money you could save by quitting harmful substances
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="alcohol" onValueChange={(val) => setSubstanceType(val as 'alcohol' | 'tobacco' | 'drugs')}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="alcohol">Alcohol</TabsTrigger>
            <TabsTrigger value="tobacco">Tobacco</TabsTrigger>
            <TabsTrigger value="drugs">Other Drugs</TabsTrigger>
          </TabsList>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="specificType">Type of {substanceType}</Label>
              <Select
                value={specificType}
                onValueChange={setSpecificType}
              >
                <SelectTrigger id="specificType" className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {substanceType === 'alcohol' && (
                    <>
                      <SelectItem value="beer">Beer</SelectItem>
                      <SelectItem value="wine">Wine</SelectItem>
                      <SelectItem value="spirits">Spirits</SelectItem>
                    </>
                  )}
                  {substanceType === 'tobacco' && (
                    <>
                      <SelectItem value="cigarettes">Cigarettes</SelectItem>
                      <SelectItem value="beedis">Beedis</SelectItem>
                      <SelectItem value="other">Other tobacco products</SelectItem>
                    </>
                  )}
                  {substanceType === 'drugs' && (
                    <>
                      <SelectItem value="marijuana">Marijuana</SelectItem>
                      <SelectItem value="other">Other drugs</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="dailyCost">
                Estimated daily cost (₹) 
                <span className="text-sm text-gray-500 ml-2">or enter your own</span>
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded px-4 py-2 flex items-center">
                  <span>₹ {dailyCost} / day</span>
                </div>
                <Input
                  id="customAmount"
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="period">Time period</Label>
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger id="period" className="w-full">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  {PERIODS.map((p) => (
                    <SelectItem key={p.value} value={p.value}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-2">
              <Button onClick={calculateSavings} className="w-full">Calculate Savings</Button>
            </div>
          </div>
        </Tabs>
        
        {results && (
          <div className="mt-8 p-6 border rounded-lg bg-muted/50">
            <h3 className="text-xl font-semibold mb-4">Your Potential Savings</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Time Period:</span>
                <span className="font-medium">{results.days} days</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-muted-foreground">Money Saved:</span>
                <span className="font-bold text-xl text-primary">₹{results.moneySaved.toLocaleString()}</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Health Benefits:</h4>
                <p className="text-muted-foreground">{results.healthBenefits}</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">What this could buy:</h4>
                <p className="text-muted-foreground">{results.financialEquivalent}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SavingsCalculator;
