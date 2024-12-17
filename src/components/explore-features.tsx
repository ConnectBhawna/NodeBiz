import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Database, Shield, Code2 } from 'lucide-react'

const features = [
  {
    title: 'Seamless GitHub Deployment',
    description: 'Deploy your dApps to the permaweb with a single click.',
    icon: <Github className="h-8 w-8 mb-2 text-green-500" />,
    items: ['One-click Deployment', 'Automatic Verification', 'Version Control']
  },
  {
    title: 'Eternal Storage',
    description: 'Your data is stored forever on the decentralized web.',
    icon: <Database className="h-8 w-8 mb-2 text-green-500" />,
    items: ['Decentralized Hosting', 'Immutable', 'Censorship-Resistant']
  },
  {
    title: 'Automated CI/CD',
    description: 'Streamline your development and deployment processes.',
    icon: <Code2 className="h-8 w-8 mb-2 text-green-500" />,
    items: ['Continuous Integration', 'Automated Testing', 'Instant Rollbacks']
  },
  {
    title: 'Decentralized by Design',
    description: 'Built on a truly decentralized network for maximum security.',
    icon: <Shield className="h-8 w-8 mb-2 text-green-500" />,
    items: ['No Single Point of Failure', 'Peer-to-Peer Architecture', 'Blockchain-Powered']
  }
]

export function ExploreFeatures() {
  return (
    <section className="py-16 bg-black/20 ml-32 justify-center">
      <div className="container px-4 md:px-6 ">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 ">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-400">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-[#96EA63] hover:bg-green-600">
            Learn More About Our Features
          </Button>
        </div>
      </div>
    </section>
  )
}

