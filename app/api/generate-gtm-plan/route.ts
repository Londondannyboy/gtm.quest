import { Anthropic } from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic()

interface GTMRequest {
  companyName: string
  industry: string
  productName: string
  productDescription: string
  marketType: string
  targetCustomer: string
  geography: string
  problem: string
  solution: string
  advantage: string
  stage: string
  hasCustomers: string
  monthlyRevenue: string
  teamSize: string
  primaryGoal: string
  timeline: string
  budget: string
  email: string
}

export async function POST(request: NextRequest) {
  try {
    const data: GTMRequest = await request.json()

    const prompt = `You are an expert GTM (Go-To-Market) strategist. Based on the following company information, create a personalized, actionable GTM strategy.

COMPANY INFORMATION:
- Company: ${data.companyName}
- Industry: ${data.industry}
- Product: ${data.productName}
- Description: ${data.productDescription}
- Market Type: ${data.marketType}
- Target Customer: ${data.targetCustomer}
- Geography: ${data.geography}
- Problem Solved: ${data.problem}
- Unique Solution: ${data.solution}
- Main Advantage: ${data.advantage}
- Current Stage: ${data.stage}
- Has Customers: ${data.hasCustomers}
- Monthly Revenue: ${data.monthlyRevenue}
- Team Size: ${data.teamSize}
- Primary Goal: ${data.primaryGoal}
- Timeline: ${data.timeline}
- Budget: ${data.budget}

Please provide a comprehensive GTM strategy in JSON format with the following structure:
{
  "executive_summary": "A 200-word summary of the recommended GTM approach for this company",
  "recommended_approach": "Product-Led, Sales-Led, or Hybrid",
  "approach_explanation": "Explain why this approach is best for their situation (150 words)",
  "phases": [
    {
      "phase_number": 1,
      "name": "Phase name",
      "duration": "e.g., Weeks 1-4",
      "objectives": ["objective 1", "objective 2", "objective 3"],
      "key_metrics": ["metric 1", "metric 2", "metric 3"]
    }
  ],
  "budget_allocation": {
    "Content Marketing": 25,
    "Paid Ads": 30,
    "Sales & Outreach": 20,
    "Tools & Software": 15,
    "Events & PR": 10
  },
  "success_metrics": {
    "north_star": "The primary metric that defines success",
    "leading_indicators": ["indicator 1", "indicator 2", "indicator 3"],
    "lagging_indicators": ["indicator 1", "indicator 2", "indicator 3"]
  },
  "recommended_agencies": [
    {
      "name": "Agency name",
      "specialization": "Their specialty",
      "reason": "Why they match this company"
    }
  ],
  "next_steps": [
    "First action to take",
    "Second action to take",
    "Third action to take"
  ]
}

Ensure the response is valid JSON that can be parsed. Make recommendations specific to their industry, stage, and goals.`

    const message = await client.messages.create({
      model: 'claude-opus-4-5-20251101',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    // Extract the text content from the response
    const textContent = message.content.find((block) => block.type === 'text')
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text content in response')
    }

    // Parse the JSON from the response
    const jsonMatch = textContent.text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Could not extract JSON from response')
    }

    const plan = JSON.parse(jsonMatch[0])

    // TODO: Save to database if needed
    // const sql = createDbQuery()
    // await sql`
    //   INSERT INTO gtm_plans (email, company_name, industry, inputs, plan, created_at)
    //   VALUES (${data.email}, ${data.companyName}, ${data.industry}, ${JSON.stringify(data)}, ${JSON.stringify(plan)}, NOW())
    // `

    return NextResponse.json(plan)
  } catch (error) {
    console.error('Error generating GTM plan:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate plan' },
      { status: 500 }
    )
  }
}
