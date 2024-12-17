import { ShieldCheck, Server, Clock, Cpu, Lock, Zap } from 'lucide-react'

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
    title: "Use click deployments",
    description: "Deploy your dApps to the permaweb with a single click"
  },
  {
    icon: <Server className="h-6 w-6 text-green-500" />,
    title: "24/7 Unlimited Nodes",
    description: "Your dApps stored forever on the decentralized web"
  },
  {
    icon: <Clock className="h-6 w-6 text-green-500" />,
    title: "MEV Security",
    description: "Your content is immune to censorship and blockchain"
  },
  {
    icon: <Cpu className="h-6 w-6 text-green-500" />,
    title: "CPU-Powered Machines",
    description: "No recurring charges or setup time fees"
  },
  {
    icon: <Lock className="h-6 w-6 text-green-500" />,
    title: "Temporary Holding Nodes",
    description: "Easy automated back-end deployment processes"
  },
  {
    icon: <Zap className="h-6 w-6 text-green-500" />,
    title: "Decentralized by Design",
    description: "Built on a truly decentralized network"
  }
]

export function FeaturesGrid() {
  return (
    <div className="container px-4 md:px-6 py-12 ">
      <div className="pl-40 ml-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 item-centre">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-start space-x-4 rounded-lg border border-gray-800 p-4 backdrop-blur-sm"
          >
            {feature.icon}
            <div>
              <h3 className="font-medium mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

